module.exports = {
  title: "DevToolbox",
  description: "第三方工具与库的知识库平台",
  base: "/knowledge-repo/",
  themeConfig: {
    //网站logo
    logo: "/logo.svg",
    //导航栏
    nav: [
      { text: "前端", link: "/web/vanta.md" },
      { text: "后端", link: "/guide" },
      { text: "移动端", link: "/guide" },
      { text: "Linux", link: "/linux/wsl.md" },
      {
        text: "更多",
        items: [
          { text: "未分类", link: "/no-type/vscode.md" },
          { text: "git使用", link: "/no-type/git.md" },
          { text: "Mac设置", link: "/no-type/mac.md" },
          { text: "更新日志", link: "/guide" },
          { text: "开源项目", link: "/guide" },
        ],
      },
    ],
    //侧边栏
    sidebar: {
      "/web/": [
        {
          text: "样式插件",
          items: [{ text: "vanta.js 动态背景", link: "/web/vanta.md" }],
        },
        {
          text: "功能插件",
          items: [
            { text: "typewriter.js 打字机效果", link: "/web/typewriter.md" },
          ],
        },
      ],

      "/linux/": [
        {
          text: "功能插件",
          items: [
            { text: "wsl Linux系统", link: "/linux/wsl.md" },
            { text: "zsh 命令行工具", link: "/linux/zsh.md" },
          ],
        },
      ],
    },
    //网站页脚
    footer: {
      message: "developed using <em>VitePress</em>.",
      copyright: "Copyright © 2024 by slh67490009@gmail.com",
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
