# 未分类

## vscode

### vscode 功能插件

| 名称                                                                 | 作用                             |
| -------------------------------------------------------------------- | -------------------------------- |
| Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code | 简体中文语言包                   |
| Auto Rename Tag                                                      | 自动重命名配对的 HTML / XML 标签 |
| Bracket Pair Colorizer                                               | 用不同颜色高亮显示匹配的括号     |
| Code Runner                                                          | 运行代码                         |
| Live Server                                                          | 实时预览                         |
| Code Spell Checker                                                   | 拼写检查                         |
| CodeGeeX                                                             | 代码生成,AI 助手                 |
| Git Graphs                                                           | 查看 git 提交记录                |
| JavaScript (ES6) code snippets                                       | ES6 代码片段                     |
| Path Intellisense                                                    | 路径提示                         |
| Prettier - Code formatter                                            | 代码格式化                       |
| Easy LESS                                                            | LESS 预处理器                    |
| Vue - Official                                                       | Vue 官方插件                     |
| Remote - SSH                                                         | 远程开发                         |
| go                                                                   | go 语言支持                      |

### vscode 配置

1. 配置保存自动格式化

```
"editor.formatOnSave": true,// 保存时自动格式化
"editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化工具
// 配置各类型文件的格式化工具
"[vue]": {
  "editor.defaultFormatter": "Vue.volar"
},
"[css]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[markdown]": {
  "editor.defaultFormatter": "yzhang.markdown-all-in-one"
},
```

2. 配置代码片段

```
{
	"Reactpage": {
		"prefix": "reactPage",
		"body": [
			"import React from 'react'",
			"interface Props{",
			"}",
			"const Index:React.FC<Props> = (props) => {",
				"return (",
				"<div></div>",
				")",
			"}",
			"export default Index"
		],
		"description": "react函数式组件/页面"
	}
}
```
