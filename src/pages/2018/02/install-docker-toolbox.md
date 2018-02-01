---
title: 在 Windows 7 中安装 docker-toolbox
date: "2018-02-01"
path: "/install-docker-toolbox/"
---

## 安装 VirtualBox 4.3.12 和 Docker Toolbox

需要在 Windows 环境使用 docker 的话， docker 官方提供了两种方式：

* 针对 Windows 7 & 8.1 的 [Docker Toolbox](https://docs.docker.com/toolbox/)
* 针对 Windows 10+ 的 [Docker for Windows](https://docs.docker.com/docker-for-windows/)

我们在 Windows 7 下选择阿里镜像下载
[Docker Toolbox](http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/)。

Docker Toolbox 组件包括:

* Docker Client
* Docker Machine
* Docker Compose (Mac only)
* Docker Kitematic
* VirtualBox

但是由于 VirtualBox 新版本在 Windows 7 无法正常运行，因此选择
[VirtualBox 4.3.12](http://download.virtualbox.org/virtualbox/4.3.12/VirtualBox-4.3.12-93733-Win.exe)
及其
[扩展包](http://download.virtualbox.org/virtualbox/4.3.12/Oracle_VM_VirtualBox_Extension_Pack-4.3.12-93733a.vbox-extpack)。

安装好 VirtualBox 4.3.12 后，再安装 Docker Toolbox （注意不要勾选 VirtualBox）。

## 配置镜像加速器

因为网络原因，国内开发通常需要配置阿里云容器 Hub 服务提供的镜像来加速镜像的下载。

登录 [阿里云容器 Hub 服务控制台](https://cr.console.aliyun.com/?spm=a2c4e.11153959.blogcont29941.12.b74d945W03rIu)。
在左侧菜单 `容器镜像服务 > 镜像加速器` 中可看到分配的加速器地址，
然后根据操作文档进行配置。

* 创建一台安装有Docker环境的Linux虚拟机，指定机器名称为default，同时配置Docker加速器地址。

```bash
docker-machine create --engine-registry-mirror=https://i8w97nfd.mirror.aliyuncs.com -d virtualbox default
```

> **注意** `docker-machine` 会从 `/Users/{username}/.docker` 目录查找和存储虚拟机镜像，
> 因此需要在 C 盘所在的目录打开命令行执行。
>
> **Tips** 对不想将镜像直接存放在 C 盘的用户，可以创建一个目录链接，链接到其它盘：
> 
> `mklink /D C:\Users\{username}\.docker D:\store\docker\.docker`
> 
> 这里的 {username} 是当前系统的用户名

* 查看机器的环境配置，并配置到本地，并通过Docker客户端访问Docker服务。

```bash
docker-machine env default
eval "$(docker-machine env default)"
docker info
```

这里 `eval` 不是系统内置命令，应该是将上面查看配置的输出逐行在控制台手动输入。

`docker info` 能正常输出就可以看到容器镜像配置完成了。
