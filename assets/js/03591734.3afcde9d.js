"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=l,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={displayed_sidebar:"hermes",title:"<ul>"},i="<ul> : Unordered List",o={unversionedId:"hermes/elements/ul",id:"hermes/elements/ul",title:"<ul>",description:"The `` element is used to display an unordered list.",source:"@site/docs/hermes/elements/ul.md",sourceDirName:"hermes/elements",slug:"/hermes/elements/ul",permalink:"/docs/hermes/elements/ul",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"hermes",title:"<ul>"},sidebar:"hermes",previous:{title:"<p>",permalink:"/docs/hermes/elements/p"},next:{title:"Color",permalink:"/docs/hermes/attributes/color"}},s={},u=[{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Related Elements",id:"related-elements",level:2},{value:"Version History",id:"version-history",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ul--unordered-list"},(0,l.kt)("inlineCode",{parentName:"h1"},"<ul>")," : Unordered List"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<ul>")," element is used to display an unordered list."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../attributes/color"},(0,l.kt)("inlineCode",{parentName:"a"},"color"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The color of the dot. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"white"),".")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following example will a list with 3 items with the first being red and the seconding being a blockquote.\nAll items will have a red dot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ul color="red">\n    <li color="red">This is a red list item.</li>\n    <li>\n        <blockquote>\n            This is a blockquote list item.\n        </blockquote>\n    </li>\n    <li>This is a normal list item.</li>\n</ul>\n')),(0,l.kt)("h2",{id:"restrictions"},"Restrictions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<ul>")," element can only contain ",(0,l.kt)("inlineCode",{parentName:"p"},"<li>")," elements."),(0,l.kt)("h2",{id:"related-elements"},"Related Elements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./li"},(0,l.kt)("inlineCode",{parentName:"a"},"<li>"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./ol"},(0,l.kt)("inlineCode",{parentName:"a"},"<ol>")))),(0,l.kt)("h2",{id:"version-history"},"Version History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}c.isMDXComponent=!0}}]);