# GVM

## 什么是 GVM？

GVM 是一个用于管理多个 Go 语言版本的命令行工具，支持快速安装、切换不同 Go 版本，方便在多个项目间保持环境一致。

## 安装 GVM

### Linux / macOS

执行以下命令安装 GVM：

```bash
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```

#### 使用

```bash
# 查看可用 Go 版本
gvm listall

# 安装指定版本
gvm install go1.20.5

# 使用指定版本
gvm use go1.20.5 --default

查看当前使用版本
go version

# 列出已安装的版本
gvm list

# 卸载版本
gvm uninstall go1.18.0

```
