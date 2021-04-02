import{o as e,c as t,d as a}from"./app.86985e37.js";const r='{"title":"Saving and Loading Data","description":"","frontmatter":{"layout":"page","title":"Saving and Loading Data","parent":"Scripting"},"headers":[{"level":2,"title":"Saving","slug":"saving"},{"level":2,"title":"Loading","slug":"loading"},{"level":2,"title":"Boilerplate Code","slug":"boilerplate-code"}],"relativePath":"scripting/saving_loading.md","lastUpdated":1617396303120}',o={},i=a('<h1 id="saving-and-loading-data"><a class="header-anchor" href="#saving-and-loading-data" aria-hidden="true">#</a> Saving and Loading data</h1><p>Saving and loading data in Bedrock is tricky because currently scripts cannot access the local file system directly.</p><p>Nonetheless, we can save data by <a href="https://www.youtube.com/watch?v=tjragqkAlMc" target="_blank" rel="noopener noreferrer">tagging</a> a <a href="https://wiki.bedrock.dev/tutorials/dummy-entities.html" target="_blank" rel="noopener noreferrer">dummy entity</a>.</p><p>Read about the <code>executeCommand</code> and the <code>broadcastEvent</code> functions <a href="https://bedrock.dev/docs/stable/Scripting" target="_blank" rel="noopener noreferrer">here</a>.</p><p>Be sure to take note of how to create a custom event</p><p>We will use <code>executeCommand</code> to create and modify tags - note that this function can only be called in a server script.</p><p>For saving tags, you can either use one tag which is a JSON string for all your data or multiple tags and remember what the order of them means. I personally go with a single JSON string so I don&#39;t have to remember anything as the keys will tell me what the values are for.</p><p>If your data is meant to be displayed to the user, make sure they&#39;ve entered the world first! For example, you could have a listener for <code>&quot;minecraft:client_entered_world&quot;</code></p><p>In Bedrock we can create or listen for events, but we don&#39;t send events to a specific consumer directly.<br> Just remember to have the listener and broadcast events setup everywhere they need to be. For example, if I want data loaded for the client to handle, I&#39;d do: client -&gt; server -&gt; client</p><p>Client broadcasts an event the server listens for</p><p>AND</p><p>Server broadcasts an event the client listens for, so it can reply</p><h2 id="saving"><a class="header-anchor" href="#saving" aria-hidden="true">#</a> Saving</h2><ol><li>Add the dummy json files from the <a href="https://wiki.bedrock.dev/tutorials/dummy-entities.html" target="_blank" rel="noopener noreferrer">dummy entity tutorial</a> to your behavior and resource packs</li><li>Add a save function to your server script, calling <code>executeCommand</code>. This function will check if the dummy entity is created, if not it will create it and save to it.</li><li>Add a listener to your server&#39;s initialize function which will listen to a save event broadcast by your client script, call your save code here</li><li>broadcast an event in your client to let the server know when we want to save data</li></ol><h2 id="loading"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h2><ol><li>Add a listener to your server script&#39;s call to initialize. This listener will be for for a load request from the client and broadcast the saved data after reading it</li><li>In your client script you will want to broadcast a load event to let the server know saved data is needed.</li><li>In your client script, add a listener to receive the save data the server read</li></ol><h2 id="boilerplate-code"><a class="header-anchor" href="#boilerplate-code" aria-hidden="true">#</a> Boilerplate Code</h2><p>Example code coming soon...</p>',18);o.render=function(a,r,o,n,l,d){return e(),t("div",null,[i])};export default o;export{r as __pageData};
