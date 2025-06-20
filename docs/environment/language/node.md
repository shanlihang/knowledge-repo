# NVM

## 什么是 NVM？

NVM 是一个用于管理多个 Node.js 版本的命令行工具，支持快速切换不同版本，方便开发不同项目时保持环境一致。

#### 安装 NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

#### 使用

```bash
# 查看可用 Node.js 版本
nvm ls-remote

# 安装 Node.js 版本
nvm install 16.13.0

# 切换到指定版本
nvm use 16.13.0

# 列出所有安装的版本
nvm ls

# 卸载指定版本
nvm uninstall 16.13.0

# 设置默认版本
nvm alias default 16.20.0
```
