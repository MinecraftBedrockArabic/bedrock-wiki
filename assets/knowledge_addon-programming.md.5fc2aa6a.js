import{o as n,c as s,d as a}from"./app.86985e37.js";const t='{"title":"Creating addons with Programming","description":"","frontmatter":{"layout":"page","title":"Creating addons with Programming","parent":"Knowledge"},"headers":[{"level":2,"title":"When should you automate a task?","slug":"when-should-you-automate-a-task"},{"level":2,"title":"How to get started with programming?","slug":"how-to-get-started-with-programming"},{"level":2,"title":"Picking the Topic","slug":"picking-the-topic"},{"level":2,"title":"Inspect the Format","slug":"inspect-the-format"},{"level":2,"title":"Creating a Python Script","slug":"creating-a-python-script"},{"level":2,"title":"Creating a processing function","slug":"creating-a-processing-function"},{"level":2,"title":"Outputting proper json","slug":"outputting-proper-json"},{"level":2,"title":"Using createsounddefinition","slug":"using-create-sound-definition"},{"level":2,"title":"Structuring our folder","slug":"structuring-our-folder"},{"level":2,"title":"String processing","slug":"string-processing"},{"level":2,"title":"Sorry I will write more soon!","slug":"sorry-i-will-write-more-soon"}],"relativePath":"knowledge/addon-programming.md","lastUpdated":1617396302964}',o={},e=a('<h1 id="creating-addons-with-programming"><a class="header-anchor" href="#creating-addons-with-programming" aria-hidden="true">#</a> Creating addons with Programming</h1><p>Addons in Bedrock Edition (with the exception of scripts) are completely written using json-config files. Often, these files can, and should be written by hand. Possibly with the help of a dedicated editor like <a href="https://bridge-core.github.io/" target="_blank" rel="noopener noreferrer">bridge.</a>.</p><p>However, in certain cases, writing the json by hand is very time consuming. In these cases we can consider using a programming language to do the work for us. This guide will be written for <em>python</em>, but can be extrapolated to a language you are familiar with.</p><h2 id="when-should-you-automate-a-task"><a class="header-anchor" href="#when-should-you-automate-a-task" aria-hidden="true">#</a> When should you automate a task?</h2><p>You should consider automating a task if one (or more!) of the following conditions are met:</p><ul><li>The desired output is very long</li><li>The task is repetitive, and can be abstracted</li><li>The <em>input</em> often changes, requiring you to edit a single file very often</li></ul><h2 id="how-to-get-started-with-programming"><a class="header-anchor" href="#how-to-get-started-with-programming" aria-hidden="true">#</a> How to get started with programming?</h2><p>This guide assumes you are slightly familiar with the command line, and have a programming language installed. If this isn&#39;t the case, you should follow <a href="https://www.programiz.com/python-programming/first-program" target="_blank" rel="noopener noreferrer">this guide</a> to get started.</p><p>I often write python scripts alongside my <code>RP</code>/<code>BP</code> folders, and then run via the command line in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a>.</p><h1 id="creating-sound-definitions-json"><a class="header-anchor" href="#creating-sound-definitions-json" aria-hidden="true">#</a> Creating sound_definitions.json</h1><p>We will use automating <code>sound_definitions.json</code> as a case study for general automation tasks.</p><h2 id="picking-the-topic"><a class="header-anchor" href="#picking-the-topic" aria-hidden="true">#</a> Picking the Topic</h2><p>We will be automating the creation of <code>sound_definitions.json</code>. The reason we chose this topic is because <code>sound_definitions.json</code> can be directly generated based on the paths of our sound files. As we add/remove sound files, it would be super nice if we didn&#39;t have to always edit <code>sound_definitions.json</code> by hand!</p><p>Other good automation topic could be:</p><ul><li><code>texture_list.json</code></li><li>creating simple RP/BP item pairs based on textures in textures/items</li><li>creating the <code>canPlaceOn</code> json for blocks that need to be placed on lots of surfaces</li></ul><h2 id="inspect-the-format"><a class="header-anchor" href="#inspect-the-format" aria-hidden="true">#</a> Inspect the Format</h2><p>The first thing you need to do is inspect the format of the file you want to create. Here is a simple <code>sound_definitions.json</code> file:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;dragon.roar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ui&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">&quot;sounds/dragon/roar&quot;</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;dragon.wing_flap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ui&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">&quot;sounds/dragon/wing_flap&quot;</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>The next step, is to look at the file, and select a <em>chunk</em>. Our goal will be to generate this chunk programmatically, based on some <em>input</em>. In this case, our chunk is a single sound_definition:</p><div class="language-json"><pre><code><span class="token property">&quot;$folder.$sound:&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$category&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;sounds/$folder/$sound&quot;</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Now, we can annotate this json with the <em>variables</em> we want to inject. In other words, the content that we want to change programmatically. Notice how some variables are used multiple times. I&#39;m using <code>$var</code> to annotate the json, but this is just for information-gathering. We will replace this with proper python soon.</p><h2 id="creating-a-python-script"><a class="header-anchor" href="#creating-a-python-script" aria-hidden="true">#</a> Creating a Python Script</h2><p>Now is the time to create your script. I use a <code>projects</code> folder, following this <a href="/knowledge/version-control.html">version control tutorial</a>. That means I will be placing my script inside <code>projects/scripts</code>, but please place it anywhere convenient.</p><p>You can test your python script by quickly adding a <code>hello_world</code> print, and running it. At this point I also paste in my prepared json snippet, as a comment:\\</p><div class="language-py"><pre><code>\n<span class="token comment"># &quot;$folder.$sound:&quot;: {</span>\n<span class="token comment">#     &quot;category&quot;: &quot;$category&quot;,</span>\n<span class="token comment">#     &quot;sounds&quot;: [</span>\n<span class="token comment">#         &quot;sounds/$folder/$sound&quot;</span>\n<span class="token comment">#     ]</span>\n<span class="token comment"># }</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="creating-a-processing-function"><a class="header-anchor" href="#creating-a-processing-function" aria-hidden="true">#</a> Creating a processing function</h2><p>I think it is always a good idea to work with functions. Functions are a nice abstraction, and allow us to break out work into meaningful chunks. Since we have three variables, lets create a function that takes three variables. For testing, we can simply print these variables out:</p><div class="language-py"><pre><code><span class="token keyword">def</span> <span class="token function">create_sound_definition</span><span class="token punctuation">(</span>folder<span class="token punctuation">,</span> sound<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Folder: &quot;</span> <span class="token operator">+</span> folder<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Sound: &quot;</span> <span class="token operator">+</span> sound<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Category: &quot;</span> <span class="token operator">+</span> category<span class="token punctuation">)</span>\n\ncreate_found_definition<span class="token punctuation">(</span><span class="token string">&quot;Example Folder&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A sound for testing&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Some category :)&quot;</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="outputting-proper-json"><a class="header-anchor" href="#outputting-proper-json" aria-hidden="true">#</a> Outputting proper json</h2><p>Now that we have our process function, and a test-case, lets update the function to print actual json. We will be using the <code>.format</code> specifier for python strings, as well as multiline strings. These are hugely helpful for generating json! Please read up on these concepts if you aren&#39;t familiar.</p><div class="language-py"><pre><code><span class="token keyword">def</span> <span class="token function">create_sound_definition</span><span class="token punctuation">(</span>folder<span class="token punctuation">,</span> sound<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;\n        &quot;{0}.{2}:&quot;: {\n            &quot;category&quot;: &quot;{2}&quot;,\n            &quot;sounds&quot;: [\n                &quot;sounds/{0}/{1}&quot;\n            ]\n        }\n    &quot;&quot;&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>folder<span class="token punctuation">,</span> sound<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\ncreate_found_definition<span class="token punctuation">(</span><span class="token string">&quot;Example Folder&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A sound for testing&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Some category :)&quot;</span><span class="token punctuation">)</span>\n</code></pre></div><p>Now, instead of printing nonsense, we are printing a json object, with values where we want them!</p><h2 id="using-create-sound-definition"><a class="header-anchor" href="#using-create-sound-definition" aria-hidden="true">#</a> Using create_sound_definition</h2><p>Our goal is to look into the file-system, and make calls to <code>create_sound_definition</code>. Lets make a new function, called <code>create_sound_definitions</code> which will handle this task. We will need to import some python modules.</p><div class="language-py"><pre><code><span class="token keyword">import</span> os\n\n<span class="token keyword">def</span> <span class="token function">create_sound_definitions</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    paths <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">]</span>\n    <span class="token keyword">for</span> path <span class="token keyword">in</span> paths<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>\n</code></pre></div><p>This code will generate a list of paths. If we pass in the sounds folder containing these files:</p><ul><li><code>sounds/dragon/roar.mp4</code></li><li><code>sounds/dragon/wing_flap.mp4</code></li></ul><p>The result would be:</p><ul><li><code>dragon/roar.mp4</code></li><li><code>dragon/wing_flap.mp4</code></li></ul><h2 id="structuring-our-folder"><a class="header-anchor" href="#structuring-our-folder" aria-hidden="true">#</a> Structuring our folder</h2><p>Now, lets go into our sounds folder, and order our files so that all the information we need can be pulled from the folder directly. Lets use this format:</p><p><code>sounds/category/folder/sound</code></p><p>For example:</p><p><code>sounds/ui/dragon/roar</code></p><h2 id="string-processing"><a class="header-anchor" href="#string-processing" aria-hidden="true">#</a> String processing</h2><p>We can use string processing, to gather all the information we need out of <code>create_sound_definitions</code> strings.</p><div class="language-py"><pre><code>test <span class="token operator">=</span> <span class="token string">&quot;ui/dragon/roar.mp4&quot;</span>\nsplit <span class="token operator">=</span> test<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>\ncategory <span class="token operator">=</span> split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\nfolder <span class="token operator">=</span> split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\nsound <span class="token operator">=</span> split<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>\n</code></pre></div><h2 id="sorry-i-will-write-more-soon"><a class="header-anchor" href="#sorry-i-will-write-more-soon" aria-hidden="true">#</a> Sorry I will write more soon!</h2>',48);o.render=function(a,t,o,p,i,r){return n(),s("div",null,[e])};export default o;export{t as __pageData};
