# Mac 使用技巧

## 代理配置

#### socks 转 http

```shell
# 安装privoxy
brew install privoxy
# 查找依赖路径
brew info privoxy

# 修改privoxy配置文件，添加或修改如下两行
listen-address  127.0.0.1:8118
forward-socks5t / 127.0.0.1:1080 .

# 启动privoxy
brew services start privoxy

# 设置环境变量
export http_proxy=http://127.0.0.1:8118 && export https_proxy=http://127.0.0.1:8118

# 结果测试
curl -x http://127.0.0.1:8118 https://ipinfo.io

```
