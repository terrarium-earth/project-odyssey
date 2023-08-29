"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[3973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={displayed_sidebar:"cadmus"},o="Claim Commands",l={unversionedId:"cadmus/player-claims/commands",id:"cadmus/player-claims/commands",title:"Claim Commands",description:"Claim Command",source:"@site/docs/cadmus/player-claims/commands.md",sourceDirName:"cadmus/player-claims",slug:"/cadmus/player-claims/commands",permalink:"/project-odyssey/docs/cadmus/player-claims/commands",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"cadmus"},sidebar:"cadmus",previous:{title:"Claim Map",permalink:"/project-odyssey/docs/cadmus/player-claims/map"},next:{title:"Claim Settings",permalink:"/project-odyssey/docs/cadmus/player-claims/settings"}},m={},c=[{value:"Claim Command",id:"claim-command",level:2},{value:"Claim Info Command",id:"claim-info-command",level:2},{value:"Unclaim Command",id:"unclaim-command",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"claim-commands"},"Claim Commands"),(0,r.kt)("h2",{id:"claim-command"},"Claim Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/claim <pos> <chunkload>\n")),(0,r.kt)("p",null,"Claims a chunk of land"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pos"),": The chunk position to claim. This parameter is ",(0,r.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, it will claim the player's current position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chunkload"),": Whether the claim is chunk loaded or not. This parameter is ",(0,r.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, the chunk will not be loaded.")),(0,r.kt)("h2",{id:"claim-info-command"},"Claim Info Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/claim info <pos>\n")),(0,r.kt)("p",null,"Provides information about a claim at the specified position. This information includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the chunk is unclaimed, a message indicating that the chunk is unclaimed."),(0,r.kt)("li",{parentName:"ul"},"If the chunk is claimed, the name of the team or player who claimed the chunk, the type of claim (team, player, or admin), and whether the chunk is chunk loaded or not."),(0,r.kt)("li",{parentName:"ul"},"The location of the chunk (its x and z coordinates)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pos"),": The position of the chunk to get information from. This parameter is ",(0,r.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, the action will be performed at the location the player\nexecuted the command.")),(0,r.kt)("h2",{id:"unclaim-command"},"Unclaim Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/unclaim <pos>\n")),(0,r.kt)("p",null,"Unclaims a chunk of land"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pos"),": The chunk position to unclaim. This parameter is ",(0,r.kt)("strong",{parentName:"li"},"optional"),".\nIf not specified, it will unclaim the player's current position.")))}u.isMDXComponent=!0}}]);