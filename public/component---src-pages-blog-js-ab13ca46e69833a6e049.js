/*! For license information please see component---src-pages-blog-js-ab13ca46e69833a6e049.js.LICENSE.txt */
(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[7],{4184:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var n=s.apply(null,a);n&&e.push(n)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},5267:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var r=a(7294),s=a(7519),l=a(9411),n=a(4184),o=a.n(n),c=a(6792),i=a(4680),u=a(5893),d=e=>r.forwardRef(((t,a)=>(0,u.jsx)("div",{...t,ref:a,className:o()(t.className,e)})));const m=r.forwardRef((({bsPrefix:e,className:t,variant:a,as:r="img",...s},l)=>{const n=(0,c.vE)(e,"card-img");return(0,u.jsx)(r,{ref:l,className:o()(a?`${n}-${a}`:n,t),...s})}));m.displayName="CardImg";var g=m;const p=r.createContext(null);p.displayName="CardHeaderContext";var f=p;const v=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...s},l)=>{const n=(0,c.vE)(e,"card-header"),i=(0,r.useMemo)((()=>({cardHeaderBsPrefix:n})),[n]);return(0,u.jsx)(f.Provider,{value:i,children:(0,u.jsx)(a,{ref:l,...s,className:o()(t,n)})})}));v.displayName="CardHeader";var x=v;const E=d("h5"),N=d("h6"),b=(0,i.Z)("card-body"),M=(0,i.Z)("card-title",{Component:E}),h=(0,i.Z)("card-subtitle",{Component:N}),C=(0,i.Z)("card-link",{Component:"a"}),A=(0,i.Z)("card-text",{Component:"p"}),T=(0,i.Z)("card-footer"),y=(0,i.Z)("card-img-overlay"),D=r.forwardRef((({bsPrefix:e,className:t,bg:a,text:r,border:s,body:l,children:n,as:i="div",...d},m)=>{const g=(0,c.vE)(e,"card");return(0,u.jsx)(i,{ref:m,...d,className:o()(t,g,a&&`bg-${a}`,r&&`text-${r}`,s&&`border-${s}`),children:l?(0,u.jsx)(b,{children:n}):n})}));D.displayName="Card",D.defaultProps={body:!1};var I=Object.assign(D,{Img:g,Title:M,Subtitle:h,Body:b,Link:C,Text:A,Header:x,Footer:T,ImgOverlay:y}),S=(a(1889),a(9758),a(1883)),j=a(9512);var k=function(){const e=typeof window.history.state;console.log(e.data);const{0:t,1:a}=(0,r.useState)(void 0!==e.data?e.data:"All Categories"),{0:n,1:o}=(0,r.useState)("");return r.createElement("div",{className:"blogbody"},r.createElement(s.Z,{flag:"header2"}),r.createElement("div",{className:"blogs_section1"},r.createElement("p",{className:"Blogs_title"},"Blogs"),r.createElement("p",{className:"Blogs_desc"},"Explore our vast library of fascinating IT technology resources. Subject matter experts create our blogs to help you learn about and understand essential digital innovations.")),r.createElement("div",{className:"blogs_section2"},r.createElement("input",{placeholder:"search",className:"searchBox",onChange:e=>o(e.target.value)}),r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTZDOS43NzQ5OCAxNS45OTk2IDExLjQ5ODggMTUuNDA1NCAxMi44OTcgMTQuMzEyTDE3LjI5MyAxOC43MDhMMTguNzA3IDE3LjI5NEwxNC4zMTEgMTIuODk4QzE1LjQwNSAxMS40OTk3IDE1Ljk5OTYgOS43NzU0NCAxNiA4QzE2IDMuNTg5IDEyLjQxMSAwIDggMEMzLjU4OSAwIDAgMy41ODkgMCA4QzAgMTIuNDExIDMuNTg5IDE2IDggMTZaTTggMkMxMS4zMDkgMiAxNCA0LjY5MSAxNCA4QzE0IDExLjMwOSAxMS4zMDkgMTQgOCAxNEM0LjY5MSAxNCAyIDExLjMwOSAyIDhDMiA0LjY5MSA0LjY5MSAyIDggMloiIGZpbGw9IiNBNEE0QTQiLz4KPC9zdmc+Cg==",alt:"search",className:"searchIcon"})),r.createElement("p",{id:"clickedText"},t),r.createElement("hr",{className:"sect2_hr"}),r.createElement("div",{className:"blogs_section3"},r.createElement("div",{className:"blogs_cardlist"},(n.length>0?l.filter((e=>e.subTitle.toLowerCase().includes(n.toLowerCase()))):t.length>0?l.filter((e=>e.subTitle.toLowerCase().includes(t.toLowerCase()))):l).map(((e,t)=>r.createElement(S.rU,{href:e.route},r.createElement(I,{key:t,style:{width:"23rem"},className:"card11",onClick:()=>(e=>{console.log("data",e)})(e.route)},r.createElement(I.Img,{variant:"top",src:e.images}),r.createElement(I.Body,null,r.createElement(I.Subtitle,{className:"blogsubtitile"}," ",e.subTitle,"  "),r.createElement(I.Title,{className:"blogsTitile"},e.title1),r.createElement(I.Text,{className:"blogsdesc"},e.content1))))))),r.createElement("div",{className:"blogsRight"},r.createElement("div",{className:"slide1"},[{stateValue:"All Categories",value:"All Categories"},{stateValue:"Automated Testing",value:"Automated Testing"},{stateValue:"Mobile App Development",value:"Mobile App Development"},{stateValue:"Product Development",value:"Product Development"},{stateValue:"Staff Augmentation",value:"Staff Augmentation"},{stateValue:"Technology",value:"Technology"},{stateValue:"Web App Development",value:"Web App Development"}].map(((e,t)=>r.createElement(r.Fragment,null,r.createElement("p",{className:"blogText",key:t,onClick:t=>a(e.stateValue)},e.value),r.createElement("hr",null))))),r.createElement("div",{className:"slide2"},r.createElement("p",null,"Tweets"),r.createElement(j.kV,{sourceType:"profile",screenName:"Venzo_Tech",options:{height:600}})))))},w=a(2158);var L=function(){return(0,r.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),r.createElement("div",null,r.createElement(k,null),r.createElement(w.Z,null))}},6792:function(e,t,a){"use strict";a.d(t,{SC:function(){return i},vE:function(){return c}});var r=a(7294);a(5893);const s=["xxl","xl","lg","md","sm","xs"],l=r.createContext({prefixes:{},breakpoints:s,minBreakpoint:"xs"}),{Consumer:n,Provider:o}=l;function c(e,t){const{prefixes:a}=(0,r.useContext)(l);return e||a[t]||t}function i(){const{dir:e}=(0,r.useContext)(l);return"rtl"===e}},4680:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(4184),s=a.n(r),l=/-(.)/g;var n=a(7294),o=a(6792),c=a(5893);const i=e=>{return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=i(e),Component:a,defaultProps:r}={}){const l=n.forwardRef((({className:t,bsPrefix:r,as:l=a||"div",...n},i)=>{const u=(0,o.vE)(r,e);return(0,c.jsx)(l,{ref:i,className:s()(t,u),...n})}));return l.defaultProps=r,l.displayName=t,l}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ab13ca46e69833a6e049.js.map