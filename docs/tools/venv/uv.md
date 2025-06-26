# uv 虚拟环境管理工具

## 概述

### 什么是 uv

`uv` 是由 Astral.sh 团队用 Rust 编写的极速 Python 包和项目管理器，定位为 “Python 的 Cargo”。它集成虚拟环境、Python 版本管理、依赖管理、执行脚本等功能，安装速度比 pip 快 10–100 倍

### 核心特点

- 极速安装（并行 resolver + 编译 + 缓存机制）
- 一体化体验：替代传统 pip + venv + pip-tools + pipx
- 锁文件支持：确保跨平台环境一致
- 多版本管理：类似 pyenv
- 工具运行支持：可直接执行脚本/命令（uv run / uvx）

## 安装

### MacOS

```bash
# 下载命令
curl -LsSf https://astral.sh/uv/install.sh | sh

# 验证安装
uv --version
```

### Windows

```bash
# 下载命令
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# 验证安装
uv --version
```

## 使用

### 虚拟环境管理

#### 创建虚拟环境

```bash
# 默认路径为.venv
uv venv

# 自定义路径
uv venv 自定义路径
```

#### 激活虚拟环境

```bash
# MacOS
source .venv/bin/activate

# Windows（二选一）
.venv\Scripts\activate.bat
.venv\Scripts\Activate.ps1
```

#### 退出虚拟环境

```bash
deactivate
```

### 基础依赖管理

#### 依赖下载

```bash
uv pip install 包名
```

#### 依赖卸载

```bash
uv pip uninstall 包名
```

#### 依赖写入

```bash
uv pip freeze > requirements.txt
```

### 项目管理

#### 创建项目

> 创建项目不会自动创建虚拟环境，需额外创建  
> 虚拟环境的创建，激活和退出与上面一致

```bash
uv init 项目名
```

| 生成的文件        | 作用               |
| ----------------- | ------------------ |
| `.python-version` | python 版本｜      |
| `main.py`         | 示例代码           |
| `pyproject.toml`  | 记录项目和依赖信息 |

#### 新增依赖

> 使用 `add` 进行依赖下载会自动记录到 `.python-version` 并生成 `uv.lock` 依赖锁文件

```bash
uv add 依赖名

# 使用 dev 参数下载只用于开发环境
uv add --dev 依赖名
```

#### 移除依赖

```bash
uv remove 依赖名
```

#### 基于项目安装所有依赖

```bash
uv sync
```

### 版本管理

#### 查看可下载列表

```bash
uv sync
```

#### 下载 python

```bash
uv python install 版本
```

#### 绑定当前项目版本

```bash
uv python pin 版本
```
