import{o as n,c as e,d as t,a,b as s}from"./app.86985e37.js";const o='{"title":"Render Controllers","description":"","frontmatter":{"layout":"page","title":"Render Controllers","parent":"Concepts"},"headers":[{"level":2,"title":"Render Controllers","slug":"render-controllers-2"},{"level":2,"title":"Texture Layering","slug":"texture-layering-2"},{"level":3,"title":"Render Controller","slug":"render-controller"},{"level":3,"title":"Entity","slug":"entity"},{"level":2,"title":"Texture Layering with Variance","slug":"texture-layering-with-variance"},{"level":3,"title":"Entity","slug":"entity-2"},{"level":3,"title":"Render Controller","slug":"render-controller-2"},{"level":3,"title":"Setting variant","slug":"setting-variant"},{"level":3,"title":"Dynamically Changing Texture","slug":"dynamically-changing-texture"},{"level":3,"title":"Dynamic Layered Textures","slug":"dynamic-layered-textures"}],"relativePath":"concepts/render-controller.md","lastUpdated":1617396302960}',r={},p=t('<h1 id="render-controllers"><a class="header-anchor" href="#render-controllers" aria-hidden="true">#</a> Render Controllers</h1><p>Beginner {: .label .label-green }</p><p>Render controllers are an often-misunderstood part of the <code>Resource Pack</code>. But you don&#39;t need to be afraid! You should think of render-controllers as logic packs that take <code>short-name</code> definitions from the RP Entity File, and determine how they will be combined/layered/rendered in-game.</p><h1 id="defining-short-names"><a class="header-anchor" href="#defining-short-names" aria-hidden="true">#</a> Defining short-names</h1><p>Render controllers work based on the short-name definitions of the RP entity file. Short-names are local identifiers, which we define in the RP entity file, and can then use in the render controller (and other places!). Variables such as <code>geometry</code>, <code>materials</code>, and <code>textures</code> can be defined in the entity,</p><p>Lets look at a simplified version of the spider RP entity file:</p><p>{% include filepath.html path=&quot;RP/entity/spider.json&quot; %}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;minecraft:client_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:cave_spider&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spider&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;invisible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spider_invisible&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/entity/spider/cave_spider&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.spider.v1.8&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">&quot;controller.render.spider&quot;</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>In this case, four short-name definitions have been created:</p><ul><li><code>default</code>, in the materials array</li><li><code>invisible</code>, in the materials array</li><li><code>default</code>, in the textures array</li><li><code>default</code>, in the geometry array</li></ul><p>You can define multiple short-names in each array, such as in the <code>materials</code> example above.</p><p>You should think of short-name definitions as <code>importing</code> the assets you want. At this state, you are defining the textures, geometry, and materials that you want to use in your entity. In the render-controller stage, you won&#39;t import anything. You will simply use the assets you already imported to create the rendered entity.</p><h1 id="simple-render-controller"><a class="header-anchor" href="#simple-render-controller" aria-hidden="true">#</a> Simple render-controller</h1><p>A simple render controller looks like this:</p><p>{% include filepath.html path=&quot;RP/render_controllers/cow.render.json&quot; %}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;controller.render.cow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">&quot;Texture.default&quot;</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>This controller is taking the short-name definitions from the entity file, and <code>rendering</code> them. For example the line: <code>&quot;textures&quot;: [ &quot;Texture.default&quot;]</code> says: &quot;Take the default texture, and apply it to the entity&quot;. The render controller doesn&#39;t know what the default texture is, it simply applies it.</p><h1 id="re-using-render-controllers"><a class="header-anchor" href="#re-using-render-controllers" aria-hidden="true">#</a> Re-using render controllers</h1><p>Since render controllers work based on short-names, it is possible to re-use the same render controller for all of your entities. For simple entities with one material, one texture, and one geometry, custom render controllers are not necessary.</p><p>For example, the render controller above is used for the <code>minecraft:cow</code> entity. If you want to use this render controller in your own pack, simple define like: <code>&quot;render_controllers&quot;: [ &quot;controller.render.cow&quot; ]</code> in your entity file.</p>',20),l=a("p",{class:"panel-warning",markdown:"1"},[s(" Remember! Render controllers work based on short-names. If you want to use the cow render controller, you need to provide the short-names it is using. In this case, you will need to provide:"),a("br"),s(" - `default` geometry"),a("br"),s(" - `default` texture"),a("br"),s(" - `default` material ")],-1),c=t('<h1 id="creating-custom-render-controllers"><a class="header-anchor" href="#creating-custom-render-controllers" aria-hidden="true">#</a> Creating custom render controllers</h1><p>Often we want more power over the rendering of our entities, such as rendering layered textures, multiple geometries, or applying different materials to different bones. To create a custom render controller, simply copy and paste a vanilla render controller into the <code>render_controllers</code> folder, and edit to your liking!</p><h1 id="texture-layering"><a class="header-anchor" href="#texture-layering" aria-hidden="true">#</a> Texture layering</h1><p>sometimes, it is useful to create layered textures for custom entities. Layered in this context simply means multiple textures overlayed on top of each other, where the top texture has alpha pixels, and allows the bottom texture to show through.</p><p>As a very simple example, imagine a <strong>painting</strong> entity. The frame of the painting is always the same, but the picture itself can change. While you <em>could</em> duplicate the frame 10 times, and paint in 10 paintings, you now created a problem: What if you want to change the frame? Now you need to edit 10 textures.</p><p>This can be solved by layering textures. Simply place the frame texture on first, and then add the different paintings on top. You can now edit the frame in one, simple location.</p><p>Or, you could even create multiple frames for each painting! This allows you to create more variety in your panting entity, since the player can independently change two textures.</p><h2 id="render-controllers-2"><a class="header-anchor" href="#render-controllers-2" aria-hidden="true">#</a> Render Controllers</h2><p>Texture layering is achieved through the use of render controllers. If you aren&#39;t comfortable with render controllers, you should do some looking through the vanilla usages. Entities such as the <code>horse</code>, which contain multiple textures, are especially good to look at.</p><h2 id="texture-layering-2"><a class="header-anchor" href="#texture-layering-2" aria-hidden="true">#</a> Texture Layering</h2><h3 id="render-controller"><a class="header-anchor" href="#render-controller" aria-hidden="true">#</a> Render Controller</h3><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;controller.render.texture_layering&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">//You can add as many layers as you like. Layers are added top to bottom.</span>\n        <span class="token string">&quot;Texture.bottom_layer&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;Texture.top_layer&quot;</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="entity"><a class="header-anchor" href="#entity" aria-hidden="true">#</a> Entity</h3><p>You need to define all textures in the entity, and also use <code>villager_v2_masked</code> material.</p><div class="language-json"><pre><code><span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;villager_v2_masked&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;top_layer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/top&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;bottom_layer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/bottom&quot;</span>\n  <span class="token comment">//Add more texture short-name definitions here.</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="texture-layering-with-variance"><a class="header-anchor" href="#texture-layering-with-variance" aria-hidden="true">#</a> Texture Layering with Variance</h2><p>While I guess hard-coding layered textures is cool, the real fun comes when you make the textures dynamic:</p><h3 id="entity-2"><a class="header-anchor" href="#entity-2" aria-hidden="true">#</a> Entity</h3><p>Set multiple top textures, which we will index into later.</p><div class="language-json"><pre><code><span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;top_1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/top_1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;top_2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/top_2&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;top_3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/top_3&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;bottom_layer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/bottom&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="render-controller-2"><a class="header-anchor" href="#render-controller-2" aria-hidden="true">#</a> Render Controller</h3><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;controller.render.wool_only&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;arrays&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;Array.top&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;Texture.top_1&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;Texture.top_2&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;Texture.top_3&quot;</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;Texture.bottom&quot;</span><span class="token punctuation">,</span> <span class="token comment">//static bottom texture</span>\n        <span class="token string">&quot;Array.top[query.variant]&quot;</span> <span class="token comment">//pick top texture based on entity variant.</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>By using arrays, and then <code>query.variant</code>, we are able to select the top texture based on the <code>variant</code> of the entity.</p><h3 id="setting-variant"><a class="header-anchor" href="#setting-variant" aria-hidden="true">#</a> Setting variant</h3><p>Now, to select which layer will show up, we can simply set the variant component in the entity:</p><p>Remember that components like variant are zero-indexed, which means <code>0</code> is our first texture, and then <code>1</code> and <code>2</code> point to the second and third.</p><div class="language-json"><pre><code><span class="token property">&quot;minecraft:variant&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="dynamically-changing-texture"><a class="header-anchor" href="#dynamically-changing-texture" aria-hidden="true">#</a> Dynamically Changing Texture</h3><p>If you want to dynamically change the texture of an entity during gameplay, you simply need to change the <code>variant</code>. This can be done using component groups and events.</p><h3 id="dynamic-layered-textures"><a class="header-anchor" href="#dynamic-layered-textures" aria-hidden="true">#</a> Dynamic Layered Textures</h3><p>Dynamic layered textures can be achieved by adding more lists of textures, and other dummy components as indexes. You can <a href="/tutorials/dummy-entities.html">read about dummy components here</a></p>',31);r.render=function(t,a,s,o,r,u){return n(),e("div",null,[p,l,c])};export default r;export{o as __pageData};
