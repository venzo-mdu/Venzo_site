"use strict";(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[803],{8729:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(2956),l=a(7267),i=a(3341),s=a(5335);var o=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:o}=(0,n.useState)({name:"",email:"",mobile:"",message:""}),c=e=>{o({...a,[e.target.name]:e.target.value})};return n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("div",{className:"discussion"},n.createElement("div",{className:"gotanIdea"},n.createElement("p",{id:"gotanIdeaTitle"},"Got an idea?",n.createElement("br",null),"Let's get in touch!"),n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAADCAYAAAAEC4j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBZZJbcsMwCEXBsvrd6VKzgTTLzkyBci/IjzaxLSSeOqDvx+dTZXuGD3GfGrEL5PA997uIj/DIc9u4SurdRuna1nMV21O/a/mV//9YbWMjUqc4W3bwtxgKe4nJHKlru3GJj/OZ8mAu7qPjdCz6nmfRuYU+jFO+vAv8RfOfCwSBINznqqo8x0MdP22Tv299P74CQY9gTLTrtaCCi0vy4pRvALyAAAx9E4AsuYEWePg1XJtZYMYgqLKVvpwAkA/1A8KlIRcAJ8B5glv7rvnme21kxkctEornIHJA0gYYDbRsTqhCwrplwBdhsGuzC5tMUhdNOD4ruXwA2nq7kL6IYVrgV9Nj3k1If9iZFWi3yfiA4D093rbOpszVQPidk4V6rJsL+GvaMK2Qf6peX7UeA8B8HJIF1NAc31Knt3H6M11rFBcsTqE2OLwu8voFL86xEOQvA8AAAAAASUVORK5CYII=",alt:"horizantalLine"}),n.createElement("p",{id:"gotanIdeaText"},"Let’s discuss your project & find out what we can do to provide value.")),n.createElement("div",{className:"enquiryinDiscussion"},n.createElement("div",{className:"contactformCareers"},n.createElement("p",{className:"formTitle"},"Let’s catch the initial spark!"),n.createElement("form",{onSubmit:async function(e){e.preventDefault(),t(!0);const n={to:i.eK,message:" Name: "+a.name+"  <br> Email: "+a.email+"  <br> Mobile No: "+a.mobile+"  <br> Message: "+a.message,subject:"Venzo Careers Form"},l=await r.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",n);console.log(l),o({name:"",email:"",mobile:"",message:""})}},n.createElement("input",{className:"Fname",name:"name",value:a.name,onChange:c,type:"text",placeholder:"Name*",required:!0}),n.createElement("input",{className:"Femail1",name:"email",value:a.email,onChange:c,type:"text",placeholder:"Email*",required:!0}),n.createElement("input",{className:"Fphone",name:"mobile",value:a.mobile,onChange:c,type:"phone",placeholder:"Mobile number*",required:!0}),n.createElement("textarea",{className:"Fmessage",name:"message",value:a.message,onChange:c,placeholder:"Message"}),n.createElement("button",{type:"submit",className:"Fbutton1"},"Submit")))))),n.createElement(l.Z,{trigger:e,setTrigger:t,id:"thankPop"},n.createElement("div",{className:"thankPop"},n.createElement("p",{className:"subSucss"},"Submitted successfully"),n.createElement("img",{src:s.Z,alt:"success",className:"succImg"}),n.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",n.createElement("br",null)," our team will reach you."))))}},8387:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a.p+"static/careers2bg2-2d37528a1f6c375937b9afa4a54a50a5.png",l=a.p+"static/careers2imgRes-47604cc62c9afb83ef0fb263247690bf.png";var i=function(){return n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("div",{className:"jobDetails"},n.createElement("img",{className:"careers2bg",src:r,alt:"backgroundImg"}),n.createElement("img",{className:"careers2bgRes",src:l,alt:"backgroundImgRes"}),n.createElement("p",{id:"jobDetailsText"},"Job Details"))))}},2003:function(e,t,a){a.r(t),a.d(t,{default:function(){return we}});var n=a(7294),r=a(7519),l=a(8387),i=a(418),s=a(1747),o=a(152),c=a(6928),m=a(6122),A=a(9959),d=a(7267),u=a(2956),p=a(3341),g=a(5335),E=a(2848),f=a(4586),b=a(6271);let h={data:""},v=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||h,y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,C=(e,t)=>{let a="",n="",r="";for(let l in e){let i=e[l];"@"==l[0]?"i"==l[1]?a=l+" "+i+";":n+="f"==l[1]?C(i,l):l+"{"+C(i,"k"==l[1]?"":t)+"}":"object"==typeof i?n+=C(i,t?t.replace(/([^,])+/g,(e=>l.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):l):null!=i&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=C.p?C.p(l,i):l+":"+i+";")}return a+(t&&r?t+"{"+r+"}":r)+n},I={},N=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+N(e[a]);return t}return e},B=(e,t,a,n,r)=>{let l=N(e),i=I[l]||(I[l]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(l));if(!I[i]){let t=l!==e?e:(e=>{let t,a,n=[{}];for(;t=y.exec(e.replace(w,""));)t[4]?n.shift():t[3]?(a=t[3].replace(x," ").trim(),n.unshift(n[0][a]=n[0][a]||{})):n[0][t[1]]=t[2].replace(x," ").trim();return n[0]})(e);I[i]=C(r?{["@keyframes "+i]:t}:t,a?"":"."+i)}let s=a&&I.g?I.g:null;return a&&(I.g=I[i]),((e,t,a,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(I[i],t,n,s),i},k=(e,t,a)=>e.reduce(((e,n,r)=>{let l=t[r];if(l&&l.call){let e=l(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;l=t?"."+t:e&&"object"==typeof e?e.props?"":C(e,""):!1===e?"":e}return e+n+(null==l?"":l)}),"");function R(e){let t=this||{},a=e.call?e(t.p):e;return B(a.unshift?a.raw?k(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,v(t.target),t.g,t.o,t.k)}R.bind({g:1});let S,M,T,j=R.bind({k:1});function U(e,t){let a=this||{};return function(){let n=arguments;function r(l,i){let s=Object.assign({},l),o=s.className||r.className;a.p=Object.assign({theme:M&&M()},s),a.o=/ *go\d+/.test(o),s.className=R.apply(a,n)+(o?" "+o:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),T&&c[0]&&T(s),S(c,s)}return t?t(r):r}}var D=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,H=(()=>{let e=0;return()=>(++e).toString()})(),Z=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),O=new Map,X=e=>{if(O.has(e))return;let t=setTimeout((()=>{O.delete(e),z({type:4,toastId:e})}),1e3);O.set(e,t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=O.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:n}=t;return n?X(n):e.toasts.forEach((e=>{X(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===n||void 0===n?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},Y=[],Q={toasts:[],pausedAt:void 0},z=e=>{Q=P(Q,e),Y.forEach((e=>{e(Q)}))},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=e=>(t,a)=>{let n=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||H()}))(t,e,a);return z({type:2,toast:n}),n.id},K=(e,t)=>L("blank")(e,t);K.error=L("error"),K.success=L("success"),K.loading=L("loading"),K.custom=L("custom"),K.dismiss=e=>{z({type:3,toastId:e})},K.remove=e=>z({type:4,toastId:e}),K.promise=(e,t,a)=>{let n=K.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(K.success(D(t.success,e),{id:n,...a,...null==a?void 0:a.success}),e))).catch((e=>{K.error(D(t.error,e),{id:n,...a,...null==a?void 0:a.error})})),e};var J=(e,t)=>{z({type:1,toast:{id:e,height:t}})},V=()=>{z({type:5,time:Date.now()})},q=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,n.useState)(Q);(0,n.useEffect)((()=>(Y.push(a),()=>{let e=Y.indexOf(a);e>-1&&Y.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var a,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}}));return{...t,toasts:r}})(e);(0,n.useEffect)((()=>{if(a)return;let e=Date.now(),n=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>K.dismiss(t.id)),a);t.visible&&K.dismiss(t.id)}));return()=>{n.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let r=(0,n.useCallback)((()=>{a&&z({type:6,time:Date.now()})}),[a]),l=(0,n.useCallback)(((e,a)=>{let{reverseOrder:n=!1,gutter:r=8,defaultPosition:l}=a||{},i=t.filter((t=>(t.position||l)===(e.position||l)&&t.height)),s=i.findIndex((t=>t.id===e.id)),o=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...n?[o+1]:[0,o]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return{toasts:t,handlers:{updateHeight:J,startPause:V,endPause:r,calculateOffset:l}}},W=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=U("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ee=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,te=U("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ee} 1s linear infinite;
`,ae=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ne=j`
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
}`,re=U("div")`
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
    animation: ${ne} 0.2s ease-out forwards;
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
`,le=U("div")`
  position: absolute;
`,ie=U("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,se=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=U("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${se} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ce=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(oe,null,t):t:"blank"===a?null:n.createElement(ie,null,n.createElement(te,{...r}),"loading"!==a&&n.createElement(le,null,"error"===a?n.createElement(_,{...r}):n.createElement(re,{...r})))},me=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Ae=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,de=U("div")`
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
`,ue=U("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,pe=n.memo((({toast:e,position:t,style:a,children:r})=>{let l=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[n,r]=Z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[me(a),Ae(a)];return{animation:t?`${j(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(ce,{toast:e}),s=n.createElement(ue,{...e.ariaProps},D(e.message,e));return n.createElement(de,{className:e.className,style:{...l,...a,...e.style}},"function"==typeof r?r({icon:i,message:s}):n.createElement(n.Fragment,null,i,s))}));!function(e,t,a,n){C.p=t,S=e,M=a,T=n}(n.createElement);var ge=({id:e,className:t,style:a,onHeightUpdate:r,children:l})=>{let i=n.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;r(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return n.createElement("div",{ref:i,className:t,style:a},l)},Ee=R`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,fe=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:l,containerStyle:i,containerClassName:s})=>{let{toasts:o,handlers:c}=q(a);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map((a=>{let i=a.position||t,s=((e,t)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...n,...r}})(i,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return n.createElement(ge,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?Ee:"",style:s},"custom"===a.type?D(a.message,a):l?l(a):n.createElement(pe,{toast:a,position:i}))})))};var be=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:r}=(0,n.useState)(!1),{0:l,1:h}=(0,n.useState)(""),{0:v,1:y}=(0,n.useState)(null),{0:w,1:x}=(0,n.useState)({name:"",email:"",mobile:"",message:""}),C=e=>{x({...w,[e.target.name]:e.target.value})};return n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("div",{className:"applyJob"},n.createElement("div",{className:"job"},n.createElement("div",{className:"details"},n.createElement("p",{id:"detailsText"},"BPM / JAVA ARCHITECT"),n.createElement("p",{id:"experiancerText"},n.createElement("img",{src:i.Z,alt:"experiance"}),"  8-10 Years Experience")),n.createElement("div",{className:"applyNow"},n.createElement("button",{className:"applyNowButton","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:()=>t(!0)},"Apply Now"),n.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},n.createElement("div",{class:"modal-content"},n.createElement("div",{class:"modal-header"},n.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Modal title"),n.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.createElement("span",{"aria-hidden":"true"},"×"))),n.createElement("div",{class:"modal-body"},"..."),n.createElement("div",{class:"modal-footer"},n.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),n.createElement("button",{type:"button",class:"btn btn-primary"},"Save changes"))))),n.createElement("div",{className:"socialmediaIconsCareers"},n.createElement("p",{id:"shareitOn"},"share it on"),n.createElement("div",{className:"icons"},n.createElement("img",{src:o.Z,alt:"fb-icon"}),n.createElement("img",{src:c.Z,alt:"twitter-icon"}),n.createElement("img",{src:m.Z,alt:"linkedin-icon"}),n.createElement("img",{src:A.Z,alt:"insta-icon"}))))),n.createElement("div",{className:"descripition"},n.createElement("div",{className:"jobDescripition"},n.createElement("p",{id:"jobDescripitionTitle"},"Job Descripition"),n.createElement("ul",null,n.createElement("li",null," ",n.createElement("img",{src:s.Z,alt:"tickImg"})," At least 8-10 years of IT experience in Java and BPM technologies."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"})," At least 3 years of BPM experience actively contributing with large-scale BPM projects."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),"Understanding requirements from business-team and model workflow."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"})," Creating BPMN processes"),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),"Integrating approval into corporate portal using apis for seamless UI experiences."),n.createElement("li",null," ",n.createElement("img",{src:s.Z,alt:"tickImg"})," Has clear idea about identity and Access management to a BPM application.."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),"Strong knowledge on integrate principles to integrate BPM with other systems."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),"At least 3 years of spring boot experience involving REST, SpringData, SpringIntegration."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"})," Extensive hands-on Service Oriented architecture."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),"Comfortable with microservices/cloud architecture."),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),"Ability to work with team."))),n.createElement("div",{className:"skillsRequired"},n.createElement("p",{id:"skillsRequiredTitle"},"skills Required"),n.createElement("ul",null,n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),n.createElement("p",{id:"SkillPara"},"Experience in Kubernetes")),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),n.createElement("p",{id:"SkillPara"},"Deep knowledge in database.")),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),n.createElement("p",{id:"SkillPara"},"Working knowledge on AWS or other cloud platforms.")),n.createElement("li",null,n.createElement("img",{src:s.Z,alt:"tickImg"}),n.createElement("p",{id:"SkillPara"},"Administration experience with both offline and online deployments.")))),n.createElement("button",{className:"applyNowButton1",onClick:()=>t(!0)},"Apply Now")))),n.createElement(d.Z,{trigger:e,setTrigger:t},n.createElement("form",{onSubmit:async e=>{e.preventDefault(),r(!0);const t={to:p.eK,message:" Name: "+w.name+"  <br> Email: "+w.email+"  <br> Mobile No: "+w.mobile+"  <br> Message: "+w.message+" <br> Resume: "+l,subject:"Venzo Careers Form"},a=await u.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",t);console.log(a),x({name:"",email:"",mobile:"",message:""})}},n.createElement("p",{id:"joinourteamText"},"Join our team"),n.createElement("input",{className:"Fname",name:"name",value:w.name,onChange:C,type:"text",placeholder:"Name*",required:!0}),n.createElement("input",{className:"Femail",name:"email",value:w.email,onChange:C,type:"text",placeholder:"Email*",required:!0}),n.createElement("input",{className:"Fphone",name:"mobile",value:w.mobile,onChange:C,type:"phone",placeholder:"Mobile number*",required:!0}),n.createElement("input",{className:"file",type:"file",accept:".pdf , .doc , .docx",placeholder:"choose file",onChange:e=>{y(e.target.files[0]);const t=(0,b.iH)(E.tO,"venzofile/"+(e.target.files[0].name+(0,f.Z)()));(0,b.KV)(t,e.target.files[0]).then((e=>{(0,b.Jt)(e.ref).then((e=>{console.log(e),h(e)}))}))}}),n.createElement(fe,null),n.createElement("textarea",{className:"Fmessage",name:"message",value:w.message,onChange:C,placeholder:"Message"}),n.createElement("button",{type:"submit",className:"Fbutton"},"Submit"))),n.createElement(d.Z,{trigger:a,setTrigger:r,id:"thankPop"},n.createElement("div",{className:"thankPop"},n.createElement("p",{className:"subSucss"},"Submitted successfully"),n.createElement("img",{src:g.Z,alt:"success",className:"succImg"}),n.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",n.createElement("br",null)," our team will reach you."))))},he=a(8729),ve=a(2158),ye=a(7468);var we=()=>((0,n.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),n.createElement("div",{className:"blockchainbody"},n.createElement(r.Z,{flag:"header2"}),n.createElement(ye.H,{title:"Job Openings - BPM / Java Architect",description:"At least 8-10 years of IT experience in Java and BPM technologies."}),n.createElement(l.Z,null),n.createElement(be,null),n.createElement(he.Z,null),n.createElement(ve.Z,null)))},418:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBvZRbCsIwEEVn0i7Afx8ouC9B3IA7qDtwARJwX5UW8d9uIB0TaErRSVObtOengcvM3N48EBg2t+JQC3XVywWnE0CZ1En2PO3u35rgCpRQmauZAQG2zcAfUleB+b6Oe+T0lczJNZB1GAL68hqKzRWXMi/sL0agSn15DcXmGj1D4ZrWTIR/9fi73OdkDNEdtjelu8vWteemsDXTOeziO5N9+jznMARcy8ebgIIehrYZYCmA6GwWEIjuUelelw9xFks7qMGs+QAAAABJRU5ErkJggg=="},152:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBpVMtF4JAEFyRYCQSiUaikWAwEo3+LCM/gWjkJxCJRIOBSHQH9nS5D33ovDcPbrmdnds9NuRixzwwM2Yq65F5Z7bCBTbWGsmFJIYwMCt5TtiqjwXzyIzpM4xTOHtoJwieAkmw39F8JAicJY71FY5QNREXPjTCkKOSWUFkT+Ee6CbmUlAjA41ICIPaXAb2pBHNY/wHKZzYR0HDblYMk6hlrzOAmN5d1yKtRxixjFyMkVTRgGAuNEg8sZdLOOmsCmZ0pBwlFG5sH8nGgX7DlAsRnLem9UDhBi+RsbRSaPETxpa1nnkh92ZqdFJwpC/IaHkfzP/lvZhPYVE1iW/3zuoAAAAASUVORK5CYII="},9959:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgBjZOhtsIwDIaz3YnJysnKySsQk5NIHmESyaMgkTwCEjmJQCCRkxWISiTN2V8WShj85+SkXdIvabZlNKkM1gSzwSrsP8nB+mCeH2QC0gEwIOk+A6pQkLXn/AhaBfsPdgh2oe8y8B38NsfCAvALpA62gT8Aagsar8Ubp1RtcKBE/EjjTBy8j7kRxLonkA6xK2IMXKOLXVq0EBsJauF3omoP+FLAn8rFuhSeBz8ISCx0RLymRDm9KwIHJeaSHBXkhefqVgHVCVAFGbE+0Xi9Vjyz2Hut24J09TS2zwcbdGgA2WsHCpqmn96bB8tvR35HF3p9WxW8jyCHA6cENpA+9CgL7/5EZwtUvtH8Dxu75/wlujxnItjSNFz5Bo2yNqJj/tJ9llTiBL5iRfPijq8krv0ADAhMBxH7Yi0AAAAASUVORK5CYII="},6122:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB3ZIhEsIwEEX/NBUIRCQCgeAAPUIPgEAiORbHqazkAIjICkRlJPuHLd3pkJmkON7Mn/Sn07/bTRwAL7qKTqKN6IFCnOgi2qvnOoieKKDS6j/BkN74UTtZBeeyw0qcBhxEWw0aFsFefVR/xDwC7qHWgLMJvuvaihqzNxWzdFSNPJrEfisKFfJh6z3mTj8FcjshN7xPj9hf87mdBBNA7DXIDhkXPlpTMpMkfxbCI+akuy/vQuIZ+s10X+ILZaIfeH7Am18AAAAASUVORK5CYII="},1747:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBpVU9dtNAEJ4RDY9KdsWjkk+AbA6A6ehsn8D2CWJKqsgdHeYEUk6A3dGRXIDoBnEHVaIOKPDwzWqUyLIs28m8t9JKu/PNN3+7TA3ix6Hved6ZiPTxGdhQyTBS/F/hvcym6XofBu8BDpg5xrRPRwgTJxvZzOsMeTvgF2/OAH5t4BmLfAHTEUbnbnLNOjDv6j9MLlRHSCaqA2KzXeNb4L1zKEWmtMRjClYZNYh6C5aRMI8dIHN0O/4x3zHgmMtm4cBFPgB4QScIDEUAP6/qc8HCwuLDg/ntNI3oEaIhAs5nTDMNo+bE5cAjjnQdYUkeC66Ss+alI5oXCbGxvzHXOk0ld6QXvuH5wGupB0MHDvangiu5VtK90VHyQsPjqgvgMw/WBpRbWJ2AnTPNwxHULF86SOa36kFoP9d0gjB7MUrkteqB8bvKcmpvLWHydQbX0grDiY468HbSQ6XIsACvhrb0HXi0lyHHOtpovi3D+Ea+tGM11qNDeVMDa2MclBegPLd3VBjZ6nSRadXrexJxWIQ9uzdAD7kgczPSjiyMoFK+l8C1U5e0XwKjmXrYfGWu9Ku7tHGUqX26de30Q8cIGjcvfVQmW2PcUR7TTt3hpsl2OTniGKk2rvup7mNIK+l9pSdKO+4miuUnYZx7k1vSMGRaenVn+rHiKoxp7LCEXJE808ef1a/s+eDlX7j2XseL0Sv6vfx5dRq4HvfyyQh/RKi/6Xz7wimd6U3XYEXHd12dNx5V88Q1CjMz4heGcBGt/qGci7rXRML1UMjrC8vY9mqR7FTY3ku/fA0eEnT2pV2v6+oaNyladw+xawBPwsIrQK5FG1RI87Rourf/A3q9eAXaNgWeAAAAAElFTkSuQmCC"},6928:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBlVOhEoMwDA1jAjGBmEBWTCAnJib3KXwaHzCBmJhETEwiJyaQiAnEBHLJ9eXW60GBd/cuTQivaZpG9EfCHCiMlHlh5shvmTWsQU4bYSFJR2YVEBbBAtZHD1vKegMng/DUT4QK08CGPQojFR0c8WJCIKMwOrKtoBiBD/PE3JLtlcGue4hL/MDcBUSvWtwWARFqmGcnKYHwaujxc09wLaTC3hdtaH6cQmhdx72o0t1tJV6uEzvrL9k+prBLIYVUbmDjJajoGtR+IPb8N6yhZXgyH3Oigpbsxen7noLk3MY+6NvXPupzzSmMO6ochQ6/ITvohqYhEyK3XNPMlESeLxVnoB5dBDpw0Sz/AC5NME0CFLhmAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-careers-java-architect-js-0c065beb582b3dc1e5a3.js.map