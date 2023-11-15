"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[4626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,y=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return r?a.createElement(y,i(i({ref:t},m),{},{components:r})):a.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={displayed_sidebar:"cadmus"},i="Teams",s={unversionedId:"cadmus/player-claims/teams",id:"cadmus/player-claims/teams",title:"Teams",description:"In addition to individual player claims, you can also claim as a team.",source:"@site/docs/cadmus/player-claims/teams.md",sourceDirName:"cadmus/player-claims",slug:"/cadmus/player-claims/teams",permalink:"/docs/cadmus/player-claims/teams",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"cadmus"},sidebar:"cadmus",previous:{title:"Claim Settings",permalink:"/docs/cadmus/player-claims/settings"},next:{title:"Admin Claims",permalink:"/docs/cadmus/admin-claims/"}},l={},c=[],m={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"teams"},"Teams"),(0,n.kt)("p",null,"In addition to individual player claims, you can also claim as a team.\nCadmus supports two team systems, vanilla teams (yes it's a thing) and Argonauts guilds."),(0,n.kt)("p",null,"If Argonauts is not installed, it will use the vanilla team system.\nHowever, if Argonauts is installed, it will use the Argonauts guild system by default."),(0,n.kt)("p",null,"Once a world has been created with one of the team systems, it's not recommended to switch to the other.\nIf for whatever reason you need to switch, you can do so by modifying the NBT of ",(0,n.kt)("inlineCode",{parentName:"p"},"saves/<world>/data/cadmus_data.dat"),"\nand changing the value ",(0,n.kt)("inlineCode",{parentName:"p"},"team_provider")," to either ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"argonauts"),". You'll need an NBT editor to do this."))}d.isMDXComponent=!0}}]);