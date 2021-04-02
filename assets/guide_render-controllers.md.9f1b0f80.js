import{o as n,c as e,a as t,b as s}from"./app.86985e37.js";const a='{"title":"Render controllers","description":"","frontmatter":{"layout":"guide","title":"Render controllers","parent":"Beginners Guide","badge":8,"badge_color":"guide","badge_justification":"left","nav_order":8},"relativePath":"guide/render-controllers.md","lastUpdated":1617396302964}',o={},r=t("hr",null,null,-1),l=t("h1",{id:"basic-render-controller"},[t("a",{class:"header-anchor",href:"#basic-render-controller","aria-hidden":"true"},"#"),s(" Basic Render Controller")],-1),p=t("p",null,[s("A render controller is a file that controls what is rendered in-game. They define the material, the texture and the model to be used on the entity. Render Controller files are located in "),t("code",null,"RP/render_controllers"),s(" (the "),t("code",null,"render_controllers"),s(" folder in your resource pack). Let's look at a simple render controller's structure.")],-1),i=t("p",null,[t("code",null,"RP/render_contollers/skeleton.render_controllers.json")],-1),c=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),s("\n  "),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"1.8.0"'),t("span",{class:"token punctuation"},","),s("\n  "),t("span",{class:"token property"},'"render_controllers"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"controller.render.skeleton"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n      "),t("span",{class:"token property"},'"geometry"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Geometry.default"'),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"materials"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Material.default"'),s(),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(),t("span",{class:"token string"},'"Texture.default"'),s(),t("span",{class:"token punctuation"},"]"),s("\n    "),t("span",{class:"token punctuation"},"}"),s("\n  "),t("span",{class:"token punctuation"},"}"),s("\n"),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),u=t("ul",null,[t("li",null,[t("code",null,"contoller.render.skeleton"),s(" is the identifier of this render controller. Typically the last word in a render controller identifier is the name of the entity the render controller is to be applied to.")]),t("li",null,[s("Next come the definitions of the geometry, the materials, and the textures: -- "),t("code",null,'"geometry": "Geometry.default"'),s(' - this means that the geometry that is to be rendered on this entity is the one with the shortname "default".(Shortnames are defined in the .entity file). -- Materials define how something is rendered in-game. Different materials can be rendered on different bones. The asterisk ( * ) can be replaced by a bone\'s name. The asterisk itself refers to all bones. If you were to put something like "left_*" there, all bones with names that start with "left_" will be rendered with this material. -- '),t("code",null,'"textures": "Texture.default"'),s(': this means that the texture that is to be rendered on this entity is the one with the shortname "default".')])],-1),d=t("p",null,'As you can see, the skeleton render controller simply renders all textures, materials and models with the shortnames "default". Thus it can be used in all entities that have a single model, texture, and material.',-1),k=t("h1",{id:"render-controller-arrays-creating-an-entity-with-texture-variants"},[t("a",{class:"header-anchor",href:"#render-controller-arrays-creating-an-entity-with-texture-variants","aria-hidden":"true"},"#"),s(" Render controller Arrays - creating an entity with texture variants")],-1),h=t("p",null,"It can be made so entities spawn with random skin (texture) or model (geometry) variants with the help of render controllers.",-1),y=t("p",null,"To better understand this, let's add a texture variant to our custom entity",-1),m=t("p",null,[t("em",null,[s("Note: even though we'll be using the fox as an example here, I removed some of the fox-specific parameters from the code. In order to view the full fox code, simply open your Example Vanilla packs. The code showcased here can be used to give any entity skin or model variants, but make sure you've completed "),t("a",{href:"/guide/custom-entity-full.html"},"Custom entity"),s(" page in order to understand what's going on.")])],-1),g=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),s("\n  "),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"1.8.0"'),t("span",{class:"token punctuation"},","),s("\n  "),t("span",{class:"token property"},'"render_controllers"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"controller.render.fox"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n      "),t("span",{class:"token property"},'"arrays"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n        "),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n          "),t("span",{class:"token property"},'"Array.skins"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n            "),t("span",{class:"token string"},'"Texture.red"'),t("span",{class:"token punctuation"},","),s("\n            "),t("span",{class:"token string"},'"Texture.arctic"'),s("\n          "),t("span",{class:"token punctuation"},"]"),s("\n        "),t("span",{class:"token punctuation"},"}"),s("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"geometry"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Geometry.default"'),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"materials"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Material.default"'),s(),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(),t("span",{class:"token string"},'"Array.skins[query.variant]"'),s(),t("span",{class:"token punctuation"},"]"),s("\n    "),t("span",{class:"token punctuation"},"}"),s("\n  "),t("span",{class:"token punctuation"},"}"),s("\n"),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),f=t("p",null,'As you can see, we have a new "arrays" object in place. Let\'s add two texture variants, their shortnames (red" and "arctic") to be " defined in the .entity file like this:',-1),w=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[s("  "),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"red"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"textures/entity/skele_yaklin"'),t("span",{class:"token punctuation"},","),s("\n    "),t("span",{class:"token property"},'"arctic"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"textures/entity/skele_yaklin_arctic"'),s("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n")])])],-1),v=t("p",null,'As you can see, we defined custom shortnames to the entity instead of using "default".',-1),b=t("p",null,[s('"Red" will be the default texture, don\'t forget to create an arctic texture file in '),t("code",null,"RP/textures.entity"),s("!")],-1),x=t("ul",null,[t("li",null,'"Array.skins" holds both "Texture.red"(under the index of 0) and "Texture.arctic"(under the index of 1).'),t("li",null,[s('"textures" normally holds something like '),t("code",null,'[ "Texture.default" ]'),s(', but we don\'t have a texture with the shortname "default" in our skins array. Thus, we have this: '),t("code",null,'[ "Array.skins[query.variant]" ]')])],-1),_=t("p",null,[s('If you have some programming basics, you\'ll know that you can get an element from an array using [] - arrayName[elementIndex]. Here we take the element from Array.skins that has the same index as the value of "variant". If the variant is 0, we\'ll get "Texture.red", and if 1 we\'ll get "Texture.arctic". Let\'s see how we can set the variant in the entity\'s behavior file in '),t("code",null,"BP/entities/entityName.json"),s(".")],-1),q=t("p",null,[t("em",null,"Note 1: If you use a query that returns true or false(like query.is_charged) true will mean the same as 1 and false the same as 0.")],-1),T=t("p",null,[t("em",null,[s("Note 2: You can do the same with geometries in "),t("code",null,"Array.geos"),s(". Check "),t("code",null,"RP/render_contrllers.sheep.render_controllers.json"),s(" for more details on how that would work.")])],-1),j=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[s("  "),t("span",{class:"token property"},'"tut:red"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"minecraft:variant"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n      "),t("span",{class:"token property"},'"value"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token number"},"0"),s("\n    "),t("span",{class:"token punctuation"},"}"),s("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n  "),t("span",{class:"token property"},'"tut:arctic"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"minecraft:variant"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n      "),t("span",{class:"token property"},'"value"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token number"},"1"),s("\n    "),t("span",{class:"token punctuation"},"}"),s("\n  "),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),A=t("p",null,"Add these two component groups into \"component_groups\" of the entity behavior's file, same as you'd add a baby variant, for example.",-1),I=t("p",null,[s('"minecraft:variant" is a component created specifically for interacting with render and animation controllers - you can set it\'s "value" for anything and then test for it when controlling something with '),t("code",null,"query.variant"),s('. "minecraft:mark_variant" and "minecraft:skin_id" can be used likewise.')],-1),R=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[s("  "),t("span",{class:"token property"},'"minecraft:entity_spawned"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"sequence"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n      "),t("span",{class:"token punctuation"},"{"),s("\n        "),t("span",{class:"token property"},'"randomize"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n          "),t("span",{class:"token punctuation"},"{"),s("\n            "),t("span",{class:"token property"},'"weight"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token number"},"56"),t("span",{class:"token punctuation"},","),s("\n            "),t("span",{class:"token property"},'"add"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n              "),t("span",{class:"token property"},'"component_groups"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n                "),t("span",{class:"token string"},'"tut:red"'),s("\n              "),t("span",{class:"token punctuation"},"]"),s("\n            "),t("span",{class:"token punctuation"},"}"),s("\n          "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n          "),t("span",{class:"token punctuation"},"{"),s("\n            "),t("span",{class:"token property"},'"weight"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),s("\n            "),t("span",{class:"token property"},'"add"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n              "),t("span",{class:"token property"},'"component_groups"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n                "),t("span",{class:"token string"},'"tut:arctic"'),s("\n              "),t("span",{class:"token punctuation"},"]"),s("\n            "),t("span",{class:"token punctuation"},"}"),s("\n          "),t("span",{class:"token punctuation"},"}"),s("\n        "),t("span",{class:"token punctuation"},"]"),s("\n      "),t("span",{class:"token punctuation"},"}"),s("\n    "),t("span",{class:"token punctuation"},"]"),s("\n  "),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),P=t("p",null,'Now you have to make sure the entity gets one of the "variant" component groups randomly upon spawn.',-1),G=t("p",null,[s('Put this in your "entity_spawned" event\'s sequence.. A sequence is an array [] that contains multiple objects {} which contain what normally would be in an event. If this is a bit confusing, check '),t("a",{href:"/guide/custom-entity-full.html"},"Entity behavior definitions: Events"),s(" again and/or the guide "),t("a",{href:"https://github.com/KaiFireborn/Minecraft-Bedrock-Full-Beginner-Add-on-development-Guide-FILES",target:"_blank",rel:"noopener noreferrer"},"GitHub repository"),s(".")],-1),L=t("p",null,'The sequence itself is quite self-explanatory, it adds one of the two components. "red" will be added more often, as it\'s weight is higher.',-1),N=t("p",null,[t("em",null,"Note: It's not necessary to add the variant component upon spawn. You could for example, add an interact component(see cow behaviors) to launch an event which adds the arctic variant component group when the player interacted with ice in hand.")],-1),M=t("p",null,[t("img",{src:"/bedrock-wiki-vite/assets/images/guide/render_controllers_1.jpg",alt:""})],-1),B=t("p",null,"Now that you've updated your render controller, your .entity file(with the new texture shortnames), added the new component groups and the randomizing of the skin variants, you will observe your entities sometimes spawning with the arctic texture variant!",-1),C=t("p",null,[t("em",null,[s("If something doesn't work, watch your content log (You can enable it in Settings>Profile) or compare your files with the ones on this website "),t("a",{href:"https://github.com/KaiFireborn/Minecraft-Bedrock-Full-Beginner-Add-on-development-Guide-FILES",target:"_blank",rel:"noopener noreferrer"},"GitHub repository"),s("!")])],-1),F=t("h1",{id:"part-visibility-of-bones"},[t("a",{class:"header-anchor",href:"#part-visibility-of-bones","aria-hidden":"true"},"#"),s(" Part Visibility of bones")],-1),S=t("p",null,[t("code",null,"RP/render_controllers/fox.render_controllers.json")],-1),E=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),s("\n  "),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"1.8.0"'),t("span",{class:"token punctuation"},","),s("\n  "),t("span",{class:"token property"},'"render_controllers"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n    "),t("span",{class:"token property"},'"controller.render.fox"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n      "),t("span",{class:"token property"},'"arrays"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n        "),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s("\n          "),t("span",{class:"token property"},'"Array.skins"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n            "),t("span",{class:"token string"},'"Texture.red"'),t("span",{class:"token punctuation"},","),s("\n            "),t("span",{class:"token string"},'"Texture.arctic"'),s("\n          "),t("span",{class:"token punctuation"},"]"),s("\n        "),t("span",{class:"token punctuation"},"}"),s("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"geometry"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Geometry.default"'),t("span",{class:"token punctuation"},","),s("\n\n      "),t("span",{class:"token property"},'"part_visibility"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s("\n        "),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"leg*"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"!query.is_sleeping"'),s(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n        "),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"head"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"!query.is_sleeping"'),s(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s("\n        "),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"head_sleeping"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"query.is_sleeping"'),s(),t("span",{class:"token punctuation"},"}"),s("\n      "),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),s("\n\n      "),t("span",{class:"token property"},'"materials"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"*"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Material.default"'),s(),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),s("\n      "),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(),t("span",{class:"token string"},'"Array.skins[query.variant]"'),s(),t("span",{class:"token punctuation"},"]"),s("\n    "),t("span",{class:"token punctuation"},"}"),s("\n  "),t("span",{class:"token punctuation"},"}"),s("\n"),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),W=t("p",null,'With render controllers, you can hide certain bones in the "part_visibility" array. It\'s syntax is very similar to the "materials" array.',-1),Y=t("p",null,"Let's analyze \"part_visibility\" in this fox's render_controller:",-1),z=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"leg*"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"!query.is_sleeping"'),s(),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),H=t("p",null,[s('All bones that start with "leg" will visible when !query.is_sleeping returns true (the '),t("code",null,"!"),s(" reverts the value: when "),t("code",null,"query.is_sleeping"),s(" is "),t("strong",null,"true"),s(", "),t("code",null,"!query.is_sleeping"),s(" is "),t("strong",null,"false"),s("), or, in other words, the fox isn't sleeping. When the fox IS sleeping, the !query will return false and legs won't be visible.")],-1),K=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),t("span",{class:"token property"},'"head_sleeping"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"query.is_sleeping"'),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),V=t("p",null,'If the fox IS sleeping, the query will turn to true and the bone named "head_sleeping" will become visible. Otherwise it will be invisible.',-1),D=t("p",null,'If you wanted the "arctic" variant to be headless, you could include this in "part_visibility":',-1),O=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"head"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"!query.variant == 1"'),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),U=t("p",null,"which would do practically the same as:",-1),J=t("div",{class:"language-json"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token property"},'"head"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"query.variant == 0"'),t("span",{class:"token punctuation"},"}"),s("\n")])])],-1),Q=t("hr",null,null,-1),X=t("hr",null,null,-1),Z=t("h1",{id:"your-progress-so-far"},[t("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#"),s(" Your progress so far")],-1),$=t("p",null,[t("strong",null,"What you've done:")],-1),nn=t("ul",null,[t("li",null,[s("Learned "),t("s",null,"a lot"),s(" everything about Render Controllers;")]),t("li",null,"Made your custom entity spawn with random textures;"),t("li",null,"Learned how to hide certain parts of an entity when needed.")],-1),en=t("p",null,[t("strong",null,"What are you to do next:")],-1),tn=t("ul",null,[t("li",null,"Learn Animation Controllers, which are state machines;"),t("li",null,"your own sounds for the entities;"),t("li",null,"Create custom biomes and structures;"),t("li",null,"Much more!")],-1);o.render=function(t,s,a,o,sn,an){return n(),e("div",null,[r,l,p,i,c,u,d,k,h,y,m,g,f,w,v,b,x,_,q,T,j,A,I,R,P,G,L,N,M,B,C,F,S,E,W,Y,z,H,K,V,D,O,U,J,Q,X,Z,$,nn,en,tn])};export default o;export{a as __pageData};
