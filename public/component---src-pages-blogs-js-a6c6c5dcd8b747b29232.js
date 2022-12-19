/*! For license information please see component---src-pages-blogs-js-a6c6c5dcd8b747b29232.js.LICENSE.txt */
(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[296],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},9383:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7294),a=r(5956),o=r(2158),s=r(9411),l=r(3228),i=r(1889),c=r(9758),u=r(1883);var d=function(){return n.createElement("div",null,n.createElement(a.Z,{flag:"header1"}),n.createElement(a.Z,{flag:"header2"}),n.createElement("div",{className:"blogs_section1"},n.createElement("p",{className:"Blogs_title"},"Blogs"),n.createElement("p",{className:"Blogs_desc"},"Explore our vast library of fascinating IT technology resources. Subject matter experts create our blogs to help you learn about and understand essential digital innovations.")),n.createElement("div",{className:"blogs_section2"},n.createElement("p",{className:"categories"},"All Categories"),n.createElement("input",{placeholder:"search",className:"searchBox"})),n.createElement("hr",{className:"sect2_hr"}),n.createElement("div",{className:"blogs_section3"},n.createElement("div",{className:"blogs_cardlist"},s.map(((e,t)=>n.createElement(l.Z,{key:t,style:{width:"23rem"},className:"card11",onClick:()=>{return t=e,console.log("data",t),void(0,u.c4)("/blogsDetails",{state:{data:t}});var t}},n.createElement(l.Z.Img,{variant:"top",src:e.images}),n.createElement(l.Z.Body,null,n.createElement(l.Z.Subtitle,{className:"blogsubtitile"}," ",e.subTitle),n.createElement(l.Z.Title,{className:"blogsTitile"},e.title1),n.createElement(l.Z.Text,{className:"blogsdesc"},e.content1)))))),n.createElement("div",{className:"blogsRight"},n.createElement("div",{className:"slide1"},n.createElement("p",null,"All Categories")," ",n.createElement("hr",null),n.createElement("p",null,"Automated Testing"),n.createElement("hr",null),n.createElement("p",null,"Mobile App Development"),n.createElement("hr",null),n.createElement("p",null,"Product Development"),n.createElement("hr",null),n.createElement("p",null,"Staff Augmentation"),n.createElement("hr",null),n.createElement("p",null,"Technology"),n.createElement("hr",null),n.createElement("p",null,"Web App Development")),n.createElement("div",{className:"slide2"},n.createElement("p",null,"Tweets"),n.createElement("img",{src:i.Z}),n.createElement("img",{src:c.Z})))),n.createElement(o.Z,null))};var m=function(){return n.createElement(d,null)}},3228:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var n=r(4184),a=r.n(n),o=r(7294),s=r(6792),l=r(4680),i=r(5893),c=e=>o.forwardRef(((t,r)=>(0,i.jsx)("div",{...t,ref:r,className:a()(t.className,e)})));const u=o.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},l)=>{const c=(0,s.vE)(e,"card-img");return(0,i.jsx)(n,{ref:l,className:a()(r?`${c}-${r}`:c,t),...o})}));u.displayName="CardImg";var d=u;const m=o.createContext(null);m.displayName="CardHeaderContext";var p=m;const g=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},l)=>{const c=(0,s.vE)(e,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,i.jsx)(p.Provider,{value:u,children:(0,i.jsx)(r,{ref:l,...n,className:a()(t,c)})})}));g.displayName="CardHeader";var f=g;const b=c("h5"),v=c("h6"),h=(0,l.Z)("card-body"),E=(0,l.Z)("card-title",{Component:b}),x=(0,l.Z)("card-subtitle",{Component:v}),N=(0,l.Z)("card-link",{Component:"a"}),w=(0,l.Z)("card-text",{Component:"p"}),y=(0,l.Z)("card-footer"),T=(0,l.Z)("card-img-overlay"),P=o.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:l,children:c,as:u="div",...d},m)=>{const p=(0,s.vE)(e,"card");return(0,i.jsx)(u,{ref:m,...d,className:a()(t,p,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:l?(0,i.jsx)(h,{children:c}):c})}));P.displayName="Card",P.defaultProps={body:!1};var C=Object.assign(P,{Img:d,Title:E,Subtitle:x,Body:h,Link:N,Text:w,Header:f,Footer:y,ImgOverlay:T})},6792:function(e,t,r){"use strict";r.d(t,{SC:function(){return c},vE:function(){return i}});var n=r(7294);r(5893);const a=["xxl","xl","lg","md","sm","xs"],o=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:s,Provider:l}=o;function i(e,t){const{prefixes:r}=(0,n.useContext)(o);return e||r[t]||t}function c(){const{dir:e}=(0,n.useContext)(o);return"rtl"===e}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4184),a=r.n(n),o=/-(.)/g;var s=r(7294),l=r(6792),i=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=c(e),Component:r,defaultProps:n}={}){const o=s.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...s},c)=>{const u=(0,l.vE)(n,e);return(0,i.jsx)(o,{ref:c,className:a()(t,u),...s})}));return o.defaultProps=n,o.displayName=t,o}},1889:function(e,t,r){"use strict";t.Z=r.p+"static/tweet1-54946c5c93244775bbda0fa7a9cb6448.png"},9758:function(e,t,r){"use strict";t.Z=r.p+"static/tweet2-f8d1afc6fbc39c68b1ed6e254f4f48f9.png"},9411:function(e){"use strict";e.exports=JSON.parse('[{"images":"../images/blogsPic/blog0.png","title1":"New Product Development; Winner’s Guide","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …","subTitle":"Automated Testing   |   May 26, 2022","route":"/blogsDetails"},{"images":"../images/blogsPic/blog1.png","title1":"Selenium the Most Popular Test Automation Tool; A Superlative Guide To Selenium Testing","subTitle":" Product Development   |   February 16, 2022","route":"/blogsDetails","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …"},{"images":"../images/blogsPic/blog2.png","title1":"New Product Development; Winner’s Guide","subTitle":"Automated Testing   |   May 26, 2022","route":"/blogsDetails","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …"},{"images":"../images/blogsPic/blog3.png","title1":"Selenium the Most Popular Test Automation Tool; A Superlative Guide To Selenium Testing","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …","subTitle":" Product Development   |   February 16, 2022","route":"/blogsDetails"},{"images":"../images/blogsPic/blog4.png","title1":"New Product Development; Winner’s Guide","subTitle":"Automated Testing   |   May 26, 2022","route":"/blogsDetails","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …"},{"images":"../images/blogsPic/blog5.png","title1":"Selenium the Most Popular Test Automation Tool; A Superlative Guide To Selenium Testing","subTitle":" Product Development   |   February 16, 2022","route":"/blogsDetails","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …"}]')}}]);
//# sourceMappingURL=component---src-pages-blogs-js-a6c6c5dcd8b747b29232.js.map