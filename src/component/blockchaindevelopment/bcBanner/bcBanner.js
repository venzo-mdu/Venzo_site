import React, { useState } from 'react'
import '../bcBanner/bcBanner.css'

import Popup from '../../careersPage2/popup/popup'
import axios from 'axios'
import toMail from '../../../config/config'
import {toEnquiryMail} from '../../../config/config'

import success from '../../../images/successfully.png'

function BcBanner() {
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
      subject: "blockchain-development-company"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)
    setEmailInput(
      { name: "",
      email: "",
      mobile: "",
      message: ""}
  )

  }
  return (
    <>
      <div className='bcBanner'>
        <div className='innerbcBanner'>
          <p id='bcbannerTitle'><span id='bcBannergradienttext'>Blockchain, Metaverse</span>, AI/ML, IoT and Mobility Solutions Provider</p>
          {/* <p id='bcbannerText'>We build stellar products with elite blockchain engineers for global web3 startups</p> */}
          {/* <div className='bcdemoButton' onClick={() => setButtonPopup(true)}>Let’s Talk</div> */}
        </div>
      </div>
      <div className='bcBannerRes'>
        <div className='innerbcBannerRes'>
          <p id='bcbannerTitleRes'><span id='bcBannergradienttext'>Blockchain, Metaverse</span>, AI/ML, IoT and Mobility Solutions Provider</p>
          {/* <p id='bcbannerTextRes'>We build stellar products with elite blockchain engineers for global web3 startups</p>
          <div className='bcdemoButton'>Let’s Talk</div> */}
        </div>
      </div>
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
    </>
  )
}

export default BcBanner