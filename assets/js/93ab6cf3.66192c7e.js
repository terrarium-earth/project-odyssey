"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[7657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),m=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return l.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return t?l.createElement(h,o(o({ref:n},c),{},{components:t})):l.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<a;m++)o[m]=t[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var l=t(7462),r=(t(7294),t(3905));const a={displayed_sidebar:"hermes",title:"<columns>"},o="<columns> : Columns",i={unversionedId:"hermes/elements/columns",id:"hermes/elements/columns",title:"<columns>",description:"The `` element creates a row of columns.",source:"@site/docs/hermes/elements/columns.md",sourceDirName:"hermes/elements",slug:"/hermes/elements/columns",permalink:"/docs/hermes/elements/columns",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"hermes",title:"<columns>"},sidebar:"hermes",previous:{title:"<column>",permalink:"/docs/hermes/elements/column"},next:{title:"<component>",permalink:"/docs/hermes/elements/component"}},s={},m=[{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Related Elements",id:"related-elements",level:2},{value:"Version History",id:"version-history",level:2}],c={toc:m},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"columns--columns"},(0,r.kt)("inlineCode",{parentName:"h1"},"<columns>")," : Columns"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<columns>")," element creates a row of columns.\nThis can be used to create a grid of elements, by default the columns will be evenly spaced."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"template")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The template attribute is a space separated list of column widths.\nThe widths are specified as a percentage with a ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," suffix.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following will show 2 columns, each with 3 lines of text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<columns>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n</columns>\n")),(0,r.kt)("p",null,"The following will show 3 columns, with widths of 40%, 20%, and 40% respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<columns template="40% 20 40%">\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n</columns>\n')),(0,r.kt)("h2",{id:"restrictions"},"Restrictions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<columns>")," element must contain only ",(0,r.kt)("inlineCode",{parentName:"li"},"<column>")," elements."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<columns")," element cannot contain more than 3 ",(0,r.kt)("inlineCode",{parentName:"li"},"<column>")," elements.")),(0,r.kt)("h2",{id:"related-elements"},"Related Elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../elements/column"},(0,r.kt)("inlineCode",{parentName:"a"},"<column>")))),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}u.isMDXComponent=!0}}]);