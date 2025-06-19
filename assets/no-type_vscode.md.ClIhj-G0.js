import{_ as a,c as s,o as n,ag as e}from"./chunks/framework.Ii2o3pk_.js";const q=JSON.parse('{"title":"未分类","description":"","frontmatter":{},"headers":[],"relativePath":"no-type/vscode.md","filePath":"no-type/vscode.md"}'),p={name:"no-type/vscode.md"};function o(d,t,l,r,i,u){return n(),s("div",null,t[0]||(t[0]=[e(`<h1 id="未分类" tabindex="-1">未分类 <a class="header-anchor" href="#未分类" aria-label="Permalink to &quot;未分类&quot;">​</a></h1><h2 id="vscode" tabindex="-1">vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;vscode&quot;">​</a></h2><h3 id="vscode-功能插件" tabindex="-1">vscode 功能插件 <a class="header-anchor" href="#vscode-功能插件" aria-label="Permalink to &quot;vscode 功能插件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>作用</th></tr></thead><tbody><tr><td>Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code</td><td>简体中文语言包</td></tr><tr><td>Auto Rename Tag</td><td>自动重命名配对的 HTML / XML 标签</td></tr><tr><td>Bracket Pair Colorizer</td><td>用不同颜色高亮显示匹配的括号</td></tr><tr><td>Code Runner</td><td>运行代码</td></tr><tr><td>Live Server</td><td>实时预览</td></tr><tr><td>Code Spell Checker</td><td>拼写检查</td></tr><tr><td>CodeGeeX</td><td>代码生成,AI 助手</td></tr><tr><td>Git Graphs</td><td>查看 git 提交记录</td></tr><tr><td>JavaScript (ES6) code snippets</td><td>ES6 代码片段</td></tr><tr><td>Path Intellisense</td><td>路径提示</td></tr><tr><td>Prettier - Code formatter</td><td>代码格式化</td></tr><tr><td>Easy LESS</td><td>LESS 预处理器</td></tr><tr><td>Vue - Official</td><td>Vue 官方插件</td></tr><tr><td>Remote - SSH</td><td>远程开发</td></tr><tr><td>go</td><td>go 语言支持</td></tr></tbody></table><h3 id="vscode-配置" tabindex="-1">vscode 配置 <a class="header-anchor" href="#vscode-配置" aria-label="Permalink to &quot;vscode 配置&quot;">​</a></h3><ol><li>配置保存自动格式化</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;editor.formatOnSave&quot;: true,// 保存时自动格式化</span></span>
<span class="line"><span>&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span><span> // 默认格式化工具</span></span>
<span class="line"><span>// 配置各类型文件的格式化工具</span></span>
<span class="line"><span>&quot;[vue]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;Vue.volar&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[css]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[json]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[javascript]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[html]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[markdown]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;yzhang.markdown-all-in-one&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><ol start="2"><li>配置代码片段</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Reactpage&quot;: {</span></span>
<span class="line"><span>		&quot;prefix&quot;: &quot;reactPage&quot;,</span></span>
<span class="line"><span>		&quot;body&quot;: [</span></span>
<span class="line"><span>			&quot;import React from &#39;react&#39;&quot;,</span></span>
<span class="line"><span>			&quot;interface Props{&quot;,</span></span>
<span class="line"><span>			&quot;}&quot;,</span></span>
<span class="line"><span>			&quot;const Index:React.FC&lt;Props&gt; = (props) =&gt; {&quot;,</span></span>
<span class="line"><span>				&quot;return (&quot;,</span></span>
<span class="line"><span>				&quot;&lt;div&gt;&lt;/div&gt;&quot;,</span></span>
<span class="line"><span>				&quot;)&quot;,</span></span>
<span class="line"><span>			&quot;}&quot;,</span></span>
<span class="line"><span>			&quot;export default Index&quot;</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;description&quot;: &quot;react函数式组件/页面&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)]))}const h=a(p,[["render",o]]);export{q as __pageData,h as default};
