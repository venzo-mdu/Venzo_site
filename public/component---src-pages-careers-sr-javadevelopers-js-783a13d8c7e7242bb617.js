"use strict";(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[873],{8729:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),n=a(2956),A=a(7267),i=a(3341),c=a(5335);var s=function(){const{0:e,1:t}=(0,l.useState)(!1),{0:a,1:s}=(0,l.useState)({name:"",email:"",mobile:"",message:""}),r=e=>{s({...a,[e.target.name]:e.target.value})};return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"discussion"},l.createElement("div",{className:"gotanIdea"},l.createElement("p",{id:"gotanIdeaTitle"},"Got an idea?",l.createElement("br",null),"Let's get in touch!"),l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAADCAYAAAAEC4j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBZZJbcsMwCEXBsvrd6VKzgTTLzkyBci/IjzaxLSSeOqDvx+dTZXuGD3GfGrEL5PA997uIj/DIc9u4SurdRuna1nMV21O/a/mV//9YbWMjUqc4W3bwtxgKe4nJHKlru3GJj/OZ8mAu7qPjdCz6nmfRuYU+jFO+vAv8RfOfCwSBINznqqo8x0MdP22Tv299P74CQY9gTLTrtaCCi0vy4pRvALyAAAx9E4AsuYEWePg1XJtZYMYgqLKVvpwAkA/1A8KlIRcAJ8B5glv7rvnme21kxkctEornIHJA0gYYDbRsTqhCwrplwBdhsGuzC5tMUhdNOD4ruXwA2nq7kL6IYVrgV9Nj3k1If9iZFWi3yfiA4D093rbOpszVQPidk4V6rJsL+GvaMK2Qf6peX7UeA8B8HJIF1NAc31Knt3H6M11rFBcsTqE2OLwu8voFL86xEOQvA8AAAAAASUVORK5CYII=",alt:"horizantalLine"}),l.createElement("p",{id:"gotanIdeaText"},"Let’s discuss your project & find out what we can do to provide value.")),l.createElement("div",{className:"enquiryinDiscussion"},l.createElement("div",{className:"contactformCareers"},l.createElement("p",{className:"formTitle"},"Let’s catch the initial spark!"),l.createElement("form",{onSubmit:async function(e){e.preventDefault(),t(!0);const l={to:i.eK,message:" Name: "+a.name+"  <br> Email: "+a.email+"  <br> Mobile No: "+a.mobile+"  <br> Message: "+a.message,subject:"Venzo Careers Form"},A=await n.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",l);console.log(A),s({name:"",email:"",mobile:"",message:""})}},l.createElement("input",{className:"Fname",name:"name",value:a.name,onChange:r,type:"text",placeholder:"Name*",required:!0}),l.createElement("input",{className:"Femail1",name:"email",value:a.email,onChange:r,type:"text",placeholder:"Email*",required:!0}),l.createElement("input",{className:"Fphone",name:"mobile",value:a.mobile,onChange:r,type:"phone",placeholder:"Mobile number*",required:!0}),l.createElement("textarea",{className:"Fmessage",name:"message",value:a.message,onChange:r,placeholder:"Message"}),l.createElement("button",{type:"submit",className:"Fbutton1"},"Submit")))))),l.createElement(A.Z,{trigger:e,setTrigger:t,id:"thankPop"},l.createElement("div",{className:"thankPop"},l.createElement("p",{className:"subSucss"},"Submitted successfully"),l.createElement("img",{src:c.Z,alt:"success",className:"succImg"}),l.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",l.createElement("br",null)," our team will reach you."))))}},8387:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a.p+"static/careers2bg2-2d37528a1f6c375937b9afa4a54a50a5.png",A=a.p+"static/careers2imgRes-47604cc62c9afb83ef0fb263247690bf.png";var i=function(){return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"jobDetails"},l.createElement("img",{className:"careers2bg",src:n,alt:"backgroundImg"}),l.createElement("img",{className:"careers2bgRes",src:A,alt:"backgroundImgRes"}),l.createElement("p",{id:"jobDetailsText"},"Job Details"))))}},3599:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var l=a(7294),n=a(7519),A=a(8387),i=a(418),c=a(1747),s=a(152),r=a(6928),m=a(6122),o=a(9959),g=a(7267),u=a(2956),E=a(3341),d=a(2848),p=a(4586),b=a(6271),h=a(5335);var v=function(){const{0:e,1:t}=(0,l.useState)(!1),{0:a,1:n}=(0,l.useState)(!1),{0:A,1:v}=(0,l.useState)(""),{0:C,1:w}=(0,l.useState)(null),{0:B,1:N}=(0,l.useState)({name:"",email:"",mobile:"",message:""}),S=e=>{N({...B,[e.target.name]:e.target.value})};return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"applyJob"},l.createElement("div",{className:"job"},l.createElement("div",{className:"details"},l.createElement("p",{id:"detailsText"},"SR. JAVA DEVELOPERS"),l.createElement("p",{id:"experiancerText"},l.createElement("img",{src:i.Z,alt:"experiance"})," 6 Years Experience")),l.createElement("div",{className:"applyNow"},l.createElement("button",{className:"applyNowButton","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:()=>t(!0)},"Apply Now"),l.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},l.createElement("div",{class:"modal-content"},l.createElement("div",{class:"modal-header"},l.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Modal title"),l.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.createElement("span",{"aria-hidden":"true"},"×"))),l.createElement("div",{class:"modal-body"},"..."),l.createElement("div",{class:"modal-footer"},l.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.createElement("button",{type:"button",class:"btn btn-primary"},"Save changes"))))),l.createElement("div",{className:"socialmediaIconsCareers"},l.createElement("p",{id:"shareitOn"},"share it on"),l.createElement("div",{className:"icons"},l.createElement("img",{src:s.Z,alt:"fb-icon"}),l.createElement("img",{src:r.Z,alt:"twitter-icon"}),l.createElement("img",{src:m.Z,alt:"linkedin-icon"}),l.createElement("img",{src:o.Z,alt:"insta-icon"}))))),l.createElement("div",{className:"descripition"},l.createElement("div",{className:"jobDescripition"},l.createElement("p",{id:"jobDescripitionTitle"},"Job Descripition"),l.createElement("ul",null,l.createElement("li",null," ",l.createElement("img",{src:c.Z,alt:"tickImg"}),"At least 6 years of IT experience in Java / Spring Boot technologies."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"})," Should have strong core java skills."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"})," Should have experience in Spring MVC / Spring Boot with Hibernate / JPA."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),"Should have experience in building REST web services with Spring MVC / Spring Boot."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),"Should have experience in building backend applications with JMS/messaging-services."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),"Strong knowledge on integrate principles to integrate BPM with other systems."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),"Should be able to work with Maven / Gradle."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),"Should have good Database skills – writing SQLs."))),l.createElement("div",{className:"skillsRequired"},l.createElement("p",{id:"skillsRequiredTitle"},"skills Required"),l.createElement("ul",null,l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Experience with Thymeleaf or template-engine.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Experience with Angular / React / Reactjs / Angularjs.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Experience with writing the JUnit / Mockito JS.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Experience in Kubernetes.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Deep knowledge in database.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Working knowledge on AWS or other cloud platforms.")))),l.createElement("button",{className:"applyNowButton1",onClick:()=>t(!0)},"Apply Now")))),l.createElement(g.Z,{trigger:e,setTrigger:t},l.createElement("form",{onSubmit:async e=>{e.preventDefault(),n(!0);const t={to:E.eK,message:" Name: "+B.name+"  <br> Email: "+B.email+"  <br> Mobile No: "+B.mobile+"  <br> Message: "+B.message+" <br> Resume: "+A,subject:"Venzo Careers Form"},a=await u.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",t);console.log(a),N({name:"",email:"",mobile:"",message:""})}},l.createElement("p",{id:"joinourteamText"},"Join our team"),l.createElement("input",{className:"Fname",name:"name",value:B.name,onChange:S,type:"text",placeholder:"Name*",required:!0}),l.createElement("input",{className:"Femail",name:"email",value:B.email,onChange:S,type:"text",placeholder:"Email*",required:!0}),l.createElement("input",{className:"Fphone",name:"mobile",value:B.mobile,onChange:S,type:"phone",placeholder:"Mobile number*",required:!0}),l.createElement("input",{className:"file",type:"file",accept:".pdf , .doc , .docx",placeholder:"choose file",onChange:e=>{console.log("hihh",A,"image",C),w(e.target.files[0]),console.log(e.target.files[0]);const t=(0,b.iH)(d.tO,"venzofile/"+(e.target.files[0].name+(0,p.Z)()));(0,b.KV)(t,e.target.files[0]).then((e=>{(0,b.Jt)(e.ref).then((e=>{console.log(e),v(e)}))}))}}),l.createElement("textarea",{className:"Fmessage",name:"message",value:B.message,onChange:S,placeholder:"Message"}),l.createElement("button",{type:"submit",className:"Fbutton"},"Submit"))),l.createElement(g.Z,{trigger:a,setTrigger:n,id:"thankPop"},l.createElement("div",{className:"thankPop"},l.createElement("p",{className:"subSucss"},"Submitted successfully"),l.createElement("img",{src:h.Z,alt:"success",className:"succImg"}),l.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",l.createElement("br",null)," our team will reach you."))))},C=a(8729),w=a(2158);var B=()=>((0,l.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),l.createElement("div",{className:"blockchainbody"},l.createElement(n.Z,{flag:"header2"}),l.createElement(A.Z,null),l.createElement(v,null),l.createElement(C.Z,null),l.createElement(w.Z,null)))},418:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBvZRbCsIwEEVn0i7Afx8ouC9B3IA7qDtwARJwX5UW8d9uIB0TaErRSVObtOengcvM3N48EBg2t+JQC3XVywWnE0CZ1En2PO3u35rgCpRQmauZAQG2zcAfUleB+b6Oe+T0lczJNZB1GAL68hqKzRWXMi/sL0agSn15DcXmGj1D4ZrWTIR/9fi73OdkDNEdtjelu8vWteemsDXTOeziO5N9+jznMARcy8ebgIIehrYZYCmA6GwWEIjuUelelw9xFks7qMGs+QAAAABJRU5ErkJggg=="},152:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBpVMtF4JAEFyRYCQSiUaikWAwEo3+LCM/gWjkJxCJRIOBSHQH9nS5D33ovDcPbrmdnds9NuRixzwwM2Yq65F5Z7bCBTbWGsmFJIYwMCt5TtiqjwXzyIzpM4xTOHtoJwieAkmw39F8JAicJY71FY5QNREXPjTCkKOSWUFkT+Ee6CbmUlAjA41ICIPaXAb2pBHNY/wHKZzYR0HDblYMk6hlrzOAmN5d1yKtRxixjFyMkVTRgGAuNEg8sZdLOOmsCmZ0pBwlFG5sH8nGgX7DlAsRnLem9UDhBi+RsbRSaPETxpa1nnkh92ZqdFJwpC/IaHkfzP/lvZhPYVE1iW/3zuoAAAAASUVORK5CYII="},9959:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgBjZOhtsIwDIaz3YnJysnKySsQk5NIHmESyaMgkTwCEjmJQCCRkxWISiTN2V8WShj85+SkXdIvabZlNKkM1gSzwSrsP8nB+mCeH2QC0gEwIOk+A6pQkLXn/AhaBfsPdgh2oe8y8B38NsfCAvALpA62gT8Aagsar8Ubp1RtcKBE/EjjTBy8j7kRxLonkA6xK2IMXKOLXVq0EBsJauF3omoP+FLAn8rFuhSeBz8ISCx0RLymRDm9KwIHJeaSHBXkhefqVgHVCVAFGbE+0Xi9Vjyz2Hut24J09TS2zwcbdGgA2WsHCpqmn96bB8tvR35HF3p9WxW8jyCHA6cENpA+9CgL7/5EZwtUvtH8Dxu75/wlujxnItjSNFz5Bo2yNqJj/tJ9llTiBL5iRfPijq8krv0ADAhMBxH7Yi0AAAAASUVORK5CYII="},6122:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB3ZIhEsIwEEX/NBUIRCQCgeAAPUIPgEAiORbHqazkAIjICkRlJPuHLd3pkJmkON7Mn/Sn07/bTRwAL7qKTqKN6IFCnOgi2qvnOoieKKDS6j/BkN74UTtZBeeyw0qcBhxEWw0aFsFefVR/xDwC7qHWgLMJvuvaihqzNxWzdFSNPJrEfisKFfJh6z3mTj8FcjshN7xPj9hf87mdBBNA7DXIDhkXPlpTMpMkfxbCI+akuy/vQuIZ+s10X+ILZaIfeH7Am18AAAAASUVORK5CYII="},1747:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBpVU9dtNAEJ4RDY9KdsWjkk+AbA6A6ehsn8D2CWJKqsgdHeYEUk6A3dGRXIDoBnEHVaIOKPDwzWqUyLIs28m8t9JKu/PNN3+7TA3ix6Hved6ZiPTxGdhQyTBS/F/hvcym6XofBu8BDpg5xrRPRwgTJxvZzOsMeTvgF2/OAH5t4BmLfAHTEUbnbnLNOjDv6j9MLlRHSCaqA2KzXeNb4L1zKEWmtMRjClYZNYh6C5aRMI8dIHN0O/4x3zHgmMtm4cBFPgB4QScIDEUAP6/qc8HCwuLDg/ntNI3oEaIhAs5nTDMNo+bE5cAjjnQdYUkeC66Ss+alI5oXCbGxvzHXOk0ld6QXvuH5wGupB0MHDvangiu5VtK90VHyQsPjqgvgMw/WBpRbWJ2AnTPNwxHULF86SOa36kFoP9d0gjB7MUrkteqB8bvKcmpvLWHydQbX0grDiY468HbSQ6XIsACvhrb0HXi0lyHHOtpovi3D+Ea+tGM11qNDeVMDa2MclBegPLd3VBjZ6nSRadXrexJxWIQ9uzdAD7kgczPSjiyMoFK+l8C1U5e0XwKjmXrYfGWu9Ku7tHGUqX26de30Q8cIGjcvfVQmW2PcUR7TTt3hpsl2OTniGKk2rvup7mNIK+l9pSdKO+4miuUnYZx7k1vSMGRaenVn+rHiKoxp7LCEXJE808ef1a/s+eDlX7j2XseL0Sv6vfx5dRq4HvfyyQh/RKi/6Xz7wimd6U3XYEXHd12dNx5V88Q1CjMz4heGcBGt/qGci7rXRML1UMjrC8vY9mqR7FTY3ku/fA0eEnT2pV2v6+oaNyladw+xawBPwsIrQK5FG1RI87Rourf/A3q9eAXaNgWeAAAAAElFTkSuQmCC"},6928:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBlVOhEoMwDA1jAjGBmEBWTCAnJib3KXwaHzCBmJhETEwiJyaQiAnEBHLJ9eXW60GBd/cuTQivaZpG9EfCHCiMlHlh5shvmTWsQU4bYSFJR2YVEBbBAtZHD1vKegMng/DUT4QK08CGPQojFR0c8WJCIKMwOrKtoBiBD/PE3JLtlcGue4hL/MDcBUSvWtwWARFqmGcnKYHwaujxc09wLaTC3hdtaH6cQmhdx72o0t1tJV6uEzvrL9k+prBLIYVUbmDjJajoGtR+IPb8N6yhZXgyH3Oigpbsxen7noLk3MY+6NvXPupzzSmMO6ochQ6/ITvohqYhEyK3XNPMlESeLxVnoB5dBDpw0Sz/AC5NME0CFLhmAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-careers-sr-javadevelopers-js-783a13d8c7e7242bb617.js.map