"use strict";(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[479],{8729:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(7294),n=t(2956),A=t(7267),s=t(3341),c=t(5335);var m=function(){const{0:e,1:a}=(0,l.useState)(!1),{0:t,1:m}=(0,l.useState)({name:"",email:"",mobile:"",message:""}),r=e=>{m({...t,[e.target.name]:e.target.value})};return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"discussion"},l.createElement("div",{className:"gotanIdea"},l.createElement("p",{id:"gotanIdeaTitle"},"Got an idea?",l.createElement("br",null),"Let's get in touch!"),l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAADCAYAAAAEC4j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBZZJbcsMwCEXBsvrd6VKzgTTLzkyBci/IjzaxLSSeOqDvx+dTZXuGD3GfGrEL5PA997uIj/DIc9u4SurdRuna1nMV21O/a/mV//9YbWMjUqc4W3bwtxgKe4nJHKlru3GJj/OZ8mAu7qPjdCz6nmfRuYU+jFO+vAv8RfOfCwSBINznqqo8x0MdP22Tv299P74CQY9gTLTrtaCCi0vy4pRvALyAAAx9E4AsuYEWePg1XJtZYMYgqLKVvpwAkA/1A8KlIRcAJ8B5glv7rvnme21kxkctEornIHJA0gYYDbRsTqhCwrplwBdhsGuzC5tMUhdNOD4ruXwA2nq7kL6IYVrgV9Nj3k1If9iZFWi3yfiA4D093rbOpszVQPidk4V6rJsL+GvaMK2Qf6peX7UeA8B8HJIF1NAc31Knt3H6M11rFBcsTqE2OLwu8voFL86xEOQvA8AAAAAASUVORK5CYII=",alt:"horizantalLine"}),l.createElement("p",{id:"gotanIdeaText"},"Let’s discuss your project & find out what we can do to provide value.")),l.createElement("div",{className:"enquiryinDiscussion"},l.createElement("div",{className:"contactformCareers"},l.createElement("p",{className:"formTitle"},"Let’s catch the initial spark!"),l.createElement("form",{onSubmit:async function(e){e.preventDefault(),a(!0);const l={to:s.Z,message:" Name: "+t.name+"  <br> Email: "+t.email+"  <br> Mobile No: "+t.mobile+"  <br> Message: "+t.message,subject:"Venzo Careers Form"},A=await n.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",l);console.log(A),m({name:"",email:"",mobile:"",message:""})}},l.createElement("input",{className:"Fname",name:"name",value:t.name,onChange:r,type:"text",placeholder:"Name*",required:!0}),l.createElement("input",{className:"Femail1",name:"email",value:t.email,onChange:r,type:"text",placeholder:"Email*",required:!0}),l.createElement("input",{className:"Fphone",name:"mobile",value:t.mobile,onChange:r,type:"phone",placeholder:"Mobile number*",required:!0}),l.createElement("textarea",{className:"Fmessage",name:"message",value:t.message,onChange:r,placeholder:"Message"}),l.createElement("button",{type:"submit",className:"Fbutton1"},"Submit")))))),l.createElement(A.Z,{trigger:e,setTrigger:a,id:"thankPop"},l.createElement("div",{className:"thankPop"},l.createElement("p",{className:"subSucss"},"Submitted successfully"),l.createElement("img",{src:c.Z,alt:"success",className:"succImg"}),l.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",l.createElement("br",null)," our team will reach you."))))}},8387:function(e,a,t){t.d(a,{Z:function(){return s}});var l=t(7294),n=t.p+"static/careers2bg2-2d37528a1f6c375937b9afa4a54a50a5.png",A=t.p+"static/careers2imgRes-47604cc62c9afb83ef0fb263247690bf.png";var s=function(){return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"jobDetails"},l.createElement("img",{className:"careers2bg",src:n,alt:"backgroundImg"}),l.createElement("img",{className:"careers2bgRes",src:A,alt:"backgroundImgRes"}),l.createElement("p",{id:"jobDetailsText"},"Job Details"))))}},2267:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var l=t(7294),n=t(7519),A=t(8387),s=t(418),c=t(1747),m=t(152),r=t(6928),i=t(6122),o=t(9959),u=t(7267),g=t(2956),E=t(3341),d=t(2848),p=t(4586),b=t(6271),C=t(5335);var v=function(){const{0:e,1:a}=(0,l.useState)(!1),{0:t,1:n}=(0,l.useState)(!1),{0:A,1:v}=(0,l.useState)(""),{0:N,1:h}=(0,l.useState)(null),{0:B,1:R}=(0,l.useState)({name:"",email:"",mobile:"",message:""}),I=e=>{R({...B,[e.target.name]:e.target.value})};return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"applyJob"},l.createElement("div",{className:"job"},l.createElement("div",{className:"details"},l.createElement("p",{id:"detailsText"},"MICRO STRATEGY"),l.createElement("p",{id:"experiancerText"},l.createElement("img",{src:s.Z,alt:"experiance"})," 6 - 7 Years Experience")),l.createElement("div",{className:"applyNow"},l.createElement("button",{className:"applyNowButton","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:()=>a(!0)},"Apply Now"),l.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},l.createElement("div",{class:"modal-content"},l.createElement("div",{class:"modal-header"},l.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"},"Modal title"),l.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.createElement("span",{"aria-hidden":"true"},"×"))),l.createElement("div",{class:"modal-body"},"..."),l.createElement("div",{class:"modal-footer"},l.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.createElement("button",{type:"button",class:"btn btn-primary"},"Save changes"))))),l.createElement("div",{className:"socialmediaIconsCareers"},l.createElement("p",{id:"shareitOn"},"share it on"),l.createElement("div",{className:"icons"},l.createElement("img",{src:m.Z,alt:"fb-icon"}),l.createElement("img",{src:r.Z,alt:"twitter-icon"}),l.createElement("img",{src:i.Z,alt:"linkedin-icon"}),l.createElement("img",{src:o.Z,alt:"insta-icon"}))))),l.createElement("div",{className:"descripition"},l.createElement("div",{className:"jobDescripition"},l.createElement("p",{id:"jobDescripitionTitle"},"Job Descripition"),l.createElement("ul",null,l.createElement("li",null," ",l.createElement("img",{src:c.Z,alt:"tickImg"}),"Knowledge in MSTR  Developer, Architect, Web."),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"})," Knowledge in SMM/SCA."))),l.createElement("div",{className:"skillsRequired"},l.createElement("p",{id:"skillsRequiredTitle"},"skills Required"),l.createElement("ul",null,l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Ability to create and manage complex cubes from various sources.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Ability to create dashboard.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Performance management on cubes.")),l.createElement("li",null,l.createElement("img",{src:c.Z,alt:"tickImg"}),l.createElement("p",{id:"SkillPara"},"Strong team players.")))),l.createElement("button",{className:"applyNowButton1",onClick:()=>a(!0)},"Apply Now")))),l.createElement(u.Z,{trigger:e,setTrigger:a},l.createElement("form",{onSubmit:async e=>{e.preventDefault(),n(!0);const a={to:E.Z,message:" Name: "+B.name+"  <br> Email: "+B.email+"  <br> Mobile No: "+B.mobile+"  <br> Message: "+B.message+" <br> Resume: "+A,subject:"Venzo Careers Form"},t=await g.Z.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",a);console.log(t),R({name:"",email:"",mobile:"",message:""})}},l.createElement("p",{id:"joinourteamText"},"Join our team"),l.createElement("input",{className:"Fname",name:"name",value:B.name,onChange:I,type:"text",placeholder:"Name*",required:!0}),l.createElement("input",{className:"Femail",name:"email",value:B.email,onChange:I,type:"text",placeholder:"Email*",required:!0}),l.createElement("input",{className:"Fphone",name:"mobile",value:B.mobile,onChange:I,type:"phone",placeholder:"Mobile number*",required:!0}),l.createElement("input",{className:"file",type:"file",accept:".pdf , .doc , .docx",placeholder:"choose file",onChange:e=>{console.log("hihh",A,"image",N),h(e.target.files[0]),console.log(e.target.files[0]);const a=(0,b.iH)(d.tO,"venzofile/"+(e.target.files[0].name+(0,p.Z)()));(0,b.KV)(a,e.target.files[0]).then((e=>{(0,b.Jt)(e.ref).then((e=>{console.log(e),v(e)}))}))}}),l.createElement("textarea",{className:"Fmessage",name:"message",value:B.message,onChange:I,placeholder:"Message"}),l.createElement("button",{type:"submit",className:"Fbutton"},"Submit"))),l.createElement(u.Z,{trigger:t,setTrigger:n,id:"thankPop"},l.createElement("div",{className:"thankPop"},l.createElement("p",{className:"subSucss"},"Submitted successfully"),l.createElement("img",{src:C.Z,alt:"success",className:"succImg"}),l.createElement("p",{className:"thanksMsg"},"Thank you for contacting us,",l.createElement("br",null)," our team will reach you."))))},N=t(8729),h=t(2158);var B=()=>((0,l.useEffect)((()=>{document.documentElement.scrollTo({top:0,left:0})}),[]),l.createElement("div",{className:"blockchainbody"},l.createElement(n.Z,{flag:"header2"}),l.createElement(A.Z,null),l.createElement(v,null),l.createElement(N.Z,null),l.createElement(h.Z,null)))},418:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBvZRbCsIwEEVn0i7Afx8ouC9B3IA7qDtwARJwX5UW8d9uIB0TaErRSVObtOengcvM3N48EBg2t+JQC3XVywWnE0CZ1En2PO3u35rgCpRQmauZAQG2zcAfUleB+b6Oe+T0lczJNZB1GAL68hqKzRWXMi/sL0agSn15DcXmGj1D4ZrWTIR/9fi73OdkDNEdtjelu8vWteemsDXTOeziO5N9+jznMARcy8ebgIIehrYZYCmA6GwWEIjuUelelw9xFks7qMGs+QAAAABJRU5ErkJggg=="},152:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBpVMtF4JAEFyRYCQSiUaikWAwEo3+LCM/gWjkJxCJRIOBSHQH9nS5D33ovDcPbrmdnds9NuRixzwwM2Yq65F5Z7bCBTbWGsmFJIYwMCt5TtiqjwXzyIzpM4xTOHtoJwieAkmw39F8JAicJY71FY5QNREXPjTCkKOSWUFkT+Ee6CbmUlAjA41ICIPaXAb2pBHNY/wHKZzYR0HDblYMk6hlrzOAmN5d1yKtRxixjFyMkVTRgGAuNEg8sZdLOOmsCmZ0pBwlFG5sH8nGgX7DlAsRnLem9UDhBi+RsbRSaPETxpa1nnkh92ZqdFJwpC/IaHkfzP/lvZhPYVE1iW/3zuoAAAAASUVORK5CYII="},9959:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgBjZOhtsIwDIaz3YnJysnKySsQk5NIHmESyaMgkTwCEjmJQCCRkxWISiTN2V8WShj85+SkXdIvabZlNKkM1gSzwSrsP8nB+mCeH2QC0gEwIOk+A6pQkLXn/AhaBfsPdgh2oe8y8B38NsfCAvALpA62gT8Aagsar8Ubp1RtcKBE/EjjTBy8j7kRxLonkA6xK2IMXKOLXVq0EBsJauF3omoP+FLAn8rFuhSeBz8ISCx0RLymRDm9KwIHJeaSHBXkhefqVgHVCVAFGbE+0Xi9Vjyz2Hut24J09TS2zwcbdGgA2WsHCpqmn96bB8tvR35HF3p9WxW8jyCHA6cENpA+9CgL7/5EZwtUvtH8Dxu75/wlujxnItjSNFz5Bo2yNqJj/tJ9llTiBL5iRfPijq8krv0ADAhMBxH7Yi0AAAAASUVORK5CYII="},6122:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB3ZIhEsIwEEX/NBUIRCQCgeAAPUIPgEAiORbHqazkAIjICkRlJPuHLd3pkJmkON7Mn/Sn07/bTRwAL7qKTqKN6IFCnOgi2qvnOoieKKDS6j/BkN74UTtZBeeyw0qcBhxEWw0aFsFefVR/xDwC7qHWgLMJvuvaihqzNxWzdFSNPJrEfisKFfJh6z3mTj8FcjshN7xPj9hf87mdBBNA7DXIDhkXPlpTMpMkfxbCI+akuy/vQuIZ+s10X+ILZaIfeH7Am18AAAAASUVORK5CYII="},1747:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBpVU9dtNAEJ4RDY9KdsWjkk+AbA6A6ehsn8D2CWJKqsgdHeYEUk6A3dGRXIDoBnEHVaIOKPDwzWqUyLIs28m8t9JKu/PNN3+7TA3ix6Hved6ZiPTxGdhQyTBS/F/hvcym6XofBu8BDpg5xrRPRwgTJxvZzOsMeTvgF2/OAH5t4BmLfAHTEUbnbnLNOjDv6j9MLlRHSCaqA2KzXeNb4L1zKEWmtMRjClYZNYh6C5aRMI8dIHN0O/4x3zHgmMtm4cBFPgB4QScIDEUAP6/qc8HCwuLDg/ntNI3oEaIhAs5nTDMNo+bE5cAjjnQdYUkeC66Ss+alI5oXCbGxvzHXOk0ld6QXvuH5wGupB0MHDvangiu5VtK90VHyQsPjqgvgMw/WBpRbWJ2AnTPNwxHULF86SOa36kFoP9d0gjB7MUrkteqB8bvKcmpvLWHydQbX0grDiY468HbSQ6XIsACvhrb0HXi0lyHHOtpovi3D+Ea+tGM11qNDeVMDa2MclBegPLd3VBjZ6nSRadXrexJxWIQ9uzdAD7kgczPSjiyMoFK+l8C1U5e0XwKjmXrYfGWu9Ku7tHGUqX26de30Q8cIGjcvfVQmW2PcUR7TTt3hpsl2OTniGKk2rvup7mNIK+l9pSdKO+4miuUnYZx7k1vSMGRaenVn+rHiKoxp7LCEXJE808ef1a/s+eDlX7j2XseL0Sv6vfx5dRq4HvfyyQh/RKi/6Xz7wimd6U3XYEXHd12dNx5V88Q1CjMz4heGcBGt/qGci7rXRML1UMjrC8vY9mqR7FTY3ku/fA0eEnT2pV2v6+oaNyladw+xawBPwsIrQK5FG1RI87Rourf/A3q9eAXaNgWeAAAAAElFTkSuQmCC"},6928:function(e,a){a.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBlVOhEoMwDA1jAjGBmEBWTCAnJib3KXwaHzCBmJhETEwiJyaQiAnEBHLJ9eXW60GBd/cuTQivaZpG9EfCHCiMlHlh5shvmTWsQU4bYSFJR2YVEBbBAtZHD1vKegMng/DUT4QK08CGPQojFR0c8WJCIKMwOrKtoBiBD/PE3JLtlcGue4hL/MDcBUSvWtwWARFqmGcnKYHwaujxc09wLaTC3hdtaH6cQmhdx72o0t1tJV6uEzvrL9k+prBLIYVUbmDjJajoGtR+IPb8N6yhZXgyH3Oigpbsxen7noLk3MY+6NvXPupzzSmMO6ochQ6/ITvohqYhEyK3XNPMlESeLxVnoB5dBDpw0Sz/AC5NME0CFLhmAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-careers-micro-strategy-js-07059a22d3ee3e5f254c.js.map