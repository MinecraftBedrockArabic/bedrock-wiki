import{o as t,c as e,d}from"./app.86985e37.js";const r='{"title":"Dummy Components","description":"","frontmatter":{"layout":"page","title":"Dummy Components","parent":"Documentation"},"headers":[{"level":2,"title":"Integer Dummies","slug":"integer-dummies"},{"level":2,"title":"Bit Dummies","slug":"bit-dummies"},{"level":2,"title":"Colors for the color and color2 components","slug":"colors-for-the-color-and-color2-components"}],"relativePath":"documentation/dummy-components.md","lastUpdated":1617396302960}',i={},o=d('<h1 id="dummy-components"><a class="header-anchor" href="#dummy-components" aria-hidden="true">#</a> Dummy Components</h1><p>Dummy components are useless components that are only used for data storage. Dummy components don&#39;t <strong>do</strong> anything on their own. They need to be paired with secondary mechanics to have any function. Dummy components are useful because they allow us to store information on the entities, and use the information to drive graphics/gameplay mechanics.</p><p>Good examples are <code>variant</code> and <code>mark_variant</code>. These components can be set with an Integer value. In the vanilla resource pack, this Integer is used to pick the textures for the Cat, and Horse. Another good example is <code>is_tamed</code>, which is used by the Horse to handle whether he is ridable or not.</p><p>Dummy components are good because they allow us to save data about our entity, and then query this data using Molang.</p><h2 id="integer-dummies"><a class="header-anchor" href="#integer-dummies" aria-hidden="true">#</a> Integer Dummies</h2><p>Integer dummies are set with an integer value, which allows you to store numbers, such as 1, 10, or 1423. These integers can be read using queries. Integer dummies are the most useful.</p><h2 id="bit-dummies"><a class="header-anchor" href="#bit-dummies" aria-hidden="true">#</a> Bit Dummies</h2><p>Bit dummies store a single bit of information. Namely <code>True</code> or <code>False</code>. For example <code>is_tamed</code>, which is either <code>False</code> (not added to the entity), or <code>True</code> (Added to the entity).</p><h1 id="dummies"><a class="header-anchor" href="#dummies" aria-hidden="true">#</a> Dummies</h1><table><thead><tr><th>Type</th><th>Query</th><th>Component</th><th>Notes</th></tr></thead><tbody><tr><td><strong>Int</strong></td><td>query.variant</td><td>minecraft:variant</td><td></td></tr><tr><td><strong>Int</strong></td><td>query.mark_variant</td><td>minecraft:mark_variant</td><td></td></tr><tr><td><strong>Int</strong></td><td>query.skin_id</td><td>minecraft:skin_id</td><td></td></tr><tr><td><strong>Int</strong>*</td><td>Filter like: <code>&quot;test&quot;: &quot;is_color&quot;</code>, colors are provided below.</td><td>minecraft:color</td><td>Also sets color in materials.</td></tr><tr><td><strong>Int</strong>*</td><td>No known filter, but can be used with <code>&quot;has_component&quot;</code></td><td>minecraft:color2</td><td>Also sets color in materials.</td></tr><tr><td>Bit</td><td>query.is_illager_captain</td><td>minecraft:is_illager_captain</td><td></td></tr><tr><td>Bit</td><td>query.is_baby</td><td>minecraft:is_baby</td><td>Disables use of <code>minecraft:breedable</code></td></tr><tr><td>Bit</td><td>query.is_sheared</td><td>minecraft:is_sheared</td><td></td></tr><tr><td>Bit</td><td>query.is_saddled</td><td>minecraft:is_saddled</td><td></td></tr><tr><td>Bit</td><td>query.is_tamed</td><td>minecraft:is_tamed</td><td></td></tr><tr><td>Bit</td><td>query.is_chested</td><td>minecraft:is_chested</td><td>Will drop chest on death</td></tr><tr><td>Bit</td><td>query.is_powered</td><td>minecraft:is_charged</td><td></td></tr><tr><td>Bit</td><td>query.is_stunned</td><td>minecraft:is_stunned</td><td></td></tr><tr><td>Bit</td><td>query.can_climb</td><td>minecraft:can_climb</td><td>Will allow entities to climb ladders</td></tr><tr><td>Bit</td><td>query.can_fly</td><td>minecraft:can_fly</td><td>Marks the entity as being able to fly, the pathfinder won&#39;t be restricted to paths where a solid block is required underneath it.</td></tr><tr><td>Bit</td><td>query.can_power_jump</td><td>minecraft:can_power_jump</td><td>Allows the entity to power jump like the horse does in vanilla.</td></tr><tr><td>Bit</td><td>query.is_ignited</td><td>minecraft:is_ignited</td><td></td></tr></tbody></table><h2 id="colors-for-the-color-and-color2-components"><a class="header-anchor" href="#colors-for-the-color-and-color2-components" aria-hidden="true">#</a> Colors for the color and color2 components</h2><ul><li>black</li><li>blue</li><li>brown</li><li>cyan</li><li>gray</li><li>green</li><li>light_blue</li><li>light_green</li><li>magenta</li><li>orange</li><li>pink</li><li>purple</li><li>red</li><li>silver</li><li>white</li><li>yellow</li></ul>',12);i.render=function(d,r,i,a,n,s){return t(),e("div",null,[o])};export default i;export{r as __pageData};
