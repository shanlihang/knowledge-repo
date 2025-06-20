import{_ as a,c as n,o as i,ag as l}from"./chunks/framework.Ii2o3pk_.js";const o=JSON.parse('{"title":"Pyenv","description":"","frontmatter":{},"headers":[],"relativePath":"environment/language/python.md","filePath":"environment/language/python.md"}'),e={name:"environment/language/python.md"};function p(t,s,h,k,r,y){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="pyenv" tabindex="-1">Pyenv <a class="header-anchor" href="#pyenv" aria-label="Permalink to &quot;Pyenv&quot;">​</a></h1><h2 id="什么是-pyenv" tabindex="-1">什么是 Pyenv？ <a class="header-anchor" href="#什么是-pyenv" aria-label="Permalink to &quot;什么是 Pyenv？&quot;">​</a></h2><p>Pyenv 是一个轻量级的 Python 版本管理工具，支持在同一台机器上安装多个 Python 版本，并能方便地在项目间切换不同版本，避免环境冲突。</p><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看可用 Python 版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装指定版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.11.4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换 Python 版本（全局）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.11.4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换 Python 版本（当前 shell 会话）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.10.8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为项目指定版本（本地）  在项目根目录执行：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.9.15</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 会生成 .python-version 文件，目录及其子目录会自动使用该版本。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前 Python 版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载 Python 版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pyenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.8.12</span></span></code></pre></div>`,5)]))}const c=a(e,[["render",p]]);export{o as __pageData,c as default};
