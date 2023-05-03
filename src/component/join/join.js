import React from 'react'
import '../join/join.css'
import JoinusImg from '../../images/allpageabanner/Join with us/Join with us_1x.webp'
import JoinusImgRes from '../../images/joinRes.png'
import rightArrow from '../../images/devArrow.svg'
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
import success from '../../images/successfully.png'
import toMail from '../../config/config'
import {toEnquiryMail} from '../../config/config'

function Join() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [emailInput, setEmailInput] = useState({
      name: "",
      email: "",
      mobile: "",
      message: ""
  });

  const handleChange = (e) => {
      setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
  }
  async function sendEmail(event) {
      event.preventDefault()
      setSubmit(true)

      const body = {
          to: toEnquiryMail,
          message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
          subject: "Venzo Enquiry From: Lets Talk Form"
      }

      const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
      console.log(emailResponse)
      setEmailInput(
          {
              name: "",
              email: "",
              mobile: "",
              message: ""
          }
      )

  }
  return (
    <>  <section>
      <div className='joinus'>
        <div className='innerJoin'>
          <img className="joinImg" src={JoinusImg} alt='joinus'></img>
          {/* <img className="joinImgRes" src={JoinusImgRes} alt='joinusRes'></img> */}
          <div className='innerText'>
            <p id='innerTextTitle'>Join with us</p>
            <p id='innerTextPara'>Here are some career pathways to consider if you enjoy working with others.</p>
            <p id='applyNow' onClick={() => setButtonPopup(true)}>Apply Now<img src={rightArrow} alt='rightArrow'></img></p>
          </div>
        </div>
      </div>
    </section>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={sendEmail}>
          <p id='joinourteamText'>Join our team</p>
          <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' />
          <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' />
          <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' />
          <input className='file' type="file" placeholder='choose file' />
          <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message'></textarea>
          <button type='submit' className='Fbutton'>Submit</button>
        </form>
      </Popup>
      <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          <p className='subSucss'>Submitted successfully</p>
          <img src={success} alt='success' className='succImg' />
          <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
        </div>
      </Popup>
    </>
  )
}

export default Join