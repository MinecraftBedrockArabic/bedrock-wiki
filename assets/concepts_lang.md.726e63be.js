import{o as e,c as a,d as n}from"./app.86985e37.js";const o='{"title":".lang","description":"","frontmatter":{"layout":"page","title":".lang","parent":"Concepts"},"headers":[{"level":2,"title":"Where can lang-codes be used?","slug":"where-can-lang-codes-be-used"},{"level":2,"title":"Why use lang?","slug":"why-use-lang"},{"level":2,"title":"What is the structure?","slug":"what-is-the-structure"},{"level":2,"title":"RP Vs. BP?","slug":"rp-vs-bp"},{"level":2,"title":"Overriding vanilla lang-codes","slug":"overriding-vanilla-lang-codes"},{"level":2,"title":"Undefined lang-codes","slug":"undefined-lang-codes"},{"level":2,"title":"Whats with the %s?","slug":"whats-with-the-s"},{"level":2,"title":"Useful vanilla-overrides","slug":"useful-vanilla-overrides"}],"relativePath":"concepts/lang.md","lastUpdated":1617396302960}',t={},i=n('<h1 id="understanding-lang"><a class="header-anchor" href="#understanding-lang" aria-hidden="true">#</a> Understanding .lang</h1><p>Bedrock Minecraft allows us to write the text in our addons as codes: For example <code>action.hint.exit.pig</code>. Then in the language files, we define these codes: <code>action.hint.exit.pig=Tap sneak to dismount</code>.</p><p>This workflow has two main advantages:</p><ul><li>Consolidates all of your text into one location, allowing you to more easily check for spelling mistakes, and change text after the fact</li><li>Allows internationalization. We can provide <code>.lang</code> files for multiple languages, allowing us to translate the text in our addon.</li></ul><h2 id="where-can-lang-codes-be-used"><a class="header-anchor" href="#where-can-lang-codes-be-used" aria-hidden="true">#</a> Where can lang-codes be used?</h2><p>Lang-codes can be used in any of the following places:</p><ul><li>pack name</li><li>pack description</li><li>entity name</li><li>item name</li><li>books</li><li>signs</li><li>tellraw commands</li></ul><p>As you can see, lang-codes can be used pretty much wherever you write text in your addon.</p><p>When using lang codes in addons, you can usually just use the string.</p><p>In game (signs, books, etc), use tellraw: <code>{&quot;rawtext&quot;:[{&quot;translate&quot; : &quot;my.lang.code&quot;}]}</code></p><h2 id="why-use-lang"><a class="header-anchor" href="#why-use-lang" aria-hidden="true">#</a> Why use lang?</h2><p>Even if you don&#39;t plan on translating your addon, using the <code>.lang</code> structure is advantageous, since it keeps all of your text in the same place, and makes it easier to edit, proof-read, and maintain.</p><h2 id="what-is-the-structure"><a class="header-anchor" href="#what-is-the-structure" aria-hidden="true">#</a> What is the structure?</h2><p>Lang files are found under <code>my_pack/texts/</code>. You should download and view the vanilla packs to understand this structure better. There are two main file types that you should be concerned with:</p><p><code>my_pack/texts/languages.json</code>: Contains a list of languages that your addon supports. <code>language_LOCALIZATION.lang</code>: Contains the lang-codes for a specific language/localization (for example <code>en_US.lang</code> is for the USA)</p><p>You should create <code>languages.json</code>, and then one <code>.lang</code> file for each language you want to support. If you are only writing for english, you HIGHLY recommended to support both <code>en_US</code> and <code>en_GB</code> (great britain), even if you only copy/paste the <code>.lang</code> file.</p><h2 id="rp-vs-bp"><a class="header-anchor" href="#rp-vs-bp" aria-hidden="true">#</a> RP Vs. BP?</h2><p><code>.lang</code> files can be placed in both the resource pack, and the behavior pack. This is presumably to allow behaviors packs to function stand-alone without requiring a resource pack. In practice though, all localization should be done inside the resource pack. The only strings you should have in your BP <code>.lang</code> files are the <code>pack.title</code> and <code>pack.description</code>.</p><h2 id="overriding-vanilla-lang-codes"><a class="header-anchor" href="#overriding-vanilla-lang-codes" aria-hidden="true">#</a> Overriding vanilla lang-codes</h2><p>It is completely allowed and encouraged to override vanilla language strings. For example, if you want to rename <code>Iron Ingots</code> to <code>Iron Rods</code>, you can do so with the lang file:</p><p><code>item.iron_ingot.name=Iron Rod</code></p><h2 id="undefined-lang-codes"><a class="header-anchor" href="#undefined-lang-codes" aria-hidden="true">#</a> Undefined lang-codes</h2><p>Sometimes, undefined lang-codes will show up in-game, when this happens, they will show the entire lang-code instead of a string. A very common place where you will see this, is with an entity name:</p><p><code>entity.sirlich:my_entity.name</code></p><p>When you see these codes, you can simply copy them down into your <code>.lang</code> files. For example:</p><p><code>entity.sirlich:my_entity.name=MY VERY COOL ENTITY</code></p><h2 id="whats-with-the-s"><a class="header-anchor" href="#whats-with-the-s" aria-hidden="true">#</a> Whats with the %s?</h2><p>Some lang-codes contain the concept of arguments. These are things the game passes into your lang-code. You represent these arguments with <code>%</code>s. These normally occur in dynamic strings, like commands:</p><p>Example: (<code>/say</code>) <code>chat.type.announcement=[%s] %s</code></p><p>In the example above, the first <code>%s</code> is replaced by the name of the entity doing the <code>/say</code>. The second <code>%s</code> is replaced by the string after the say.</p><h2 id="useful-vanilla-overrides"><a class="header-anchor" href="#useful-vanilla-overrides" aria-hidden="true">#</a> Useful vanilla-overrides</h2><p>Remove the <code>[Entity Name]</code> from <code>/say</code> commands: <code>chat.type.announcement=%2</code></p>',32);t.render=function(n,o,t,s,l,d){return e(),a("div",null,[i])};export default t;export{o as __pageData};
