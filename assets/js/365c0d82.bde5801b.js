"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={displayed_sidebar:"prometheus"},i="Teleport Settings",s={unversionedId:"prometheus/roles/settings/tp",id:"prometheus/roles/settings/tp",title:"Teleport Settings",description:"These settings are used for configuring the teleportation system with random teleportation and teleportation to other players.",source:"@site/docs/prometheus/roles/settings/tp.md",sourceDirName:"prometheus/roles/settings",slug:"/prometheus/roles/settings/tp",permalink:"/docs/prometheus/roles/settings/tp",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"prometheus"},sidebar:"prometheus",previous:{title:"Home Settings",permalink:"/docs/prometheus/roles/settings/home"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Teleportation Expire Time",id:"teleportation-expire-time",level:3},{value:"Random Teleportation Cooldown",id:"random-teleportation-cooldown",level:3},{value:"Random Teleportation Radius",id:"random-teleportation-radius",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"teleport-settings"},"Teleport Settings"),(0,o.kt)("p",null,"These settings are used for configuring the teleportation system with random teleportation and teleportation to other players."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"teleportation-expire-time"},"Teleportation Expire Time"),(0,o.kt)("p",null,"This setting determines how long a player has to accept a teleportation request before it expires."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Default: 30 seconds")),(0,o.kt)("h3",{id:"random-teleportation-cooldown"},"Random Teleportation Cooldown"),(0,o.kt)("p",null,"This setting determines how long a player has to wait before they can use the random teleportation command again."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Default: 1 minute")),(0,o.kt)("h3",{id:"random-teleportation-radius"},"Random Teleportation Radius"),(0,o.kt)("p",null,"This setting determines the radius of the random teleportation command."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Default: 3000 blocks")))}d.isMDXComponent=!0}}]);