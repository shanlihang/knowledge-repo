# tailwindcss 手册

## 概述

### 什么是 tailwindcss

Tailwind CSS 是一个功能类优先的 CSS 框架，允许你直接在 `HTML/VUE/JSX/TSX` 等类型文件中使用类名快速构建响应式、组件化、主题一致的用户界面。

它不是传统意义上的 UI 组件库，而是一套设计系统的原子工具，鼓励你通过组合类名来构建自定义设计，而不是重写样式。

官网：[英文文档](https://tailwindcss.com/) [中文文档](https://tailwindcss.cn/)

### Tailwind 的优势

| 特性              | 描述                                            |
| ----------------- | ----------------------------------------------- |
| 🎯 **原子化设计** | 类名即样式，避免写 CSS，提升开发效率            |
| 🧩 **高可维护性** | 样式和结构耦合在一起，避免样式漂移              |
| 📱 **响应式支持** | 内置响应式前缀（如 `md:`, `lg:`），轻松适配多端 |
| 🎨 **定制灵活**   | 完善的主题定制（色板、字体、间距等）            |
| ⚡ **性能优化**   | 构建时自动清除未使用的 CSS，最终体积极小        |
| 🛠 **生态丰富**    | 插件机制支持动画、表单、美化 Markdown 等        |

## 配置

### umi 配置

```bash
# Max项目
npx max g tailwindcss
# Umi项目
npx umi g tailwindcss
```

### vite 项目配置

1. 安装依赖

```bash
pnpm add tailwindcss @tailwindcss/vite
```

2. 配置 vite 插件

```bash
# vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. 全局样式文件中引入

```
@import "tailwindcss";
```

## 使用

### VScode 插件

| 插件                        | 作用               |
| --------------------------- | ------------------ |
| `Tailwind CSS IntelliSense` | 编写提示，文档说明 |
| `Prettier`                  | 格式化             |
