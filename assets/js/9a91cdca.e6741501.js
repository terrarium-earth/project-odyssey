"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[8961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,f=c["".concat(o,".").concat(u)]||c[u]||p[u]||l;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[c]="string"==typeof e?e:i,r[1]=m;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={displayed_sidebar:"cadmus"},r="Admin Commands",m={unversionedId:"cadmus/admin-tools/commands",id:"cadmus/admin-tools/commands",title:"Admin Commands",description:"List Command",source:"@site/docs/cadmus/admin-tools/commands.md",sourceDirName:"cadmus/admin-tools",slug:"/cadmus/admin-tools/commands",permalink:"/project-odyssey/docs/cadmus/admin-tools/commands",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"cadmus"},sidebar:"cadmus",previous:{title:"Admin Flag Commands",permalink:"/project-odyssey/docs/cadmus/admin-claims/flags"},next:{title:"Game Rules",permalink:"/project-odyssey/docs/cadmus/admin-tools/gamerules"}},o={},s=[{value:"List Command",id:"list-command",level:2},{value:"Claim Command",id:"claim-command",level:2},{value:"Unclaim Command",id:"unclaim-command",level:2},{value:"Clear Command",id:"clear-command",level:2},{value:"Clear All Command",id:"clear-all-command",level:2},{value:"Default Settings",id:"default-settings",level:2}],d={toc:s},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admin-commands"},"Admin Commands"),(0,i.kt)("h2",{id:"list-command"},"List Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus admin list\n")),(0,i.kt)("p",null,"Lists all teams and their IDs."),(0,i.kt)("h2",{id:"claim-command"},"Claim Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus admin claim <id> <pos> <chunkload>\n")),(0,i.kt)("p",null,"Claims a chunk on behalf of another player or team."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": The identifier for the team. IDs with a ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," prefix are player claims, IDs with a ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," prefix are team claims, and IDs with an ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," prefix are admin claims.\nUse ",(0,i.kt)("inlineCode",{parentName:"li"},"/cadmus admin list")," to see a list of teams mapped to their IDs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pos"),": The chunk position to claim. This parameter is ",(0,i.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, it will claim the player's current position."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chunkload"),": Whether the claim is chunk loaded or not. This parameter is ",(0,i.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, the chunk will not be loaded.")),(0,i.kt)("h2",{id:"unclaim-command"},"Unclaim Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus admin unclaim <id> <pos>\n")),(0,i.kt)("p",null,"Unclaims a chunk on behalf of another player or team."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": The identifier for the team. This parameter is ",(0,i.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, it will unclaim whatever team's claim is at the player's current position."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pos"),": The chunk position to unclaim. This parameter is ",(0,i.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, it will unclaim the player's current position.")),(0,i.kt)("h2",{id:"clear-command"},"Clear Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus admin clear <id>\n")),(0,i.kt)("p",null,"Removes all claims associated with the given team."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," the identifier for the team. IDs with a ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," prefix are player claims, IDs with a ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," prefix are team claims, and IDs with an ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," prefix are admin claims.\nUse ",(0,i.kt)("inlineCode",{parentName:"li"},"/cadmus admin list")," to see a list of teams mapped to their IDs.")),(0,i.kt)("h2",{id:"clear-all-command"},"Clear All Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus admin clearall\n")),(0,i.kt)("p",null,"Completely removes all claims from the server. This will also remove all admin claims; however, it will not remove admin claim groups and teams themselves."),(0,i.kt)("h2",{id:"default-settings"},"Default Settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus admin defaultsettings <setting> <value>\n")),(0,i.kt)("p",null,"Modifies the default settings for player claims. (see ",(0,i.kt)("a",{parentName:"p",href:"/project-odyssey/docs/cadmus/player-claims/settings"},"Claim Settings")," for more information)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setting"),": The default setting to modify. Valid settings are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canBreak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canDamageEntities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canExplode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canInteractWithBlocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canInteractWithEntities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canPlace")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": The value to set the default setting to. Can be true or false and is false by default, meaning that all claims will be protected by default.")))}p.isMDXComponent=!0}}]);