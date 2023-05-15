import React,{useEffect} from 'react'
import {SEO} from '../component/seo'

import Carousel from 'react-bootstrap/Carousel';
import productImage from '../images/productImage.png'
import borderLine from '../images/borderLine.png'
import success from '../images/successfully.png'
import FinfloImg from '../images/productdevelopment/finflo.png'
import QiztoImg from '../images/productdevelopment/qizto.png'
import WorkflowImg from '../images/productdevelopment/workflow.png'
import NFTEngineImg from '../images/productdevelopment/nftEngine.png'


import Header from '../component/header/header'
import BCBanner from '../component/blockchaindevelopment/bcBanner/bcBanner'
import BCNetwork from '../component/blockchaindevelopment/bcNetwork/bcNetwork'
import BCServices from '../component/blockchaindevelopment/bcServices/bcServices'
import BCExecution from '../component/blockchaindevelopment/bcExecution/bcExecution'
import Footer from '../component/footer/footer'
import Popup from '../component/careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
import toMail from '../config/config'
import {toEnquiryMail} from '../config/config'


function Blockchaindevelopment() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
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
    <div className='blockchainbody'>
       <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blockchain-development-company/" />
          </head>
      <Header flag='header2' />
      <SEO title={'Blockchain development company in india | Venzo'} description ={'Venzo is one of the leading blockchain development companies in India, providing end-to-end blockchain solutions for startups, SMEs, and large enterprises. '}/>
      <BCBanner />
      <BCNetwork />
      <BCServices />
      <BCExecution />

      <div className='awesomeProducts'>
                    <p className='awesomeTitle'>Awesome products from <span id='awesomeVenzo'>Venzo !</span></p>
                    <Carousel>
                        <Carousel.Item >
                            <div className='ourProducts'>
                                <div className='productDesc'>
                                    <p id='productTitle'>Madras Daily</p>
                                    <img className='borderLine' src={borderLine} alt='borderImage'></img>
                                    <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
                                </div>
                                <img className='productImage1' src={productImage} alt='productImage'></img>
                            </div>
                        </Carousel.Item>
                        
                        <Carousel.Item >
                            <div className='ourProducts'>
                                <div className='productDesc'>
                                    <p id='productTitle'>Qizto</p>
                                    <img className='borderLine' src={borderLine} alt='borderImage'></img>
                                    <p id='productText'>User Engagement Platform to build great interactive polls and quizzes to engross people at work or in online classrooms. The awesome thing about Qizto is that it helps to measure real engagement rather than just grading for participation.
                                    Include everyone in the discourse whether in work or for education Qizto have everything for everyone. </p>
                                </div>
                                <img className='productImage' src={QiztoImg} alt='productImage'></img>
                            </div>
                        </Carousel.Item >
                        <Carousel.Item >
                            <div className='ourProducts'>
                                <div className='productDesc'>
                                    <p id='productTitle'>NFT Engine</p>
                                    <img className='borderLine' src={borderLine} alt='borderImage'></img>
                                    <p id='productText'>NFT-Engine enable brands and companies to sell their unique NFTs to consumers through our easy-to-use interface.  
                                        NFT-Engine objective is to make it effortless for anyone to create unique digital collectables using their favorite assets—from movies, music videos, TV shows, books, or anything else! </p>
                                </div>
                                <img className='productImage' src={NFTEngineImg} alt='productImage'></img>
                            </div>
                        </Carousel.Item >
                        <Carousel.Item >
                            <div className='ourProducts'>
                                <div className='productDesc'>
                                    <p id='productTitle'>Workflow App</p>
                                    <img className='borderLine' src={borderLine} alt='borderImage'></img>
                                    <p id='productText'>Our ERP workflow app streamlines your business processes by automating tasks and providing real-time visibility into your company's operations. With our app, you can manage everything from sales and inventory to HR and finance, all in one place. 
                                   With our ERP workflow app, you can make data-driven decisions by accessing real-time analytics and reporting.  </p>
                                </div>
                                <img className='productImage' src={WorkflowImg} alt='productImage'></img>
                            </div>
                        </Carousel.Item >
                        {/* <Carousel.Item >

                            <div className='ourProducts'>
                                <div className='productDesc'>
                                    <p id='productTitle'>Finflo</p>
                                    <img className='borderLine' src={borderLine} alt='borderImage'></img>
                                    <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
                                </div>
                                <img className='productImage' src={FinfloImg} alt='productImage'></img>
                            </div>
                        </Carousel.Item > */}

                    </Carousel>

                </div>
      <div className='buildProduct'>
        <p className='buildText'> Start building blockchain <br /><span className=' textColor'>to grow your business</span> </p>
        <button className=' btn buildtalk' onClick={() => setButtonPopup(true)}>Let's talk</button>
      </div>
      <Footer />

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

export default Blockchaindevelopment