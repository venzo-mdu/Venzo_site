"use strict";(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[803],{2003:function(e,t,a){a.r(t),a.d(t,{default:function(){return xe}});var r=a(7294),l=a(7519),i=a(8387),n=a(418),s=a(1747),o=a(152),c=a(6928),m=a(6122),d=a(9959),u=a(7267),p=a(2956),g=a(3341),f=a(5335),b=a(2848),h=a(4586),E=a(6271);let y={data:""},v=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||y,x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,k=/\n+/g,N=(e,t)=>{let a="",r="",l="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?N(n,i):i+"{"+N(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=N(n,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=N.p?N.p(i,n):i+":"+n+";")}return a+(t&&l?t+"{"+l+"}":l)+r},C={},Z=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+Z(e[a]);return t}return e},I=(e,t,a,r,l)=>{let i=Z(e),n=C[i]||(C[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!C[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=x.exec(e.replace(w,""));)t[4]?r.shift():t[3]?(a=t[3].replace(k," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(k," ").trim();return r[0]})(e);C[n]=N(l?{["@keyframes "+n]:t}:t,a?"":"."+n)}let s=a&&C.g?C.g:null;return a&&(C.g=C[n]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(C[n],t,r,s),n},M=(e,t,a)=>e.reduce(((e,r,l)=>{let i=t[l];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":N(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),"");function S(e){let t=this||{},a=e.call?e(t.p):e;return I(a.unshift?a.raw?M(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,v(t.target),t.g,t.o,t.k)}S.bind({g:1});let A,P,T,$=S.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function l(i,n){let s=Object.assign({},i),o=s.className||l.className;a.p=Object.assign({theme:P&&P()},s),a.o=/ *go\d+/.test(o),s.className=S.apply(a,r)+(o?" "+o:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),T&&c[0]&&T(s),A(c,s)}return t?t(l):l}}var z=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,O=(()=>{let e=0;return()=>(++e).toString()})(),D=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),F=new Map,B=e=>{if(F.has(e))return;let t=setTimeout((()=>{F.delete(e),R({type:4,toastId:e})}),1e3);F.set(e,t)},q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=F.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?q(e,{type:1,toast:a}):q(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?B(r):e.toasts.forEach((e=>{B(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let l=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+l})))}}},H=[],J={toasts:[],pausedAt:void 0},R=e=>{J=q(J,e),H.forEach((e=>{e(J)}))},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||O()}))(t,e,a);return R({type:2,toast:r}),r.id},U=(e,t)=>_("blank")(e,t);U.error=_("error"),U.success=_("success"),U.loading=_("loading"),U.custom=_("custom"),U.dismiss=e=>{R({type:3,toastId:e})},U.remove=e=>R({type:4,toastId:e}),U.promise=(e,t,a)=>{let r=U.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(U.success(z(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{U.error(z(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var V=(e,t)=>{R({type:1,toast:{id:e,height:t}})},K=()=>{R({type:5,time:Date.now()})},W=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,r.useState)(J);(0,r.useEffect)((()=>(H.push(a),()=>{let e=H.indexOf(a);e>-1&&H.splice(e,1)})),[t]);let l=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:l}})(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>U.dismiss(t.id)),a);t.visible&&U.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let l=(0,r.useCallback)((()=>{a&&R({type:6,time:Date.now()})}),[a]),i=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:l=8,defaultPosition:i}=a||{},n=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),s=n.findIndex((t=>t.id===e.id)),o=n.filter(((e,t)=>t<s&&e.visible)).length;return n.filter((e=>e.visible)).slice(...r?[o+1]:[0,o]).reduce(((e,t)=>e+(t.height||0)+l),0)}),[t]);return{toasts:t,handlers:{updateHeight:V,startPause:K,endPause:l,calculateOffset:i}}},Y=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=$`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=$`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,X=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ee=$`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,te=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ee} 1s linear infinite;
`,ae=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,re=$`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,le=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${re} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ie=j("div")`
  position: absolute;
`,ne=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,se=$`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${se} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ce=({toast:e})=>{let{icon:t,type:a,iconTheme:l}=e;return void 0!==t?"string"==typeof t?r.createElement(oe,null,t):t:"blank"===a?null:r.createElement(ne,null,r.createElement(te,{...l}),"loading"!==a&&r.createElement(ie,null,"error"===a?r.createElement(X,{...l}):r.createElement(le,{...l})))},me=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,de=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ue=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,pe=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ge=r.memo((({toast:e,position:t,style:a,children:l})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,l]=D()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[me(a),de(a)];return{animation:t?`${$(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(ce,{toast:e}),s=r.createElement(pe,{...e.ariaProps},z(e.message,e));return r.createElement(ue,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof l?l({icon:n,message:s}):r.createElement(r.Fragment,null,n,s))}));!function(e,t,a,r){N.p=t,A=e,P=a,T=r}(r.createElement);var fe=({id:e,className:t,style:a,onHeightUpdate:l,children:i})=>{let n=r.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;l(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,l]);return r.createElement("div",{ref:n,className:t,style:a},i)},be=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,he=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:l,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:o,handlers:c}=W(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map((a=>{let n=a.position||t,s=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...l}})(n,c.calculateOffset(a,{reverseOrder:e,gutter:l,defaultPosition:t}));return r.createElement(fe,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?be:"",style:s},"custom"===a.type?z(a.message,a):i?i(a):r.createElement(ge,{toast:a,position:n}))})))};var Ee=function(){const{0:e,1:t}=(0,r.useState)(!1),{0:a,1:l}=(0,r.useState)(!1),{0:i,1:y}=(0,r.useState)(""),{0:v,1:x}=(0,r.useState)(null),{0:w,1:k}=(0,r.useState)({name:"",email:"",mobile:"",message:""}),N=e=>{k({...w,[e.target.name]:e.target.value})};return r.createElement(r.Fragment,null,r.createElement("section",null,r.createElement("div",{className:"applyJob"},r.createElement("div",{className:"job"},r.createElement("div",{className:"details"},r.createElement("p",{id:"detailsText"},"BPM / JAVA ARCHITECT"),r.createElement("p",{id:"experiancerText"},r.createElement("img",{src:n.Z,alt:"experiance"}),"  8-10 Years Experience")),r.createElement("div",{className:"applyNow"},r.createElement("button",{className:"applyNowButton","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:()=>t(!0)},"Apply Now"),r.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},r.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},r.createElement("div",{class:"modal-content"},r.createElement("div",{class:"modal-header"},r.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Modal title"),r.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.createElement("span",{"aria-hidden":"true"},"×"))),r.createElement("div",{class:"modal-body"},"..."),r.createElement("div",{class:"modal-footer"},r.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.createElement("button",{type:"button",class:"btn btn-primary"},"Save changes"))))),r.createElement("div",{className:"socialmediaIconsCareers"},r.createElement("p",{id:"shareitOn"},"share it on"),r.createElement("div",{className:"icons"},r.createElement("img",{src:o.Z,alt:"fb-icon"}),r.createElement("img",{src:c.Z,alt:"twitter-icon"}),r.createElement("img",{src:m.Z,alt:"linkedin-icon"}),r.createElement("img",{src:d.Z,alt:"insta-icon"}))))),r.createElement("div",{className:"descripition"},r.createElement("div",{className:"jobDescripition"},r.createElement("p",{id:"jobDescripitionTitle"},"Job Descripition"),r.createElement("ul",null,r.createElement("li",null," ",r.createElement("img",{src:s.Z,alt:"tickImg"})," At least 8-10 years of IT experience in Java and BPM technologies."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"})," At least 3 years of BPM experience actively contributing with large-scale BPM projects."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),"Understanding requirements from business-team and model workflow."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"})," Creating BPMN processes"),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),"Integrating approval into corporate portal using apis for seamless UI experiences."),r.createElement("li",null," ",r.createElement("img",{src:s.Z,alt:"tickImg"})," Has clear idea about identity and Access management to a BPM application.."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),"Strong knowledge on integrate principles to integrate BPM with other systems."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),"At least 3 years of spring boot experience involving REST, SpringData, SpringIntegration."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"})," Extensive hands-on Service Oriented architecture."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),"Comfortable with microservices/cloud architecture."),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),"Ability to work with team."))),r.createElement("div",{className:"skillsRequired"},r.createElement("p",{id:"skillsRequiredTitle"},"skills Required"),r.createElement("ul",null,r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),r.createElement("p",{id:"SkillPara"},"Experience in Kubernetes")),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),r.createElement("p",{id:"SkillPara"},"Deep knowledge in database.")),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),r.createElement("p",{id:"SkillPara"},"Working knowledge on AWS or other cloud platforms.")),r.createElement("li",null,r.createElement("img",{src:s.Z,alt:"tickImg"}),r.createElement("p",{id:"SkillPara"},"Administration experience with both offline and online deployments.")))),r.createElement("button",{className:"applyNowButton1",onClick:()=>t(!0)},"Apply Now")))),r.createElement(u.Z,{trigger:e,setTrigger:t},r.createElement("form",{onSubmit:async e=>{e.preventDefault(),l(!0);const t={to:g.Z,message:" Name: "+w.name+"  <br> Email: "+w.email+"  <br> Mobile No: "+w.mobile+"  <br> Message: "+w.message+" <br> resume: "+i,subject:"Venzo Careers Form"},a=await p.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",t);console.log(a),k({name:"",email:"",mobile:"",message:""})}},r.createElement("p",{id:"joinourteamText"},"Join our team"),r.createElement("input",{className:"Fname",name:"name",value:w.name,onChange:N,type:"text",placeholder:"Name*",required:!0}),r.createElement("input",{className:"Femail",name:"email",value:w.email,onChange:N,type:"text",placeholder:"Email*",required:!0}),r.createElement("input",{className:"Fphone",name:"mobile",value:w.mobile,onChange:N,type:"phone",placeholder:"Mobile number*",required:!0}),r.createElement("input",{className:"file",type:"file",accept:".pdf , .doc",placeholder:"choose file",onChange:e=>{let t=e.target.files[0];e.target.files[0].size;console.log(t),x(e.target.files[0]);const a=(0,E.iH)(b.tO,"venzofile/"+(e.target.files[0].name+(0,h.Z)()));(0,E.KV)(a,e.target.files[0]).then((e=>{(0,E.Jt)(e.ref).then((e=>{console.log(e),y(e)}))}))}}),r.createElement(he,null),r.createElement("textarea",{className:"Fmessage",name:"message",value:w.message,onChange:N,placeholder:"Message"}),r.createElement("button",{type:"submit",className:"Fbutton"},"Submit"))),r.createElement(u.Z,{trigger:a,setTrigger:l,id:"thankPop"},r.createElement("div",{className:"thankPop"},r.createElement("p",{className:"subSucss"},"Submitted successfully"),r.createElement("img",{src:f.Z,alt:"success",className:"succImg"}),r.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",r.createElement("br",null)," our team will reach you."))))},ye=a(8729),ve=a(2158);var xe=()=>((0,r.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),r.createElement("div",{className:"blockchainbody"},r.createElement(l.Z,{flag:"header2"}),r.createElement(i.Z,null),r.createElement(Ee,null),r.createElement(ye.Z,null),r.createElement(ve.Z,null)))}}]);
//# sourceMappingURL=component---src-pages-careers-java-architect-js-a2dc68c3df68dc513bc0.js.map