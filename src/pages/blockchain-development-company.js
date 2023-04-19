import React,{useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import productImage from '../images/blockchaindevelopment/nftimg.png'
import borderLine from '../images/borderLine.png'


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
import success from '../images/successfully.png'

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
      to:toMail,
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
      <Header flag='header2' />
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
                <p id='productTitle'>NFT - Engine</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>NFT - Engine is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='NFTImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item>
          <Carousel.Item >

            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>NFT - Engine</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>NFT - Engine is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='NFTImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>NFT - Engine</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>NFT - Engine is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='NFTImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>NFT - Engine</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>NFT - Engine is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='NFTImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>NFT - Engine</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>NFT - Engine is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='NFTImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >

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