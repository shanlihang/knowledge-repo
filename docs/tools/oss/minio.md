# Minio 对象存储使用手册

## 概述

### 什么是 Minio

MinIO 是一个高性能的对象存储系统，兼容 Amazon S3 接口，支持大文件存储、图片视频上传、分布式部署等，是做私有云、AI 数据湖、文件服务的利器。

### 什么是对象存储

对象存储（Object Storage）是一种将数据以“对象”的形式进行管理的存储方式，每个对象由以下组成：

- 文件本身的数据（Data）
- 一组元数据（Metadata）
- 唯一的对象标识符（Object Name / Key）

对象存储不像传统文件系统那样用“文件夹”组织文件，而是用“桶”（Bucket）和对象名模拟出类似目录结构。

```bash
# 用户头像存储
bucket:avatars,key:user001.png

# 项目文档资料存储
bucket:project-docs,key:20250626/proposal.pdf
```

### 核心概念解释

#### Bucket（桶）

- 桶是对象存储中的 `命名空间` ，类似于文件系统中的目录
- 每个桶名在整个 MinIO 实例中必须是唯一的
- 所有对象都必须被存放在某个桶中

#### Object（对象）

- 存储在桶中的每个文件称为 `对象`
- 包括数据内容、元信息（如文件类型、大小、时间戳等）和对象名（即文件名）
- 每个对象都有一个唯一的名字，用于在桶中定位

#### 用户凭证

- `Access Key` 即 `MINIO_ROOT_USER`，可理解为用户名
- `Secret Key` 即 `MINIO_ROOT_PASSWORD`，可理解为密码

## 安装

### windows

1. 访问 [下载地址](https://min.io/open-source/download?platform=windows)
2. 选择 `MinIO Server`
3. 点击 `DOWNLOAD`
4. 服务启动

```bash
.\minio.exe server C:\environment\minio\data --console-address ":9001"
```

### Docker

1. 拉取 `minio` 镜像
2. 运行容器

```bash
docker run -d \
  --name minio \
  -e "MINIO_ROOT_USER=root" \
  -e "MINIO_ROOT_PASSWORD=67490009" \
  -v /Users/shanlihang/environment/minio:/data \
  -p 9000:9000 \
  -p 9001:9001 \
  minio/minio server /data --console-address ":9001"
```
