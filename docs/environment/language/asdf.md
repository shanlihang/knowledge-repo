# ASDF 版本管理器使用手册

## 什么是 ASDF？

ASDF 是一个多语言版本管理器，一站式管理 Node.js、Python、Ruby、Go、Elixir 等多种语言版本。通过插件机制扩展支持，简化开发环境配置，统一切换管理，适合多语言项目开发者。

---

#### 使用

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
