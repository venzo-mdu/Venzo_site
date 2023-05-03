import React,{useState} from 'react'
import '../../style/style.css'
import '../../style/laptop.css'
import '../../style/laptopL.css'
import '../../style/tablet.css'
import '../../style/mobile.css'
import itemContent from '../../content/CustomerContent.json'
import Popup from '../careersPage2/popup/popup'
import axios from 'axios'
import success from '../../images/successfully.png'
import toMail from '../../config/config'
import {toEnquiryMail} from '../../config/config'


function Idea() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [emailInput,setEmailInput]=useState({
    name:"",
    email:"",
    mobile:"",
    message:""
  });

  const handleChange=(e)=>{
    setEmailInput({...emailInput,[e.target.name]:e.target.value});
  }
  async function sendEmail(event){
    event.preventDefault()
    setSubmit(true)

    const body={
      to:toEnquiryMail,
      message:" Name:"+ " " +emailInput["name"] + " " + " <br> Email:"+ " "+ emailInput["email"] + " " + " <br> Mobile No:" + " "+ emailInput["mobile"] + " " + " <br> Message:"+ " " + emailInput["message"],
      subject:"Venzo Enquiry From: Lets Talk Form"
    }
    const emailResponse=await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",body);
    console.log(emailResponse)
    setEmailInput(
      { name: "",
      email: "",
      mobile: "",
      message: ""}
  )

  }
  return (
    // <div className='containor3'>
    //     <p className='anyIdea'>Any Ideas? <br/>
    //       <span className=' textColor'>Let’s make it happen.</span> </p>
    //     <button className=' btn talk'>Let's Talk</button>   
    // </div>
    <div>
      {itemContent.idea.map((item) => {
        return     <div className='containor3'>
        <p className='anyIdea'>{item.line1} <br/>
          <span className=' textColor'>{item.line2}</span> </p>
        <button className=' btn talk' onClick={() => setButtonPopup(true)}>{item.talk}</button>   
    </div>

      })}
       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
       <form onSubmit={sendEmail}>
            <p className='formTitle1'>Let’s catch the initial spark!</p>
            <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
            <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
            <input className='Fphone1' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
            <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message'></textarea>
            <button type='submit' className='Fbutton'>Submit</button>
          </form>
      </Popup>

      <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          <p className='subSucss'>Submitted successfully</p>
          <img src={success} alt='success' className='succImg'/>
          <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
        </div>
      </Popup>
    </div>
  )
}

export default Idea







// {
//   "title":[
//       {
//           "title":"Build",
//           "content":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//           "images":"../images/Build.svg"
//       }
//   ],
      
//       "build" : [
  
//       {
//           "icon":"../images/Web development-gradient.svg",
//           "title1":"Web Development",
//           "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//           "className":"Web"
//       },
//       {
//           "icon":"../images/Android Development-gradient.svg",
//           "title1":"Android Development",
//           "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//           "className":"Android"
//       },
//       {
//           "icon":"../images/iOS Development-gradient.svg",
//           "title1":"IOS Development",
//           "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//           "className":"IOS",
//           "readMore": "Read More",
//           "arrow":"../images/Read more arrow-gradient.svg"
  
//       }
//       ],
//       "title1":[
//           {
//               "title":"Innovate",
//               "content":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//               "images":"../images/Innovate.svg"
//           }
//       ],
//       "Innovate" : [
//           {
//               "icon":"../images/Banking Solutions-gradient.svg",
//               "title1":"Blockchain Development",
//               "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//               "className":"Blockchain"
//           },
//           {
//               "icon":"../images/UI Design-gradient.svg",
//               "title1":"UX/UI Design",
//               "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//               "className":"UX/UI"
//           },
//           {
//               "icon":"../images/Banking Solutions-gradient.svg",
//               "title1":"Banking Solutions",
//               "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//               "className":"Banking",
//               "readMore": "Read More",
//               "arrow":"../images/Read more arrow-gradient.svg"
//           }
//           ],
//           "title2":[
//               {
//                   "title":"Grow",
//                   "content":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//                   "images":"../images/Grow.svg"
//               }
//           ],
//           "grow" : [
//               {
//                   "icon":"../images/Bespoke Solutions-gradient.svg",
//                   "title1":"Bespoke solutions",
//                   "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//                   "className":"Bespoke"
//               },
//               {
//                   "icon":"../images/Data Engineering-gradient.svg",
//                   "title1":"Data Engineering",
//                   "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//                   "className":"Data"
//               },
//               {
//                   "icon":"../images/Staff Agumentation-gradient.svg",
//                   "title1":"Staff Augmentation",
//                   "content1":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//                   "className":"Staff",
//                   "readMore": "Read More",
//                   "arrow":"../images/Read more arrow-gradient.svg"
  
//               }
//               ],
//           "customer" :[
//               {
//                   "title":"We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.",
//                   "desc" :"We offer refined customized applications that streamline your business needs and enhance customer experience We offer refined customized applications that streamline your business needs and enhance customer experience.",
//                   "readMore": "READ MORE",
//                   "arrow":"../images/Read more arrow-gradient.svg",
//                   "Images": "../images/Video thumbnail.svg"
//               }
//               ],
//               "blog":[
//               {
//                   "title1":"Our Latest Blogs",
//                   "title2":"Careers",
//                   "decs1":"New Product Development; Winner's Guild",
//                   "decs2":"How To Choose Betwen React Native And Ionic For Your App",
//                   "decs3":"Selenium the Most Popular Test Automation Tool",
//                   "date1":"May04,2022",
//                   "subTitle":"Want to be a Venzoian?",
//                   " ":"Interested in working with us?",
//                   "careersDecs1":"Explore career oppourtunities below.",
//                   "job":"View Job",
//                   "arrow":"../images/Read more arrow-gradient.svg"
  
//               }
//               ],
//               "idea":[
//               {
//                   "line1":"Any Ideas?",
//                   "line2": "Let’s make it happen.",
//                   "talk":"Let's Talk"
//               }
//               ]
//   }