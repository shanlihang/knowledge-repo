# wsl 适用于 Windows 的 Linux 子系统

## 概述

### 什么是 wsl

wsl（Windows Subsystem for Linux）：适用于 Windows 的 Linux 子系统，允许 Windows 用户在 Windows 操作系统上原生运行 Linux 环境，而无需使用虚拟机或双启动

### 主要特性

```bash
1. 无缝集成：双系统间应用程序之间的高度集成，轻松地调用两系统中的文件和程序
2. 支持 Docker：完全支持 Docker 和容器化技术
3. 网络支持：提供了完整的网络支持，包括 DNS、防火墙和路由
4. 性能优化：提供了更好的性能和更低的延迟，使得 Linux 应用程序运行更快
5. 安全性：提供了更好的安全性，包括用户权限和文件系统隔离
6. 兼容性：兼容大多数 Linux 应用程序和工具，包括命令行工具、开发工具和桌面应用程序
```

### WSL 1 与 WSL 2 的区别

| 特性         | WSL 1                        | WSL 2                                 |
| ------------ | ---------------------------- | ------------------------------------- |
| Linux 内核   | 没有真正的 Linux 内核        | 使用真正的 Linux 内核                 |
| 性能         | 性能较低，尤其是文件系统操作 | 性能更高，文件系统操作更快            |
| 兼容性       | 只支持部分 Linux 系统调用    | 支持更多的 Linux 系统调用，兼容性更好 |
| 容器支持     | 不支持容器化应用             | 完全支持 Docker 和容器化应用          |
| 系统调用支持 | 有部分系统调用不兼容         | 更全面支持 Linux 系统调用             |

## 安装

> 仅 windows 系统需要 wsl，提供两种简易方式

1. `Microsoft Store` 搜索 `Ubuntu` 选择何时版本进行下载
2. 以 `管理员` 身份打开 PowerShell，输入下载指令

```shell
wsl --install
```

2. 下载完成后 `重启` ，会自动弹出弹窗，配置 `用户名` 及 `密码` 后即可完成安装
3. 注意事项

> 1. 若重启后未出现弹窗，再次输入 `wsl --install` 即可
> 2. 安装 `wsl` 需开启加速器
> 3. wsl 存储路径：`C:\Users\67490\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState`

## 配置

### oh-my-zsh 终端工具

可参考 [oh-my-zsh 安装及配置](../../tools/terminal/zsh.md)

### 网络代理配置

1. 在用户目录中创建文件`.wslconfig`
2. 填写以下内容

```bash
[wsl2]
networkingMode=mirrored
autoProxy=true
dnsTunneling=true
firewall=true

[experimental]
bestEffortDnsParsing=true
useWindowsDnsCache=true
```
