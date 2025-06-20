# Pyenv

## 什么是 Pyenv？

Pyenv 是一个轻量级的 Python 版本管理工具，支持在同一台机器上安装多个 Python 版本，并能方便地在项目间切换不同版本，避免环境冲突。

#### 使用

```bash
# 查看可用 Python 版本
pyenv install --list

# 安装指定版本
pyenv install 3.11.4

# 切换 Python 版本（全局）
pyenv global 3.11.4

# 切换 Python 版本（当前 shell 会话）
pyenv shell 3.10.8

# 为项目指定版本（本地）  在项目根目录执行：
pyenv local 3.9.15
# 会生成 .python-version 文件，目录及其子目录会自动使用该版本。

# 查看当前 Python 版本
pyenv version

# 卸载 Python 版本
pyenv uninstall 3.8.12

```
