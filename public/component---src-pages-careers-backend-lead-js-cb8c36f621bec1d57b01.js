"use strict";(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[596],{8729:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(7294),l=t(2956),A=t(7267),s=t(3341),c=t(5335);var i=function(){const{0:e,1:a}=(0,n.useState)(!1),{0:t,1:i}=(0,n.useState)({name:"",email:"",mobile:"",message:""}),m=e=>{i({...t,[e.target.name]:e.target.value})};return n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("div",{className:"discussion"},n.createElement("div",{className:"gotanIdea"},n.createElement("p",{id:"gotanIdeaTitle"},"Got an idea?",n.createElement("br",null),"Let's get in touch!"),n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAADCAYAAAAEC4j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBZZJbcsMwCEXBsvrd6VKzgTTLzkyBci/IjzaxLSSeOqDvx+dTZXuGD3GfGrEL5PA997uIj/DIc9u4SurdRuna1nMV21O/a/mV//9YbWMjUqc4W3bwtxgKe4nJHKlru3GJj/OZ8mAu7qPjdCz6nmfRuYU+jFO+vAv8RfOfCwSBINznqqo8x0MdP22Tv299P74CQY9gTLTrtaCCi0vy4pRvALyAAAx9E4AsuYEWePg1XJtZYMYgqLKVvpwAkA/1A8KlIRcAJ8B5glv7rvnme21kxkctEornIHJA0gYYDbRsTqhCwrplwBdhsGuzC5tMUhdNOD4ruXwA2nq7kL6IYVrgV9Nj3k1If9iZFWi3yfiA4D093rbOpszVQPidk4V6rJsL+GvaMK2Qf6peX7UeA8B8HJIF1NAc31Knt3H6M11rFBcsTqE2OLwu8voFL86xEOQvA8AAAAAASUVORK5CYII=",alt:"horizantalLine"}),n.createElement("p",{id:"gotanIdeaText"},"Let’s discuss your project & find out what we can do to provide value.")),n.createElement("div",{className:"enquiryinDiscussion"},n.createElement("div",{className:"contactformCareers"},n.createElement("p",{className:"formTitle"},"Let’s catch the initial spark!"),n.createElement("form",{onSubmit:async function(e){e.preventDefault(),a(!0);const n={to:s.eK,message:" Name: "+t.name+"  <br> Email: "+t.email+"  <br> Mobile No: "+t.mobile+"  <br> Message: "+t.message,subject:"Venzo Careers Form"},A=await l.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",n);console.log(A),i({name:"",email:"",mobile:"",message:""})}},n.createElement("input",{className:"Fname",name:"name",value:t.name,onChange:m,type:"text",placeholder:"Name*",required:!0}),n.createElement("input",{className:"Femail1",name:"email",value:t.email,onChange:m,type:"text",placeholder:"Email*",required:!0}),n.createElement("input",{className:"Fphone",name:"mobile",value:t.mobile,onChange:m,type:"phone",placeholder:"Mobile number*",required:!0}),n.createElement("textarea",{className:"Fmessage",name:"message",value:t.message,onChange:m,placeholder:"Message"}),n.createElement("button",{type:"submit",className:"Fbutton1"},"Submit")))))),n.createElement(A.Z,{trigger:e,setTrigger:a,id:"thankPop"},n.createElement("div",{className:"thankPop"},n.createElement("p",{className:"subSucss"},"Submitted successfully"),n.createElement("img",{src:c.Z,alt:"success",className:"succImg"}),n.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",n.createElement("br",null)," our team will reach you."))))}},8387:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7294),l=t.p+"static/careers2bg2-2d37528a1f6c375937b9afa4a54a50a5.png",A=t.p+"static/careers2imgRes-47604cc62c9afb83ef0fb263247690bf.png";var s=function(){return n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("div",{className:"jobDetails"},n.createElement("img",{className:"careers2bg",src:l,alt:"backgroundImg"}),n.createElement("img",{className:"careers2bgRes",src:A,alt:"backgroundImgRes"}),n.createElement("p",{id:"jobDetailsText"},"Job Details"))))}},9726:function(e,a,t){t.r(a),t.d(a,{default:function(){return I}});var n=t(7294),l=t(7519),A=t(8387),s=t(418),c=t(1747),i=t(152),m=t(6928),r=t(6122),o=t(9959),u=t(7267),E=t(2956),g=t(3341),d=t(2848),p=t(4586),b=t(6271),v=t(5335);var C=function(){const{0:e,1:a}=(0,n.useState)(!1),{0:t,1:l}=(0,n.useState)(!1),{0:A,1:C}=(0,n.useState)(""),{0:N,1:h}=(0,n.useState)(null),{0:B,1:I}=(0,n.useState)({name:"",email:"",mobile:"",message:""}),w=e=>{I({...B,[e.target.name]:e.target.value})};return n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("div",{className:"applyJob"},n.createElement("div",{className:"job"},n.createElement("div",{className:"details"},n.createElement("p",{id:"detailsText"},"BACKEND LEAD"),n.createElement("p",{id:"experiancerText"},n.createElement("img",{src:s.Z,alt:"experiance"})," 7+ Years Experience")),n.createElement("div",{className:"applyNow"},n.createElement("button",{className:"applyNowButton","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:()=>a(!0)},"Apply Now"),n.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},n.createElement("div",{class:"modal-content"},n.createElement("div",{class:"modal-header"},n.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Modal title"),n.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.createElement("span",{"aria-hidden":"true"},"×"))),n.createElement("div",{class:"modal-body"},"..."),n.createElement("div",{class:"modal-footer"},n.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),n.createElement("button",{type:"button",class:"btn btn-primary"},"Save changes"))))),n.createElement("div",{className:"socialmediaIconsCareers"},n.createElement("p",{id:"shareitOn"},"share it on"),n.createElement("div",{className:"icons"},n.createElement("img",{src:i.Z,alt:"fb-icon"}),n.createElement("img",{src:m.Z,alt:"twitter-icon"}),n.createElement("img",{src:r.Z,alt:"linkedin-icon"}),n.createElement("img",{src:o.Z,alt:"insta-icon"}))))),n.createElement("div",{className:"descripition"},n.createElement("div",{className:"jobDescripition"},n.createElement("p",{id:"jobDescripitionTitle"},"Job Descripition"),n.createElement("ul",null,n.createElement("li",null," ",n.createElement("img",{src:c.Z,alt:"tickImg"})," 7+ years of experience in creating large-scale data pipeline."),n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"}),"Extensive Python, API (Flask) development experience."),n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"})," Proficient in SQL."),n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"}),"Experience with Web services, Github, Application Security, Kubernetes, Docker, Helm."),n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"})," Experience with AWS."),n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"}),"Experience working for a startup and/or SaaS organization."))),n.createElement("div",{className:"skillsRequired"},n.createElement("p",{id:"skillsRequiredTitle"},"skills Required"),n.createElement("ul",null,n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"}),n.createElement("p",{id:"SkillPara"},"Knowledge on SAP.")),n.createElement("li",null,n.createElement("img",{src:c.Z,alt:"tickImg"}),n.createElement("p",{id:"SkillPara"},"UNIX/Linux basic command line experience.")))),n.createElement("button",{className:"applyNowButton1",onClick:()=>a(!0)},"Apply Now")))),n.createElement(u.Z,{trigger:e,setTrigger:a},n.createElement("form",{onSubmit:async e=>{e.preventDefault(),l(!0);const a={to:g.eK,message:" Name: "+B.name+"  <br> Email: "+B.email+"  <br> Mobile No: "+B.mobile+"  <br> Message: "+B.message+" <br> Resume: "+A,subject:"Venzo Careers Form"},t=await E.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",a);console.log(t),I({name:"",email:"",mobile:"",message:""})}},n.createElement("p",{id:"joinourteamText"},"Join our team"),n.createElement("input",{className:"Fname",name:"name",value:B.name,onChange:w,type:"text",placeholder:"Name*",required:!0}),n.createElement("input",{className:"Femail",name:"email",value:B.email,onChange:w,type:"text",placeholder:"Email*",required:!0}),n.createElement("input",{className:"Fphone",name:"mobile",value:B.mobile,onChange:w,type:"phone",placeholder:"Mobile number*",required:!0}),n.createElement("input",{className:"file",type:"file",accept:".pdf , .doc , .docx",placeholder:"choose file",onChange:e=>{console.log("hihh",A,"image",N),h(e.target.files[0]),console.log(e.target.files[0]);const a=(0,b.iH)(d.tO,"venzofile/"+(e.target.files[0].name+(0,p.Z)()));(0,b.KV)(a,e.target.files[0]).then((e=>{(0,b.Jt)(e.ref).then((e=>{console.log(e),C(e)}))}))}}),n.createElement("textarea",{className:"Fmessage",name:"message",value:B.message,onChange:w,placeholder:"Message"}),n.createElement("button",{type:"submit",className:"Fbutton"},"Submit"))),n.createElement(u.Z,{trigger:t,setTrigger:l,id:"thankPop"},n.createElement("div",{className:"thankPop"},n.createElement("p",{className:"subSucss"},"Submitted successfully"),n.createElement("img",{src:v.Z,alt:"success",className:"succImg"}),n.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",n.createElement("br",null)," our team will reach you."))))},N=t(8729),h=t(2158),B=t(7468);var I=()=>((0,n.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),n.createElement("div",{className:"blockchainbody"},n.createElement(l.Z,{flag:"header2"}),n.createElement(B.H,{title:"Job Openings - Backend Lead",description:"7+ years of experience in creating large-scale data pipeline."}),n.createElement(A.Z,null),n.createElement(C,null),n.createElement(N.Z,null),n.createElement(h.Z,null)))},418:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBvZRbCsIwEEVn0i7Afx8ouC9B3IA7qDtwARJwX5UW8d9uIB0TaErRSVObtOengcvM3N48EBg2t+JQC3XVywWnE0CZ1En2PO3u35rgCpRQmauZAQG2zcAfUleB+b6Oe+T0lczJNZB1GAL68hqKzRWXMi/sL0agSn15DcXmGj1D4ZrWTIR/9fi73OdkDNEdtjelu8vWteemsDXTOeziO5N9+jznMARcy8ebgIIehrYZYCmA6GwWEIjuUelelw9xFks7qMGs+QAAAABJRU5ErkJggg=="},152:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBpVMtF4JAEFyRYCQSiUaikWAwEo3+LCM/gWjkJxCJRIOBSHQH9nS5D33ovDcPbrmdnds9NuRixzwwM2Yq65F5Z7bCBTbWGsmFJIYwMCt5TtiqjwXzyIzpM4xTOHtoJwieAkmw39F8JAicJY71FY5QNREXPjTCkKOSWUFkT+Ee6CbmUlAjA41ICIPaXAb2pBHNY/wHKZzYR0HDblYMk6hlrzOAmN5d1yKtRxixjFyMkVTRgGAuNEg8sZdLOOmsCmZ0pBwlFG5sH8nGgX7DlAsRnLem9UDhBi+RsbRSaPETxpa1nnkh92ZqdFJwpC/IaHkfzP/lvZhPYVE1iW/3zuoAAAAASUVORK5CYII="},9959:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgBjZOhtsIwDIaz3YnJysnKySsQk5NIHmESyaMgkTwCEjmJQCCRkxWISiTN2V8WShj85+SkXdIvabZlNKkM1gSzwSrsP8nB+mCeH2QC0gEwIOk+A6pQkLXn/AhaBfsPdgh2oe8y8B38NsfCAvALpA62gT8Aagsar8Ubp1RtcKBE/EjjTBy8j7kRxLonkA6xK2IMXKOLXVq0EBsJauF3omoP+FLAn8rFuhSeBz8ISCx0RLymRDm9KwIHJeaSHBXkhefqVgHVCVAFGbE+0Xi9Vjyz2Hut24J09TS2zwcbdGgA2WsHCpqmn96bB8tvR35HF3p9WxW8jyCHA6cENpA+9CgL7/5EZwtUvtH8Dxu75/wlujxnItjSNFz5Bo2yNqJj/tJ9llTiBL5iRfPijq8krv0ADAhMBxH7Yi0AAAAASUVORK5CYII="},6122:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB3ZIhEsIwEEX/NBUIRCQCgeAAPUIPgEAiORbHqazkAIjICkRlJPuHLd3pkJmkON7Mn/Sn07/bTRwAL7qKTqKN6IFCnOgi2qvnOoieKKDS6j/BkN74UTtZBeeyw0qcBhxEWw0aFsFefVR/xDwC7qHWgLMJvuvaihqzNxWzdFSNPJrEfisKFfJh6z3mTj8FcjshN7xPj9hf87mdBBNA7DXIDhkXPlpTMpMkfxbCI+akuy/vQuIZ+s10X+ILZaIfeH7Am18AAAAASUVORK5CYII="},1747:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBpVU9dtNAEJ4RDY9KdsWjkk+AbA6A6ehsn8D2CWJKqsgdHeYEUk6A3dGRXIDoBnEHVaIOKPDwzWqUyLIs28m8t9JKu/PNN3+7TA3ix6Hved6ZiPTxGdhQyTBS/F/hvcym6XofBu8BDpg5xrRPRwgTJxvZzOsMeTvgF2/OAH5t4BmLfAHTEUbnbnLNOjDv6j9MLlRHSCaqA2KzXeNb4L1zKEWmtMRjClYZNYh6C5aRMI8dIHN0O/4x3zHgmMtm4cBFPgB4QScIDEUAP6/qc8HCwuLDg/ntNI3oEaIhAs5nTDMNo+bE5cAjjnQdYUkeC66Ss+alI5oXCbGxvzHXOk0ld6QXvuH5wGupB0MHDvangiu5VtK90VHyQsPjqgvgMw/WBpRbWJ2AnTPNwxHULF86SOa36kFoP9d0gjB7MUrkteqB8bvKcmpvLWHydQbX0grDiY468HbSQ6XIsACvhrb0HXi0lyHHOtpovi3D+Ea+tGM11qNDeVMDa2MclBegPLd3VBjZ6nSRadXrexJxWIQ9uzdAD7kgczPSjiyMoFK+l8C1U5e0XwKjmXrYfGWu9Ku7tHGUqX26de30Q8cIGjcvfVQmW2PcUR7TTt3hpsl2OTniGKk2rvup7mNIK+l9pSdKO+4miuUnYZx7k1vSMGRaenVn+rHiKoxp7LCEXJE808ef1a/s+eDlX7j2XseL0Sv6vfx5dRq4HvfyyQh/RKi/6Xz7wimd6U3XYEXHd12dNx5V88Q1CjMz4heGcBGt/qGci7rXRML1UMjrC8vY9mqR7FTY3ku/fA0eEnT2pV2v6+oaNyladw+xawBPwsIrQK5FG1RI87Rourf/A3q9eAXaNgWeAAAAAElFTkSuQmCC"},6928:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBlVOhEoMwDA1jAjGBmEBWTCAnJib3KXwaHzCBmJhETEwiJyaQiAnEBHLJ9eXW60GBd/cuTQivaZpG9EfCHCiMlHlh5shvmTWsQU4bYSFJR2YVEBbBAtZHD1vKegMng/DUT4QK08CGPQojFR0c8WJCIKMwOrKtoBiBD/PE3JLtlcGue4hL/MDcBUSvWtwWARFqmGcnKYHwaujxc09wLaTC3hdtaH6cQmhdx72o0t1tJV6uEzvrL9k+prBLIYVUbmDjJajoGtR+IPb8N6yhZXgyH3Oigpbsxen7noLk3MY+6NvXPupzzSmMO6ochQ6/ITvohqYhEyK3XNPMlESeLxVnoB5dBDpw0Sz/AC5NME0CFLhmAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-careers-backend-lead-js-cb8c36f621bec1d57b01.js.map