"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[2200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={displayed_sidebar:"prometheus"},o="Runs Command",s={unversionedId:"prometheus/commands/utilities/runs",id:"prometheus/commands/utilities/runs",title:"Runs Command",description:"Usage",source:"@site/docs/prometheus/commands/utilities/runs.md",sourceDirName:"prometheus/commands/utilities",slug:"/prometheus/commands/utilities/runs",permalink:"/docs/prometheus/commands/utilities/runs",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"prometheus"},sidebar:"prometheus",previous:{title:"Random Teleport Command",permalink:"/docs/prometheus/commands/utilities/rtp"},next:{title:"Miscellaneous Commands",permalink:"/docs/prometheus/commands/utilities/misc"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Modifying/Creating a run",id:"modifyingcreating-a-run",level:3},{value:"Variables",id:"variables",level:4},{value:"Comments",id:"comments",level:4},{value:"Running a run",id:"running-a-run",level:3},{value:"Permissions",id:"permissions",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runs-command"},"Runs Command"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"modifyingcreating-a-run"},"Modifying/Creating a run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/runs\n")),(0,a.kt)("p",null,"Opens the runs menu to edit or create a run.\nThey are a version of vanilla mc functions that can be run by players with variables."),(0,a.kt)("h4",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${user}")," - The players username who ran the command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${[x]}")," - The xth argument passed to the command. Where x is a number starting at 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${[x]-[y]}")," - The xth argument passed to the command, starting at 0, with a default value of y if the argument is not passed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${[x]-*}")," - All arguments passed to the command starting at the xth argument, starting at 0.")),(0,a.kt)("h4",{id:"comments"},"Comments"),(0,a.kt)("p",null,"Comments can be added to the run by adding a line starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"#"),"."),(0,a.kt)("h3",{id:"running-a-run"},"Running a run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/runs run <run> [args]\n")),(0,a.kt)("p",null,"Runs the specified run."),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"command.run.<run_id>")," - Allows the player to run the specified run.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the player has the op permission they will be able to run any run.")))}c.isMDXComponent=!0}}]);