import{o as e,c as t,d as n}from"./app.86985e37.js";const a='{"title":"Retexturing Spawn Eggs","description":"","frontmatter":{"layout":"page","title":"Retexturing Spawn Eggs","parent":"Tutorials"},"headers":[{"level":2,"title":"Creating the texture:","slug":"creating-the-texture"},{"level":2,"title":"Adding the texture:","slug":"adding-the-texture"},{"level":2,"title":"Giving the texture a name:","slug":"giving-the-texture-a-name"},{"level":2,"title":"Using the new texture:","slug":"using-the-new-texture"}],"relativePath":"tutorials/retexturing-spawn-eggs.md","lastUpdated":1617396303124}',s={},o=n('<h1 id="retexturing-spawn-eggs"><a class="header-anchor" href="#retexturing-spawn-eggs" aria-hidden="true">#</a> Retexturing Spawn Eggs</h1><p>Beginner {: .label .label-green }</p><p>Custom entities will automatically be given a spawn egg. This spawn egg can be found inside of the creative menu, with a name like <code>item.spawn_egg.entity.sirlich:my_entity.name</code>. If you want to rename your spawn egg as well as set a texture, you can do so in the lang files.</p><p>In this tutorial we are going to retexture the spawn egg so it looks more like your spawned item, and less like an egg.</p><h2 id="creating-the-texture"><a class="header-anchor" href="#creating-the-texture" aria-hidden="true">#</a> Creating the texture:</h2><p>You can easily take a screenshot of your entity using the Blockbench software. Load the mode, and select export screenshot from the drop-down.</p><p>If you don&#39;t want an image like this, you can also create your own pixel art, or use any image you like.</p><h2 id="adding-the-texture"><a class="header-anchor" href="#adding-the-texture" aria-hidden="true">#</a> Adding the texture:</h2><p>Add the texture file under <code>textures/items/</code>. I personally suggest creating an <code>eggs</code> folder to contain all the spawn egg textures. For example, <code>textures/items/eggs/my_entity.png</code>. The file itself should be square.</p><h2 id="giving-the-texture-a-name"><a class="header-anchor" href="#giving-the-texture-a-name" aria-hidden="true">#</a> Giving the texture a name:</h2><p>Now we need to give our texture a short-name. This can be done by adding a new file: <code>textures/item_texture.json</code>.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Map Name&quot;</span><span class="token punctuation">,</span> <span class="token comment">//I don&#39;t actually know if this field does anything.</span>\n\t<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.items&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;my_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//&quot;my_entity&quot; is the short-name of the texture, which we can reference later</span>\n\t\t\t<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/egg/my_entity&quot;</span>\n\t\t<span class="token punctuation">}</span>\n        <span class="token comment">//Add more spawn egg textures here</span>\n    <span class="token punctuation">}</span>\n</code></pre></div><h2 id="using-the-new-texture"><a class="header-anchor" href="#using-the-new-texture" aria-hidden="true">#</a> Using the new texture:</h2><p>Now we can use our new texture inside of the Resource Pack entity file:</p><div class="language-json"><pre><code><span class="token property">&quot;spawn_egg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_entity&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;my entity should match the texture short-name we created in step-1.</span>\n    <span class="token property">&quot;texture_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',15);s.render=function(n,a,s,r,p,i){return e(),t("div",null,[o])};export default s;export{a as __pageData};
