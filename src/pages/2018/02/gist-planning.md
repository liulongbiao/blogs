---
title: GIST 规划
date: "2018-02-09"
path: "/gist-planning/"
tags: ["planning", "project management"]
---

使用 GIST 规划来取代产品路线图

参考地址： https://hackernoon.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1

原有的产品路线图有很长的产品路线图的确定流程，而这个流程通常是以瀑布流的形式产生的。
在当前敏捷环境下，我们希望能够将产品规划分层区分出来，使每一层能够小步并行地进行。

GIST 规划包含：

* Goals 目标
* Ideas 想法
* Step-projects 步骤项目
* Tasks 任务

其中每一层都具有不同的规划视野和变更频率，也可能使用不同的工具来跟踪，
但它们一起组成了任何公司和团队所需的核心的规划。

大多数规划有一个根本性的错误，它们指定解决方案而不是目标。
指定目标满足 [Mission Command](https://en.wikipedia.org/wiki/Mission_command) 原则：
告诉团队目标，然后让他们自己找到完成目标的方式。
Goals 以所需结果的术语来描述公司的策略：我们要去哪里，何时达到以及我们如何知道已经达到目标了。
Goals 通常以 [OKR](https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/)
的形式给出。

Ideas 描述了达到目标的 **假设性** 的方式。
存在很多方式可以达到某个目标，但 [至多三分之一](http://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf) 的想法能有正向的结果(通常比率远少于此)。

GIST 不会一开始就灭掉想法，它会将所有想法都放到一个优先级竞争中。

* 我们将想法都放到一个 **想法仓库** 中，通常是电子表格或者数据库中
* 使用 [证据](https://medium.com/@itamargilad/evidence-based-scoring-a-systematic-way-to-know-if-you-have-a-good-idea-44d39e166abf) 来做优先级，如
[ICE 优先级处理](https://medium.com/@itamargilad/why-impact-effort-prioritization-doesnt-work-57d141fafc2c)
* 根据优先级尽可能多地测试想法 -- 这是 步骤项目 的任务

“Think Big but Start Small” — [Google’s 8 pillars of innovation](https://www.thinkwithgoogle.com/marketing-resources/8-pillars-of-innovation/)

Step Projects 依据想法的优先级，依据精益创业的 Build-Measure-Learn 原则来实际试验和测试想法。
经过每个步骤项目，逐渐会给用户呈现出想法的更加完整的版本。
其结果产品通常会比我们刚开始设想的更加好（[这篇博文](https://blog.itnig.net/optimizing-your-project-for-learning-dfb60e86fd09) 解释了为什么会这样）

最后每个项目会拆分为细粒度的活动，称为 Tasks。
这部分系统可以由敏捷规划工具来覆盖，如看板或其它开发项目管理工具。

关键原则：

* 不隔离收集想法、规划和执行 -- 它们会一直并发出现
* 明确目标，而不是解决方案或者模糊的策略声明
* 想法仓库，而不是产品 backlogs
* 短时的小于季度的步骤项目，而不是长时的多季度/多年的项目
* 不投注于少数可能需要很长时间来实现的大想法，我们会很快测试很多想法，并采纳实际可行的想法
* 迭代，我们经常性并且系统性地回顾计划的每个部分，并且在所有层级上都保持敏捷
