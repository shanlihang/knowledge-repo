module.exports = {
  title: "DevTools",
  description: "第三方工具与库的知识库平台",
  base: "/knowledge-repo/",
  themeConfig: {
    //网站logo
    logo: "/logo.svg",
    //导航栏
    nav: [
      { text: "实用工具", link: "/tools/terminal/zsh" },
      { text: "环境配置", link: "/environment/language/asdf" },
      { text: "开源项目", link: "/open-source/communication" },
      { text: "AI", link: "/ai/generative/rag" },
      {
        text: "更多",
        items: [
          { text: "Mac设置", link: "/temp/mac.md" },
          { text: "更新日志", link: "/log" },
        ],
      },
    ],
    //侧边栏
    sidebar: {
      "/tools/": [
        {
          text: "终端工具",
          items: [{ text: "zsh", link: "/tools/terminal/zsh.md" }],
        },
        {
          text: "虚拟环境",
          items: [{ text: "uv", link: "/tools/venv/uv.md" }],
        },
        {
          text: "对象存储",
          items: [{ text: "minio", link: "/tools/oss/minio.md" }],
        },
        {
          text: "前端工具",
          items: [{ text: "tailwindcss", link: "/tools/web/tailwindcss.md" }],
        },
      ],
      "/environment/": [
        {
          text: "语言环境",
          items: [
            {
              text: "asdf 多语言版本管理",
              link: "/environment/language/asdf.md",
            },
            { text: "nodejs 版本管理", link: "/environment/language/node.md" },
            { text: "golang 版本管理", link: "/environment/language/go.md" },
            {
              text: "python 版本管理",
              link: "/environment/language/python.md",
            },
          ],
        },
        {
          text: "版本管理",
          items: [{ text: "git", link: "/environment/version/git.md" }],
        },
        {
          text: "系统环境",
          items: [{ text: "wsl", link: "/environment/system/wsl.md" }],
        },
      ],
      "/open-source/": [
        {
          text: "通讯类",
          items: [
            { text: "项目列表", link: "/open-source/communication/index.md" },
          ],
        },
        {
          text: "办公类",
          items: [{ text: "项目列表", link: "/open-source/official/index.md" }],
        },
      ],
      "/ai/": [
        {
          text: "生成式AI",
          items: [
            { text: "RAG - 检索增强生成", link: "/ai/generative/rag.md" },
          ],
        },
      ],
    },
    //网站页脚
    footer: {
      message: "developed using <em>VitePress</em>.",
      copyright: "Copyright © 2025 by slh67490009@gmail.com",
    },
    //社交
    socialLinks: [
      { icon: "github", link: "https://github.com/shanlihang" },
      { icon: "twitter", link: "https://x.com/Lihang_Shan" },
    ],
    //文档页脚
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    //编辑此页
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在GitHub上编辑",
    },
    //搜索
    search: {
      provider: "local",
    },
    //文本配置（移动端）
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "亮色模式",
    darkModeSwitchTitle: "深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
  },
  head: [
    ["link", { rel: "icon", href: "/knowledge-repo/logo.svg" }], // 指定图标路径
  ],
};
