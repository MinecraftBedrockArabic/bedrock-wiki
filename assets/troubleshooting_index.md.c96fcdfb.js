import{o as e,c as o,d as t}from"./app.86985e37.js";const a='{"title":"Troubleshooting","description":"","frontmatter":{"layout":"page","title":"Troubleshooting","has_children":true},"headers":[{"level":2,"title":"The Environment","slug":"the-environment"},{"level":2,"title":"Content Log","slug":"content-log"},{"level":3,"title":"Content log file","slug":"content-log-file"},{"level":2,"title":"Using Vanilla Resources","slug":"using-vanilla-resources"},{"level":2,"title":"JSON-Schemas","slug":"json-schemas"},{"level":2,"title":"Reload","slug":"reload"}],"relativePath":"troubleshooting/index.md","lastUpdated":1617396303120}',n={},r=t('<h1 id="troubleshooting"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h1><p>Creating Addons for Minecraft is a fairly easy process <em>once you get a hang of it</em>. The first time is usually a difficult, bug-prone process. This document contains some tips and tricks for fixing those dastardly bugs, as well as best practice information.</p><h2 id="the-environment"><a class="header-anchor" href="#the-environment" aria-hidden="true">#</a> The Environment</h2><p>The best way to prevent <em>invisible entity syndrome</em> and other nasty bugs is by setting yourself the correct environment. You should review <a href="/knowledge/software-preparation.html">the software preparation document</a> for my editor recommendations. The most important part is getting a json-linter, (<a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">or using an online json-linter</a>).</p><h2 id="content-log"><a class="header-anchor" href="#content-log" aria-hidden="true">#</a> Content Log</h2><p>The next thing you should do is turn on your content log. This can be done like: <code>Settings &gt; Profile &gt; Enable Content Log GUI</code>. Then press <code>ctrl+h</code> in-game to see any errors or output that might pop-up. Errors in the content log will show up every time you open the world, and also during gameplay if more errors occur.</p><p>{% include info.html contents=&#39;Errors are not cleared between runs, so it is possible the errors you see in the content log are <em>old</em> errors, from prior runs.&#39; %}</p><h3 id="content-log-file"><a class="header-anchor" href="#content-log-file" aria-hidden="true">#</a> Content log file</h3><p>The content log is saved in <code>.txt</code> format at: <code>C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\logs</code></p><h2 id="using-vanilla-resources"><a class="header-anchor" href="#using-vanilla-resources" aria-hidden="true">#</a> Using Vanilla Resources</h2><p>You should download the vanilla resource and behavior pack. You can find <a href="https://www.minecraft.net/en-us/addons/" target="_blank" rel="noopener noreferrer">the vanilla resource and behavior pack here</a>. You can compare against the vanilla files if you have any issues.</p><h2 id="json-schemas"><a class="header-anchor" href="#json-schemas" aria-hidden="true">#</a> JSON-Schemas</h2><p>JSON-Schemas are a valuable tool for file validation. You can learn more about <a href="/knowledge/using-schemas.html">JSON-Schemas here</a>.</p><h2 id="reload"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> Reload</h2><p>Reload MC. Just do it.</p>',15);n.render=function(t,a,n,s,i,l){return e(),o("div",null,[r])};export default n;export{a as __pageData};
