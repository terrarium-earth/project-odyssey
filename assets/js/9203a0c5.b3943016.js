"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[2400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={displayed_sidebar:"hermes",title:"<hint>"},l="<hint> : Hint",o={unversionedId:"hermes/elements/hint",id:"hermes/elements/hint",title:"<hint>",description:"The `` element is used to display a hint. It would look like such in html:",source:"@site/docs/hermes/elements/hint.md",sourceDirName:"hermes/elements",slug:"/hermes/elements/hint",permalink:"/docs/hermes/elements/hint",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"hermes",title:"<hint>"},sidebar:"hermes",previous:{title:"<h1>",permalink:"/docs/hermes/elements/headings"},next:{title:"<hr>",permalink:"/docs/hermes/elements/hr"}},s={},p=[{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Version History",id:"version-history",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hint--hint"},(0,i.kt)("inlineCode",{parentName:"h1"},"<hint>")," : Hint"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<hint>")," element is used to display a hint. It would look like such in html:"),(0,i.kt)("admonition",{title:"Example Hint",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This is an example hint.")),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../attributes/color"},(0,i.kt)("inlineCode",{parentName:"a"},"color"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The color of the hint. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"white"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"icon")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The icon to display on the hint, this is an item id. Defaults to air.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"title")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'The title of the hint. Defaults to "".')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,'The following example will display a hint with the title "Example Hint" and the text "This is an example hint."\nand an icon of a diamond sword.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<hint title="Example Hint" icon="minecraft:diamond_sword">\n    <p>This is an example hint.</p>\n</hint>\n')),(0,i.kt)("h2",{id:"restrictions"},"Restrictions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<hint>")," element can only contain text elements."),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}u.isMDXComponent=!0}}]);