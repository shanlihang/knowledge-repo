# Git 使用指南

## 连接方式

### https

> 需保证网络通畅/通过配置代理操作

| 系统    | 配置方法                                                                              |
| ------- | ------------------------------------------------------------------------------------- |
| Windows | `$env:HTTP_PROXY="http://127.0.0.1:10810"; $env:HTTPS_PROXY="http://127.0.0.1:10810"` |
| macOS   | `export https_proxy=http://127.0.0.1:1095 && export http_proxy=http://127.0.0.1:1095` |
| Linux   | `export https_proxy=http://127.0.0.1:1095 && export http_proxy=http://127.0.0.1:1095` |

### ssh

> 需配置 ssh 密钥

##### git 配置多个账号的 ssh

1. 生成多个 ssh 密钥

```
ssh-keygen -t ed25519 -C "your_personal@email.com" -f ~/.ssh/id_ed25519_personal
ssh-keygen -t ed25519 -C "your_work@email.com" -f ~/.ssh/id_ed25519_work
```

2. 添加到 ssh Agent

```
# macOS/Linux
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519_personal
ssh-add ~/.ssh/id_ed25519_work

# Windows
Set-Service -Name ssh-agent -StartupType 'Automatic'
Start-Service ssh-agent

ssh-add $env:USERPROFILE\.ssh\id_ed25519_personal
ssh-add $env:USERPROFILE\.ssh\id_ed25519_work
```

3. 配置 `~/.ssh/config` 文件

```bash
# 个人账号配置
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal

# 公司账号配置
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
```

4. 将公钥添加到对应的 GitHub 账号中
5. 使用

```bash
# 原方式
git@github.com:shanlihang/knowledge-repo.git

# 新方式：使用配置中的Host代替github.com
git@github-personal:shanlihang/knowledge-repo.git
git@github-work:shanlihang/knowledge-repo.git

```

6. 项目中单独配置当前项目的用户名及邮箱

```bash
git config user.name "shanlihang"
git config user.email "your@email.com"
```
