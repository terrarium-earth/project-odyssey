"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[5194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(m,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={displayed_sidebar:"cadmus"},o="Admin Claims",c={unversionedId:"cadmus/admin-claims/admin-claims",id:"cadmus/admin-claims/admin-claims",title:"Admin Claims",description:"Admin claims are specialized claims that do not belong to a team or player.",source:"@site/docs/cadmus/admin-claims/admin-claims.md",sourceDirName:"cadmus/admin-claims",slug:"/cadmus/admin-claims/",permalink:"/project-odyssey/docs/cadmus/admin-claims/",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"cadmus"},sidebar:"cadmus",previous:{title:"Teams",permalink:"/project-odyssey/docs/cadmus/player-claims/teams"},next:{title:"Admin Claim Commands",permalink:"/project-odyssey/docs/cadmus/admin-claims/commands"}},m={},s=[],l={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-claims"},"Admin Claims"),(0,a.kt)("p",null,"Admin claims are specialized claims that do not belong to a team or player.\nThey feature a region flag system that allows for fine-grained control over who can do what within the claim.\nAdmin claim groups are created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"/cadmus adminclaims create")," command.\nFlags are managed per admin claim group with the ",(0,a.kt)("inlineCode",{parentName:"p"},"/cadmus adminclaims flag")," commands."))}p.isMDXComponent=!0}}]);