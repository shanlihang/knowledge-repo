# zsh 命令行美化及增强工具

## 概述

- Zsh（Z shell）：功能强大的命令行解释器，具有可编程性、可定制性和可扩展性。
- Oh My Zsh：一个开源的 Zsh 配置管理工具，提供了一系列主题和插件，使 Zsh 更加美观和实用。

## 安装

1. 检测 `apt` 更新

```shell
sudo apt update
```

2. 安装 zsh

```shell
sudo apt install zsh
```

3. 安装 oh-my-zsh：

```shell
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

4. 设置 zsh 为默认 shell

```shell
chsh -s $(which zsh)
```

## 配置

- 配置文件路径： `~/.zshrc`
- 常用插件列表

| 插件名称                | 插件作用            | 下载命令                                                                                                              |
| ----------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| git                     | 显示 git 仓库的状态 | 内置插件，无需下载                                                                                                    |
| zsh-autosuggestions     | 自动补全命令        | git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions            |
| zsh-syntax-highlighting | 语法高亮            | git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/pluginszsh-syntax-highlighting |
| zsh-completions         | 扩展命令补全        | git clone https://github.com/zsh-users/zsh-completions.git ~/.oh-my-zsh/custom/plugins/zsh-completions                |

- 配置文件示例

```shell
export ZSH="$HOME/.oh-my-zsh"

# 主题
ZSH_THEME="robbyrussell"

# 插件，下载后添加到列表中
plugins=(git zsh-autosuggestions zsh-syntax-highlighting zsh-completions)

source $ZSH/oh-my-zsh.sh
```
