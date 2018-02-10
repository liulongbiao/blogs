---
title: 在 MySQL 数据库大表中添加字段实例
date: "2018-02-10"
path: "/add-column-on-big-table/"
tags: ["planning", "project management"]
---

线上的 MySQL 数据库根据业务情况需要添加字段，以下是 DBA 给出的具体操作实例：

小表情况下的添加逻辑：

```sql
ALTER TABLE ls_evaluate
ADD COLUMN schoolId bigint(20) NOT NULL DEFAULT 0 AFTER content; 
ADD INDEX idx_ls_evaluate_schoolId (schoolId) USING BTREE;

UPDATE ls_evaluate a SET 
schoolId = (
  SELECT schoolId FROM ls_lesson b 
  WHERE 
    a.courseSingleId = b.courseSingleId
    AND b.isDeleted = 0
)
WHERE a.isDeleted = 0;
```

测试环境表信息：

```sql
>select count(evaluateId) from ls_evaluate;
+-------------------+
| count(evaluateId) |
+-------------------+
|          26105089 |
+-------------------+
1 row in set (3 min 11.86 sec)
```

```sql
>select count(courseSingleId) from ls_lesson;
+-----------------------+
| count(courseSingleId) |
+-----------------------+
|                690643 |
+-----------------------+
```

## 增加字段、创建索引

* 备份表

```bash
mysqldump -uroot -p -q --single-transaction lesson ls_evaluate > /otp/20180210_evaluate_backup.sql
```

先安装 `percona-toolkit`，使用里面的OSC工具执行了增加字段、创建索引的操作，花费时间20分钟。

```bash
./bin/pt-online-schema-change -uroot -pcnstrong#123454321 -S /data/mysql01/mysql.sock --alter "ADD COLUMN schoolId  bigint(20) NOT NULL DEFAULT 0 AFTER content, ADD INDEX idx_ls_evaluate_schoolId (schoolId)" D=lesson,t=ls_evaluate --execute
```

标准输出：

```
No slaves found.  See --recursion-method if host mysqlmq-107 has slaves.
Not checking slave lag because no slaves were found and --check-slave-lag was not specified.
Operation, tries, wait:
  analyze_table, 10, 1
  copy_rows, 10, 0.25
  create_triggers, 10, 1
  drop_triggers, 10, 1
  swap_tables, 10, 1
  update_foreign_keys, 10, 1
Altering `lesson`.`ls_evaluate`...
Creating new table...
Created new table lesson._ls_evaluate_new OK.
Altering new table...
Altered `lesson`.`_ls_evaluate_new` OK.
2018-02-10T17:19:18 Creating triggers...
2018-02-10T17:19:18 Created triggers OK.
2018-02-10T17:19:18 Copying approximately 25421419 rows...
Copying `lesson`.`ls_evaluate`:   2% 18:12 remain
...
Copying `lesson`.`ls_evaluate`:  91% 01:52 remain
Copying `lesson`.`ls_evaluate`:  94% 01:17 remain
Copying `lesson`.`ls_evaluate`:  96% 00:52 remain
Copying `lesson`.`ls_evaluate`:  97% 00:28 remain
Copying `lesson`.`ls_evaluate`:  99% 00:03 remain
2018-02-10T17:43:11 Copied rows OK.
2018-02-10T17:43:11 Swapping tables...
2018-02-10T17:43:11 Swapped original and new tables OK.
2018-02-10T17:43:11 Dropping old table...
2018-02-10T17:43:11 Dropped old table `lesson`.`_ls_evaluate_old` OK.
2018-02-10T17:43:11 Dropping triggers...
2018-02-10T17:43:11 Dropped triggers OK.
```

## 更新字段

尝试直接在表上面执行更新操作，执行了30分钟，一直卡死状态。
写了一个存储过程，通过游标处理更新操作，执行时间37分。

```sql
delimiter $$
create procedure proc_update_table()
     BEGIN
     /* Declare Variables */
     DECLARE done_1 INT DEFAULT FALSE;
     DECLARE v_courseSingleId bigint;
	 DECLARE v_schoolId bigint;
     declare the_query VARCHAR(500);
    
     /* Declare Conditions */
     DECLARE not_found CONDITION FOR 1741;
    
     /* Declare Cursors */
     DECLARE cur1 CURSOR FOR select courseSingleId, schoolId from ls_lesson b where 
     b.isDeleted = 0 order by courseSingleId;
    
     /* Declare Exception Handlers, usually with set actions */
     /* usually with set actions, the following handler has two forms,
     /*>  one with begin .. end statements, and the other without */
     DECLARE CONTINUE HANDLER FOR NOT FOUND SET done_1 = TRUE;
    
         OPEN cur1;
         read_loop_1: LOOP
         FETCH cur1 INTO v_courseSingleId, v_schoolId;
     IF done_1 IS FALSE THEN
	 set @v_courseSingleId=v_courseSingleId;
     set @v_schoolId=v_schoolId;
         select concat('update ls_evaluate a set schoolId = ', @v_schoolId, ' where a.isDeleted = 0 and a.courseSingleId = ', @v_courseSingleId, ';') into the_query;
     SET @stmt=the_query;
     PREPARE STMT FROM @stmt;
     EXECUTE STMT;
     DEALLOCATE PREPARE STMT;
	 commit;
     END IF;
         IF done_1 THEN
         LEAVE read_loop_1;
     END IF;
     END LOOP read_loop_1;
     CLOSE cur1;
         end$$
```

执行存储过程：

```
>call proc_update_table();
Query OK, 0 rows affected, 1 warning (36 min 41.04 sec)
```

验证数据

```
>select count(a.schoolId) from ls_evaluate a, ls_lesson b 
    -> where a.courseSingleId = b.courseSingleId
    -> and a.isDeleted = 0 and b.isDeleted = 0 and a.schoolId=0;
+-------------------+
| count(a.schoolId) |
+-------------------+
|                 0 |
+-------------------+
1 row in set (7.54 sec)
```

删除存储过程：

```
>drop procedure proc_update_table;
```

至此，整个在大表中添加字段过程完毕。
