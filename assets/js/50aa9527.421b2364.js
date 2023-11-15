"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[3562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),s=o(a),N=l,d=s["".concat(p,".").concat(N)]||s[N]||u[N]||i;return a?n.createElement(d,r(r({ref:t},k),{},{components:a})):n.createElement(d,r({ref:t},k))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=N;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[s]="string"==typeof e?e:l,r[1]=m;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const i={displayed_sidebar:"cadmus"},r="Admin Flag Commands",m={unversionedId:"cadmus/admin-claims/flags",id:"cadmus/admin-claims/flags",title:"Admin Flag Commands",description:"Flag Set Command",source:"@site/docs/cadmus/admin-claims/flags.md",sourceDirName:"cadmus/admin-claims",slug:"/cadmus/admin-claims/flags",permalink:"/docs/cadmus/admin-claims/flags",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"cadmus"},sidebar:"cadmus",previous:{title:"Admin Claim Commands",permalink:"/docs/cadmus/admin-claims/commands"},next:{title:"Admin Commands",permalink:"/docs/cadmus/admin-tools/commands"}},p={},o=[{value:"Flag Set Command",id:"flag-set-command",level:2},{value:"Flag Remove Command",id:"flag-remove-command",level:2},{value:"Flag List Command",id:"flag-list-command",level:2},{value:"List of Flags",id:"list-of-flags",level:2}],k={toc:o},s="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"admin-flag-commands"},"Admin Flag Commands"),(0,l.kt)("h2",{id:"flag-set-command"},"Flag Set Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus adminclaims flag set <id> <flag> <value>\n")),(0,l.kt)("p",null,"Sets a flag for an admin claim"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": The identifier for the admin claim."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flag"),": The name of the flag to be set."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": The value to set the flag to.")),(0,l.kt)("h2",{id:"flag-remove-command"},"Flag Remove Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus adminclaims flag remove <id> <flag>\n")),(0,l.kt)("p",null,"Removes a flag from an admin claim"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": The identifier for the admin claim."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flag"),": The name of the flag to be removed.")),(0,l.kt)("h2",{id:"flag-list-command"},"Flag List Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/cadmus adminclaims flag list <id>\n")),(0,l.kt)("p",null,"Lists all flags for an admin claim group"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": The identifier for the admin claim.")),(0,l.kt)("h2",{id:"list-of-flags"},"List of Flags"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allow-entry")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if entry is allowed. Attempting to enter will teleport the player out of the claim."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allow-exit")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if exit is allowed. Attempting to exit will teleport the player back into the claim."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"block-break")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if block breaking is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"block-explosions")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if block explosions are allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"block-interactions")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if block interactions are allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"block-place")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if block placing is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"creature-damage")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if creature damage is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"creature-spawning")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if creature spawning is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"entity-damage")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if entity damage is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"entity-interactions")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if entity interactions are allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"fire-spread")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if fire spread is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"keep-inventory")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if inventory is kept after death."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"monster-spawning")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if monster spawning is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ice-form")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if ice formation is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ice-melt")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if ice melting is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"item-pickup")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if item pickup is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"leaf-decay")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if leaf decay is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"lightning")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if lightning strikes are allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"mob-griefing")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if mob griefing is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"mob-spawning")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if mob spawning is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"monster-damage")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if monster damage is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"pvp")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if player versus player combat is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"snow-fall")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if snowfall is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"snow-melt")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if snow melting is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"use")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if item usage is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"use-chests")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if chests can be opened."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"use-doors")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if doors can be opened."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"use-redstone")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if redstone activation is allowed."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"use-vehicles")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines if vehicles can be mounted on."),(0,l.kt)("li",{parentName:"ul"},"Accepts ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"feed-rate")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Feeds the player a certain amount every second."),(0,l.kt)("li",{parentName:"ul"},"Accepts any decimal point number. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"0.0"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"heal-rate")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"heals a specified amount every second."),(0,l.kt)("li",{parentName:"ul"},"Accepts any decimal point number. Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"0.0"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"display-name")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines the display name of the claim. All new admin claims will have this flag set to the claim's ID by default."),(0,l.kt)("li",{parentName:"ul"},"Accepts any ",(0,l.kt)("a",{parentName:"li",href:"https://minecraft.tools/en/json_text.php"},"text component"),". Default is the claim's ID."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"entry-deny-message")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines the message displayed when entry is denied."),(0,l.kt)("li",{parentName:"ul"},"Accepts any ",(0,l.kt)("a",{parentName:"li",href:"https://minecraft.tools/en/json_text.php"},"text component"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"empty"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"exit-deny-message")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines the message displayed when exit is denied."),(0,l.kt)("li",{parentName:"ul"},"Accepts any ",(0,l.kt)("a",{parentName:"li",href:"https://minecraft.tools/en/json_text.php"},"text component"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"empty"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"farewell")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines the farewell message when leaving the claim."),(0,l.kt)("li",{parentName:"ul"},"Accepts any ",(0,l.kt)("a",{parentName:"li",href:"https://minecraft.tools/en/json_text.php"},"text component"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"empty"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"greeting")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Determines the greeting message when entering the claim."),(0,l.kt)("li",{parentName:"ul"},"Accepts any ",(0,l.kt)("a",{parentName:"li",href:"https://minecraft.tools/en/json_text.php"},"text component"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"empty"),".")))))}u.isMDXComponent=!0}}]);