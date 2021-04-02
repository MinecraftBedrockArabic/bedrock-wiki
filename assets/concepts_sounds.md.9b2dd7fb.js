import{o as n,c as t,d as s}from"./app.86985e37.js";const a='{"title":"Sounds","description":"","frontmatter":{"layout":"page","title":"Sounds","parent":"Concepts"},"headers":[{"level":2,"title":"Folder Structure","slug":"folder-structure"},{"level":2,"title":"Sound Formats","slug":"sound-formats"},{"level":2,"title":"Top Level Keys","slug":"top-level-keys"},{"level":3,"title":"Categories","slug":"categories"},{"level":3,"title":"min_distance","slug":"min-distance"},{"level":3,"title":"max_distance","slug":"max-distance"},{"level":2,"title":"Sound definitions","slug":"sound-definitions"},{"level":3,"title":"name","slug":"name"},{"level":3,"title":"stream","slug":"stream"},{"level":3,"title":"volume","slug":"volume"},{"level":3,"title":"loadonlow_memory","slug":"load-on-low-memory"},{"level":3,"title":"pitch","slug":"pitch"},{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Adding Entity Sounds","slug":"adding-entity-sounds"},{"level":2,"title":"Example","slug":"example-2"}],"relativePath":"concepts/sounds.md","lastUpdated":1617396302960}',o={},e=s('<h1 id="sounds"><a class="header-anchor" href="#sounds" aria-hidden="true">#</a> Sounds</h1><p>Intermediate {: .label .label-yellow }</p><p>In bedrock, we have the ability to add custom sounds, without overwriting any vanilla sounds. This is done by adding files to the resource pack.</p><p><code>protip:</code> The best way to learn about sounds is downloading and playing around with the default resource pack.</p><h2 id="folder-structure"><a class="header-anchor" href="#folder-structure" aria-hidden="true">#</a> Folder Structure</h2><p>There are two main files that we edit when we want to add sounds. Note how <code>sound_definition</code> is nested inside <code>sounds</code>.</p><div class="language-"><pre><code>└───example_RP\n    │   sounds.json\n    └───sounds\n            sound_definitions.json\n</code></pre></div><h2 id="sound-formats"><a class="header-anchor" href="#sound-formats" aria-hidden="true">#</a> Sound Formats</h2><p>The following sound formats are accepted:</p><ul><li>.ogg (reccomended)</li><li>.wav</li><li>.mp3 (Not executable with <code>/music</code>!)</li><li>.fsb (difficult to work with)</li></ul><h1 id="sound-definitions-json"><a class="header-anchor" href="#sound-definitions-json" aria-hidden="true">#</a> sound_definitions.json</h1><p><code>sound_definitions.json</code> is where we define new sound short-names. This should be thought of as typing a <code>short-name</code> or <code>id</code> to a physical sound path. Here is an example <code>sound_definitions.json</code> that adds a new trumpet sound called <code>example.toot</code>.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.14.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sound_definitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;example.toot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;neutral&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">&quot;sounds/trumpet&quot;</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Sounds added in this way can be triggered using <code>/playsound</code>. Please note that <code>playsound</code> does not auto-correct, so you will need to be careful in your typing.</p><p><code>note:</code> New files that are referenced by file path, such as sounds, DO need a full client restart in order to load. This means that if sounds don&#39;t work, you should restart your entire MC client, rather than just reloading the world.</p><h2 id="top-level-keys"><a class="header-anchor" href="#top-level-keys" aria-hidden="true">#</a> Top Level Keys</h2><p>In the example above, I showed two <code>top-level</code> fields: <code>category</code>, and <code>sounds</code>. Sounds will be discussed in further detail bellow, but the other <code>top-level</code> keys will be discussed here:</p><h3 id="categories"><a class="header-anchor" href="#categories" aria-hidden="true">#</a> Categories</h3><p>Categories are used internally by the engine to decide how each sound is played. We can utilize different channels to get different effects.</p><table><thead><tr><th>Category</th><th>Note</th></tr></thead><tbody><tr><td>weather</td><td></td></tr><tr><td>block</td><td></td></tr><tr><td>bucket</td><td></td></tr><tr><td>bottle</td><td></td></tr><tr><td>ui</td><td>Sounds in this category will ignore range limit</td></tr><tr><td>player</td><td></td></tr><tr><td>hostile</td><td></td></tr><tr><td>music</td><td></td></tr><tr><td>record</td><td></td></tr><tr><td>neutral</td><td></td></tr></tbody></table><h3 id="min-distance"><a class="header-anchor" href="#min-distance" aria-hidden="true">#</a> min_distance</h3><p>WIP</p><h3 id="max-distance"><a class="header-anchor" href="#max-distance" aria-hidden="true">#</a> max_distance</h3><p>WIP</p><h2 id="sound-definitions"><a class="header-anchor" href="#sound-definitions" aria-hidden="true">#</a> Sound definitions</h2><p>In the example above, I showed <code>sounds</code> as simply a list with a single path. This is good for simple sounds, but does not have much power. For starts, I can add multiple sounds into the list. These sounds will be randomized when played:</p><div class="language-json"><pre><code><span class="token property">&quot;sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;sounds/trumpet&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;sounds/trumpet2&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;sounds/trumpet3&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>Additionally, we can define each sound as an object, instead of a string. This allows us finer control, and unlocks some new settings. The string/object style can be mixed and matched.</p><h3 id="name"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>The path to the file, such as: <code>&quot;sounds/music/game/creative/creative1&quot;</code></p><h3 id="stream"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> stream</h3><p>Limits the sound to only be played a limited number of instances at a time. Good for improving preformance on sound heavy worlds.</p><h3 id="volume"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> volume</h3><p>How loud the sound should play, from <code>0.0</code> to <code>1.0</code>. Sounds cannot be made louder than originally encoded.</p><h3 id="load-on-low-memory"><a class="header-anchor" href="#load-on-low-memory" aria-hidden="true">#</a> load_on_low_memory</h3><p>Forces the loading of the sound even when nearing low memmory. &quot;load_on_low_memory&quot; is now deprecated as of 1.16.0</p><h3 id="pitch"><a class="header-anchor" href="#pitch" aria-hidden="true">#</a> pitch</h3><p>The pitch of the sound (how low/high it sounds). Ranges from <code>0.0</code> to <code>1.0</code> (normal), but can be higher, such as <code>1.48</code>.</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Here is a more realistic example containing these options:</p><div class="language-json"><pre><code><span class="token property">&quot;block.beehive.drip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;max_distance&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sounds/block/beehive/drip1&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;load_on_low_memory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;sounds/block/beehive/drip2&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;sounds/block/beehive/drip3&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;sounds/block/beehive/drip4&quot;</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h1 id="sounds-json"><a class="header-anchor" href="#sounds-json" aria-hidden="true">#</a> sounds.json</h1><p>If we want our sounds to run automatically, we can add them into the <code>sounds.json</code> file. This will tie the sound definitions directly to game events, and cause them to play, without needing to trigger with <code>/playsound</code>.</p><p>Sounds can be added into various categories:</p><table><thead><tr><th>Category</th><th>Note</th></tr></thead><tbody><tr><td>individual_event_sounds</td><td>Contains sounds like beacon activation, chest-close, or explode</td></tr><tr><td>block_sounds</td><td>Contains hit, step, and break sounds for blocks</td></tr><tr><td>entity_sounds</td><td>Contains death, ambient, hurt, etc sounds for entities (Including custom ones!)</td></tr><tr><td>interactive_sounds</td><td>WIP</td></tr></tbody></table><h2 id="adding-entity-sounds"><a class="header-anchor" href="#adding-entity-sounds" aria-hidden="true">#</a> Adding Entity Sounds</h2><p>I assume that sounds can be added in other categories, but I personally only have experience adding sounds into the <code>entities</code> category. Entity sounds are automatically played at various points in the entities life-cycle.</p><p>Common events:</p><table><thead><tr><th>Events</th><th>Note</th></tr></thead><tbody><tr><td>ambient</td><td>Played randomly, such as grunts, clucks, or ghast noises</td></tr><tr><td>hurt</td><td>Played when damaged</td></tr><tr><td>death</td><td>Played when it dies</td></tr><tr><td>step</td><td>Played when the entity moves along the ground</td></tr><tr><td>fall.big</td><td>For hitting ground form a high-height</td></tr><tr><td>fall.small</td><td>For hitting ground from a low height</td></tr><tr><td>splash</td><td>For splashing in the water</td></tr><tr><td>attack</td><td>For melee attacking</td></tr><tr><td>shoot</td><td>For shooting projectiles</td></tr></tbody></table><p>There are also many sound events, which <em>most likely</em> trigger automatically, but which I don&#39;t have details for, such as:</p><table><thead><tr><th>Unknown Categories</th></tr></thead><tbody><tr><td>breathe</td></tr><tr><td>splash</td></tr><tr><td>swim</td></tr><tr><td>ambient.in.water</td></tr><tr><td>death.in.water</td></tr><tr><td>jump</td></tr><tr><td>eat</td></tr><tr><td>hurt.in.water</td></tr><tr><td>mad</td></tr><tr><td>stare</td></tr><tr><td>sniff</td></tr><tr><td>sleep</td></tr><tr><td>spit</td></tr><tr><td>warn</td></tr><tr><td>scream</td></tr></tbody></table><h2 id="example-2"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h2><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;entity_sounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;entities&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;sirlich:elephant&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;volume&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;pitch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                    <span class="token number">0.9</span><span class="token punctuation">,</span>\n                    <span class="token number">1.0</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                        <span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elephant.step&quot;</span><span class="token punctuation">,</span>\n                        <span class="token property">&quot;volume&quot;</span><span class="token operator">:</span> <span class="token number">0.18</span><span class="token punctuation">,</span>\n                        <span class="token property">&quot;pitch&quot;</span><span class="token operator">:</span> <span class="token number">1.1</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;ambient&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                        <span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elephant.trumpet&quot;</span><span class="token punctuation">,</span>\n                        <span class="token property">&quot;volume&quot;</span><span class="token operator">:</span> <span class="token number">0.11</span><span class="token punctuation">,</span>\n                        <span class="token property">&quot;pitch&quot;</span><span class="token operator">:</span> <span class="token number">0.9</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h1 id="adding-sounds-to-animations"><a class="header-anchor" href="#adding-sounds-to-animations" aria-hidden="true">#</a> Adding sounds to Animations</h1><p>Sounds played in animations function based off of <code>short-name</code> definitions in the RP entity file.</p><p>This example shows playing a wing-flap sound, synced with an animation.</p><p>{% include filepath.html path=&quot;RP/entities/dragon.json&quot; local_path=&quot;minecraft:client_entity/description&quot;%}</p><div class="language-json"><pre><code><span class="token property">&quot;sound_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;wing_flap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki.dragon.wing_flap&quot;</span> <span class="token comment">//where wiki.dragon.roar is a sound definited in sound_definitions</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>{% include filepath.html path=&quot;RP/animations/dragon.json&quot; local_path=&quot;animations/animation.dragon.flying&quot;%}</p><div class="language-json"><pre><code><span class="token property">&quot;sound_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;3.16&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wing_flap&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h1 id="adding-sounds-to-animation-controllers"><a class="header-anchor" href="#adding-sounds-to-animation-controllers" aria-hidden="true">#</a> Adding sounds to Animation Controllers</h1><p>You can play sounds within animation controllers in a similar way that animations can be.</p><p>This example shows playing an explosion sound, synced using an animation controller.</p><p>{% include filepath.html path=&quot;RP/entities/custom_tnt.json&quot; local_path=&quot;minecraft:client_entity/description&quot;%}</p><div class="language-json"><pre><code><span class="token property">&quot;sound_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;explosion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki.custom_tnt.explosion&quot;</span> <span class="token comment">//where wiki.custom_tnt.explosion is a sound definited in sound_definitions just like animation sounds.</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>{% include filepath.html path=&quot;RP/animation_controllers/custom_tnt.animation_controllers.json&quot; local_path=&quot;animation_controllers/custom_tnt.animation_controllers.json&quot;%}</p><div class="language-json"><pre><code><span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;explode_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.mark_variant == 1&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;explode_state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;sound_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;explosion&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.mark_variant == 0&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',67);o.render=function(s,a,o,p,r,d){return n(),t("div",null,[e])};export default o;export{a as __pageData};
