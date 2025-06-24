# ASDF 版本管理器使用手册

## 概述

### 什么是 ASDF？

ASDF 是一个多语言版本管理器，一站式管理 Node.js、Python、Ruby、Go、Elixir 等多种语言版本。通过插件机制扩展支持，简化开发环境配置，统一切换管理，适合多语言项目开发者。

### 工作原理

一旦 asdf 核心在 Shell 配置中设置好之后，你可以安装插件来管理特定的工具。当通过插件安装工具时，安装的可执行程序会为每个可执行程序创建 垫片。当你尝试运行其中一个可执行程序时，将运行垫片，从而允许 asdf 识别 .tool-versions 文件中设置的工具版本并执行该版本。

## 安装

### windows（WSL）

1. 安装核心组件

```bash
sudo apt update && sudo apt install -y curl git automake autoconf libreadline-dev \
  libncurses-dev libssl-dev libyaml-dev libxslt-dev libffi-dev libtool \
  unixodbc-dev unzip

```

2. 安装 asdf

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

3. 环境变量配置

```bash
echo '. "$HOME/.asdf/asdf.sh"' >> ~/.zshrc
echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.zshrc
source ~/.zshrc
```

4. 验证

```bash
asdf --version
```

### MacOS

1. 安装核心组件

```bash
brew install coreutils curl git
```

2. 安装 asdf

```bash
brew install asdf
```

3. 环境变量配置

```bash
echo -e '\n. "$(brew --prefix asdf)/libexec/asdf.sh"' >> ~/.zshrc
source ~/.zshrc
```

4. 验证

```bash
asdf --version
```

## 使用

```bash
# 安装插件
asdf plugin add <language> <地址>

# 查看插件支持的版本
asdf list-all <language>

# 安装指定版本
asdf install <language> <version>

# 设置版本
asdf global <language> <version> # 全局版本
asdf local <language> <version> # 局部版本

# 列出已安装版本
asdf list <language>

# 卸载版本
asdf uninstall <language> <version>
```
