"use strict";(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[596],{9726:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var l=a(7294),n=a(7519),c=a(8387),i=a(418),r=a(1747),m=a(152),s=a(6928),o=a(6122),d=a(9959),u=a(7267),E=a(2956),p=a(3341),g=a(2848),b=a(4586),h=a(6271),v=a(5335);var N=function(){const{0:e,1:t}=(0,l.useState)(!1),{0:a,1:n}=(0,l.useState)(!1),{0:c,1:N}=(0,l.useState)(""),{0:f,1:k}=(0,l.useState)(null),{0:y,1:Z}=(0,l.useState)({name:"",email:"",mobile:"",message:""}),x=e=>{Z({...y,[e.target.name]:e.target.value})};return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"applyJob"},l.createElement("div",{className:"job"},l.createElement("div",{className:"details"},l.createElement("p",{id:"detailsText"},"BACKEND LEAD"),l.createElement("p",{id:"experiancerText"},l.createElement("img",{src:i.Z,alt:"experiance"})," 7+ Years Experience")),l.createElement("div",{className:"applyNow"},l.createElement("button",{className:"applyNowButton","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:()=>t(!0)},"Apply Now"),l.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},l.createElement("div",{class:"modal-content"},l.createElement("div",{class:"modal-header"},l.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Modal title"),l.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.createElement("span",{"aria-hidden":"true"},"×"))),l.createElement("div",{class:"modal-body"},"..."),l.createElement("div",{class:"modal-footer"},l.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.createElement("button",{type:"button",class:"btn btn-primary"},"Save changes"))))),l.createElement("div",{className:"socialmediaIconsCareers"},l.createElement("p",{id:"shareitOn"},"share it on"),l.createElement("div",{className:"icons"},l.createElement("img",{src:m.Z,alt:"fb-icon"}),l.createElement("img",{src:s.Z,alt:"twitter-icon"}),l.createElement("img",{src:o.Z,alt:"linkedin-icon"}),l.createElement("img",{src:d.Z,alt:"insta-icon"}))))),l.createElement("div",{className:"descripition"},l.createElement("div",{className:"jobDescripition"},l.createElement("p",{id:"jobDescripitionTitle"},"Job Descripition"),l.createElement("ul",null,l.createElement("li",null," ",l.createElement("img",{src:r.Z,alt:"tickImg"})," 7+ years of experience in creating large-scale data pipeline."),l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"}),"Extensive Python, API (Flask) development experience."),l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"})," Proficient in SQL."),l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"}),"Experience with Web services, Github, Application Security, Kubernetes, Docker, Helm."),l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"})," Experience with AWS."),l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"}),"Experience working for a startup and/or SaaS organization."))),l.createElement("div",{className:"skillsRequired"},l.createElement("p",{id:"skillsRequiredTitle"},"skills Required"),l.createElement("ul",null,l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Knowledge on SAP.")),l.createElement("li",null,l.createElement("img",{src:r.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"UNIX/Linux basic command line experience.")))),l.createElement("button",{className:"applyNowButton1",onClick:()=>t(!0)},"Apply Now")))),l.createElement(u.Z,{trigger:e,setTrigger:t},l.createElement("form",{onSubmit:async e=>{e.preventDefault(),n(!0);const t={to:p.Z,message:" Name: "+y.name+"  <br> Email: "+y.email+"  <br> Mobile No: "+y.mobile+"  <br> Message: "+y.message+" <br> resume: "+c,subject:"Venzo Careers Form"},a=await E.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",t);console.log(a),Z({name:"",email:"",mobile:"",message:""})}},l.createElement("p",{id:"joinourteamText"},"Join our team"),l.createElement("input",{className:"Fname",name:"name",value:y.name,onChange:x,type:"text",placeholder:"Name*",required:!0}),l.createElement("input",{className:"Femail",name:"email",value:y.email,onChange:x,type:"text",placeholder:"Email*",required:!0}),l.createElement("input",{className:"Fphone",name:"mobile",value:y.mobile,onChange:x,type:"phone",placeholder:"Mobile number*",required:!0}),l.createElement("input",{className:"file",type:"file",accept:".pdf , .doc",placeholder:"choose file",onChange:e=>{console.log("hihh",c,"image",f),k(e.target.files[0]),console.log(e.target.files[0]);const t=(0,h.iH)(g.tO,"venzofile/"+(e.target.files[0].name+(0,b.Z)()));(0,h.KV)(t,e.target.files[0]).then((e=>{(0,h.Jt)(e.ref).then((e=>{console.log(e),N(e)}))}))}}),l.createElement("textarea",{className:"Fmessage",name:"message",value:y.message,onChange:x,placeholder:"Message"}),l.createElement("button",{type:"submit",className:"Fbutton"},"Submit"))),l.createElement(u.Z,{trigger:a,setTrigger:n,id:"thankPop"},l.createElement("div",{className:"thankPop"},l.createElement("p",{className:"subSucss"},"Submitted successfully"),l.createElement("img",{src:v.Z,alt:"success",className:"succImg"}),l.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",l.createElement("br",null)," our team will reach you."))))},f=a(8729),k=a(2158);var y=()=>((0,l.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),l.createElement("div",{className:"blockchainbody"},l.createElement(n.Z,{flag:"header2"}),l.createElement(c.Z,null),l.createElement(N,null),l.createElement(f.Z,null),l.createElement(k.Z,null)))}}]);
//# sourceMappingURL=component---src-pages-careers-backend-lead-js-960fc93b0da346230e29.js.map