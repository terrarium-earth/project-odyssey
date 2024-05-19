"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[4246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=l,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,a[1]=o;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),l=(n(7294),n(3905));const i={displayed_sidebar:"hermes",title:"<li>"},a="<li> : List Item",o={unversionedId:"hermes/elements/li",id:"hermes/elements/li",title:"<li>",description:"The ` element is used in conjunction with the  and ` elements to display a list item.",source:"@site/docs/hermes/elements/li.md",sourceDirName:"hermes/elements",slug:"/hermes/elements/li",permalink:"/docs/hermes/elements/li",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"hermes",title:"<li>"},sidebar:"hermes",previous:{title:"<img>",permalink:"/docs/hermes/elements/img"},next:{title:"<ol>",permalink:"/docs/hermes/elements/ol"}},s={},m=[{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Related Elements",id:"related-elements",level:2},{value:"Version History",id:"version-history",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"li--list-item"},(0,l.kt)("inlineCode",{parentName:"h1"},"<li>")," : List Item"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<li>")," element is used in conjunction with the ",(0,l.kt)("inlineCode",{parentName:"p"},"<ul>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<ol>")," elements to display a list item.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"<li>")," element can contain either elements or text, but not both."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../attributes/color"},(0,l.kt)("inlineCode",{parentName:"a"},"color"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The color of the list item if content is text. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"white"),".")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following example will a list with 3 items with the first being red and the seconding being a blockquote"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ul>\n    <li color="red">This is a red list item.</li>\n    <li>\n        <blockquote>\n            This is a blockquote list item.\n        </blockquote>\n    </li>\n    <li>This is a normal list item.</li>\n</ul>\n')),(0,l.kt)("h2",{id:"restrictions"},"Restrictions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<li>")," element can only contain text or elements, but not both."),(0,l.kt)("h2",{id:"related-elements"},"Related Elements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./ul"},(0,l.kt)("inlineCode",{parentName:"a"},"<ul>"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./ol"},(0,l.kt)("inlineCode",{parentName:"a"},"<ol>")))),(0,l.kt)("h2",{id:"version-history"},"Version History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}u.isMDXComponent=!0}}]);