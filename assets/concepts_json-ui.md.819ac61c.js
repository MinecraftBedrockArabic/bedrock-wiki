import{o as n,c as s,d as a}from"./app.86985e37.js";const t='{"title":"JSON UI","description":"","frontmatter":{"layout":"page","title":"JSON UI","parent":"Concepts"},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"UI Defs","slug":"ui-defs"},{"level":2,"title":"Global Variables","slug":"global-variables"},{"level":2,"title":"Namespaces","slug":"namespaces"},{"level":2,"title":"Screens","slug":"screens"},{"level":2,"title":"UI Elements","slug":"ui-elements"},{"level":2,"title":"Notations","slug":"notations"},{"level":3,"title":"Variables","slug":"variables"},{"level":3,"title":"Deriving","slug":"deriving"},{"level":2,"title":"Animations","slug":"animations"},{"level":2,"title":"Operators","slug":"operators"},{"level":2,"title":"Bindings","slug":"bindings"},{"level":2,"title":"Button Mappings","slug":"button-mappings"},{"level":2,"title":"Modify Vanilla","slug":"modify-vanilla"}],"relativePath":"concepts/json-ui.md","lastUpdated":1617396302960}',o={},e=a('<h1 id="json-ui"><a class="header-anchor" href="#json-ui" aria-hidden="true">#</a> JSON UI</h1><h2 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>All editable vanilla UI files are stored in <code>RP/ui/</code> in <code>.json</code> files.</p><p>They can be divided into three groups:</p><ul><li>System files: <ul><li><code>_global_varibles.json</code> - for variables used in multiple files</li><li><code>_ui_defs.json</code> - for referencing the files used on the UI.</li></ul></li><li>Screens: <ul><li><code>hud_screen.json</code></li><li><code>inventory_screen.json</code></li><li>etc.</li></ul></li><li>Additional files: (templates, like <code>ui_common.json</code>, <code>ui_templates_*.json</code> etc.</li></ul><h2 id="ui-defs"><a class="header-anchor" href="#ui-defs" aria-hidden="true">#</a> UI Defs</h2><p>In <code>_ui_defs.json</code> you add all the files that will be used on the UI.</p><p>Imagine I created the files <code>RP/ui/button.json</code> and <code>RP/my_ui/main_menu.json</code>:</p><p>{% include filepath.html path=&quot;RP/ui/_ui_defs.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;ui_defs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;ui/button.json&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;my_ui/main_menu.json&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Three things to notice:</p><ul><li>You have to add the whole directory starting from the RP folder</li><li>You can have files wherever you want. Even <code>RP/textures/folder_1/papers/sound/scrollpane.json</code></li><li>The <code>_ui_defs.json</code> in your RP doesn&#39;t need to have the vanilla files because all related UI files will not be replaced. Only overwritten.</li></ul><p>Apart: the files can have any extension since the will always be read as if they were a JSON file.</p><h2 id="global-variables"><a class="header-anchor" href="#global-variables" aria-hidden="true">#</a> Global Variables</h2><p>Let&#39;s say you have a variable <code>&quot;$info_text_color&quot;: [0.8, 0.8, 0.8]</code> that stores a color for the information texts. If you use the same value in multiple files instead of repeatedly writing <code>&quot;color&quot;: [0.8, 0.8, 0.8]</code> you can just reference the variable (<code>&quot;color&quot;: &quot;$info_text_color&quot;</code>) and put the variable on the <code>_global_variables.json</code> file. Another good advantage of doing that is you only need to change in one place and all the elements that use the variable will have the value updated.</p><p>{% include filepath.html path=&quot;RP/ui/_global_variables.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n <span class="token property">&quot;$info_text_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>{% include filepath.html path=&quot;RP/my_ui/file1.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;some_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hey&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$info_text_color&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>{% include filepath.html path=&quot;RP/my_ui/file2.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$info_text_color&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="namespaces"><a class="header-anchor" href="#namespaces" aria-hidden="true">#</a> Namespaces</h2><p>Namespaces are identifiers for the UI files. They are used to access elements in some file across all other files. They must be unique and short if possible because you may use it a lot of times.</p><p>An example: {% include filepath.html path=&quot;RP/ui/file_a.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span><span class="token string">&quot;stuff&quot;</span><span class="token punctuation">,</span>\n  ...\n  <span class="token property">&quot;foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span> <span class="token comment">// some UI element</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>{% include filepath.html path=&quot;RP/ui/file_b.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;fizzbuzz@stuff.foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span> \n  <span class="token comment">// &quot;fizzbuzz&quot; extends &quot;foobar&quot; from &quot;stuff&quot; namespace</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="screens"><a class="header-anchor" href="#screens" aria-hidden="true">#</a> Screens</h2><p>Screen files contain UIs which are shown in appropriate situations:</p><ul><li><code>hud_screen</code> is used in HUD</li><li><code>inventory_screen</code> is used in Inventory screen</li><li>etc.</li></ul><p>All files are pretty self-explanatory. An important thing to notice is that <strong>different screens can access different variables</strong>. More about that later.</p><h2 id="ui-elements"><a class="header-anchor" href="#ui-elements" aria-hidden="true">#</a> UI Elements</h2><p>All the elements must have the <code>type</code> property because its value will define what kind of element it is.</p><p>Here&#39;s an example:</p><p>{% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  ...\n  <span class="token property">&quot;example_element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>\n    ...\n  <span class="token punctuation">}</span>\n  ...\n<span class="token punctuation">}</span>\n</code></pre></div><p>Here the element is <code>type</code> <code>label</code>. So it will render a text.</p><h2 id="notations"><a class="header-anchor" href="#notations" aria-hidden="true">#</a> Notations</h2><p>So, what are variables and how can elements derive from others?</p><h3 id="variables"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><p>Everything that has <code>$</code> as the first letter of its name is a variable. Variables can store numbers, booleans, strings and arrays.</p><p>{% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;cool_element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;$foo&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>         <span class="token comment">// a number variable</span>\n    <span class="token property">&quot;$bar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// a string variable</span>\n    <span class="token property">&quot;$arr&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>     <span class="token comment">// an array variable</span>\n    <span class="token property">&quot;$elem&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_button.template_button&quot;</span> <span class="token comment">// a string pointing at the element</span>\n    ...\n    <span class="token comment">// How to use</span>\n    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$arr&quot;</span>           <span class="token comment">// puts the value of $arr into the size property</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$bar&quot;</span>   <span class="token comment">// sets text to the value of $bar</span>\n    <span class="token property">&quot;controls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token property">&quot;tplt_element@$elem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="deriving"><a class="header-anchor" href="#deriving" aria-hidden="true">#</a> Deriving</h3><p>To derive some element from another you should use <code>new@super</code> notation. An example:</p><p>{% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;$cool_variable&quot;</span><span class="token operator">:</span> <span class="token number">777</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;$fixbugs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// &quot;fizzbuzz&quot; extends &quot;foobar&quot;</span>\n  <span class="token comment">// and replaces $cool_variable value with 666.</span>\n  <span class="token comment">// $fixbugs is still false for fizzbuzz, because it wasn&#39;t changed</span>\n  <span class="token property">&quot;fizzbuzz@foobar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;$cool_variable&quot;</span><span class="token operator">:</span> <span class="token number">666</span>\n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre></div><p>Any property you add to the derive element will completely replace the superior one. Also you can use a string variable after <code>@</code>, its value will be interpreted as a superior element name. You may use it before <code>@</code> as well, its value will become the derived element name.</p><h2 id="animations"><a class="header-anchor" href="#animations" aria-hidden="true">#</a> Animations</h2><p><code>offset</code> animation example. {% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offset&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_offset&quot;</span>\n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre></div><p><code>Wait</code> animation example. It&#39;s used when you want no animation between two other animtions. {% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_size_0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100% + 3px&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_wait&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_wait&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wait&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_size_1&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_size_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100% + 3px&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_size_0&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_size_0&quot;</span>\n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre></div><p><code>flip_book</code> animation example. {% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_flip_book&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flip_book&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;initial_uv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;frame_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;frame_step&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;fps&quot;</span><span class="token operator">:</span> <span class="token number">15</span>\n    ...\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;uv&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@example_nm.anim_flip_book&quot;</span>\n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre></div><p>Instead of saying <code>&quot;offset&quot;: &quot;@...&quot;</code>, <code>&quot;size&quot;: &quot;@...&quot;</code>, <code>&quot;alpha&quot;: &quot;@...&quot;</code>, etc, you can reference the animations that will be applied to the element using the <code>anims</code> property. {% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example_nm&quot;</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;100% + 3px&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@...&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;anim_alpha&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;anim_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@...&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;anims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;@example_nm.anim_size&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;@example_nm.anim_alpha&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="operators"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h2><table><thead><tr><th>Operator Name</th><th>Operator</th><th>Examples</th></tr></thead><tbody><tr><td>Addiction</td><td>+</td><td><code>&quot;100% + 420px&quot;</code> <code>($text + &#39; my&#39;)</code> <code>($index + 2)</code> <code>(&#39;#&#39; + $bdg_nm + &#39;_name&#39;)</code></td></tr><tr><td>Subtraction</td><td>-</td><td><code>&quot;100% - 69px&quot;</code> <code>($text - &#39; my&#39;)</code> <code>($index - 13)</code></td></tr><tr><td>Division</td><td>/</td><td><code>($var / 12)</code> <code>(#value / 2)</code></td></tr><tr><td>Equal to</td><td>=</td><td><code>($var = 12)</code> <code>($var = &#39;this_text&#39;)</code> <code>(#name = &#39;Wither&#39;)</code></td></tr><tr><td>Greater than</td><td>&gt;</td><td><code>(#value &gt; 13)</code></td></tr><tr><td>Less than</td><td>&lt;</td><td><code>($var &lt; 4)</code></td></tr><tr><td>Greater or equal than</td><td>&gt; or =</td><td><code>(#value &gt; 2 or #value = 2)</code></td></tr><tr><td>Less or equal than</td><td>&lt; or =</td><td><code>(#value &lt; 2 or #value = 2)</code></td></tr><tr><td>Logical AND</td><td>and</td><td><code>($is_school and $is_open)</code></td></tr><tr><td>Logical OR</td><td>or</td><td><code>($is_cool or $is_awesome)</code></td></tr><tr><td>Logical NOT</td><td>not</td><td><code>(not #name)</code> <code>(not #name = &#39;text&#39;)</code></td></tr></tbody></table><h2 id="bindings"><a class="header-anchor" href="#bindings" aria-hidden="true">#</a> Bindings</h2><p><code>bindings</code> is used to bind a hardcoded value to the element and use it for conditions, for example.</p><p>Here&#39;s an example of an label using a hardcoded text. The <code>text</code> property value is <code>#hardtext</code>. By using <code>bindings</code> I can get the value of the hardcoded variable <code>#hardtext</code> so it can be used by the <code>text</code> property. Here it&#39;s directly assigning the <code>#hardtext</code> value to the <code>text</code> property. {% include filepath.html path=&quot;RP/ui/example_file.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hardtext&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hardtext&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Talking more about the <code>label</code> example, it can also appear in another way. Let&#39;s see:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#hardtext&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>In this case the value of <code>#hardtext</code> is assigned to the <code>#text</code> binding property name that will then be assigned to the <code>text</code> property.</p><p>This happens a lot with the <code>visible</code> and <code>enabled</code> properties. Here&#39;s an example with both of them:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;send_button&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#using_touch&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  \n  <span class="token property">&quot;play_button&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;binding_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#play_button_enabled&quot;</span>\n        <span class="token property">&quot;binding_name_override&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#enabled&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><code>#using_touch</code> and <code>#play_button_enabled</code> in this case store boolean values. If you&#39;re playing in a touch device <code>#using_touch</code> will be <code>true</code> else <code>false</code>. <code>#play_button_enabled</code> is used in <code>Add External Server</code> screen. So in this case it will be <code>true</code> if all text fields (<code>server name</code>, <code>server ip</code> and <code>server_port</code>) have text inside them. <br> So the <code>#using_touch</code> value will override the <code>#visible</code> binding property value which, in this case, is also a property (<code>#visible</code> is used inside <code>property_bag</code> which would be the same as setting <code>visible</code> to something). And <code>#play_button_enabled</code> will override the <code>#enabled</code> binding property value which will then set its value to <code>enabled</code> property.</p><p>Let&#39;s say you want to show a panel with some content when a specific toggle is selected/checked. You&#39;ll need a different type of binding structure. We have to tell what&#39;s the source element where the value will come from, tell which property of that source element we want to get the value from and which property we want to override its value.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;panel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;bindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;binding_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;source_control_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_toggle&quot;</span><span class="token punctuation">,</span> <span class="token comment">// the name of the source element</span>\n        <span class="token property">&quot;source_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#toggle_state&quot;</span> <span class="token comment">// We want this property value which tells in which state the toggle is in</span>\n        <span class="token property">&quot;target_property_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#visible&quot;</span> <span class="token comment">// the target property to be overrided</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  \n  <span class="token property">&quot;my_toggle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>When the toggle is checked the <code>#toggle_state</code> will be checked (<code>1</code> or <code>true</code>) and it will override the <code>visible</code> property value of the element to true. When you uncheck it will be unchecked (<code>0</code> or <code>false</code>) and once again override the <code>visible</code> value.</p><h2 id="button-mappings"><a class="header-anchor" href="#button-mappings" aria-hidden="true">#</a> Button Mappings</h2><h2 id="modify-vanilla"><a class="header-anchor" href="#modify-vanilla" aria-hidden="true">#</a> Modify Vanilla</h2>',74);o.render=function(a,t,o,p,c,l){return n(),s("div",null,[e])};export default o;export{t as __pageData};
