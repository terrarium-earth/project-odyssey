"use strict";(self.webpackChunkterrarium_docs=self.webpackChunkterrarium_docs||[]).push([[7657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),l=(t(7294),t(3905));const a={displayed_sidebar:"hermes",title:"<columns>"},o="<columns> : Columns",i={unversionedId:"hermes/elements/columns",id:"hermes/elements/columns",title:"<columns>",description:"The `` element creates a row of columns.",source:"@site/docs/hermes/elements/columns.md",sourceDirName:"hermes/elements",slug:"/hermes/elements/columns",permalink:"/docs/hermes/elements/columns",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"hermes",title:"<columns>"},sidebar:"hermes",previous:{title:"<column>",permalink:"/docs/hermes/elements/column"},next:{title:"<component>",permalink:"/docs/hermes/elements/component"}},s={},p=[{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Elements",id:"related-elements",level:2},{value:"Version History",id:"version-history",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"columns--columns"},(0,l.kt)("inlineCode",{parentName:"h1"},"<columns>")," : Columns"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<columns>")," element creates a row of columns.\nThis can be used to create a grid of elements, by default the columns will be evenly spaced."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"template")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The template attribute is a space separated list of column widths.\nThe widths are specified as a percentage with a ",(0,l.kt)("inlineCode",{parentName:"p"},"%")," suffix.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following will show 2 columns, each with 3 lines of text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<columns>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n</columns>\n")),(0,l.kt)("p",null,"The following will show 3 columns, with widths of 40%, 20%, and 40% respectively."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<columns template="40% 20 40%">\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n    <column>\n        <p>Line 1</p>\n        <p>Line 2</p>\n        <p>Line 3</p>\n    </column>\n</columns>\n')),(0,l.kt)("h2",{id:"related-elements"},"Related Elements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../elements/column"},(0,l.kt)("inlineCode",{parentName:"a"},"<column>")))),(0,l.kt)("h2",{id:"version-history"},"Version History"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}u.isMDXComponent=!0}}]);