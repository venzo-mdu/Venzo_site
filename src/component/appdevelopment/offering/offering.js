import React from 'react'
import '../offering/offering.css'
import Popup from '../../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
import toMail from '../../../config/config'
import {toEnquiryMail} from '../../../config/config'

import success from '../../../images/successfully.png'

function Offering() {
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
      subject: "app-development-company"
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
    <div className='offering'>
      <p id='offeringTilte'>Partner with us for Full-stack App development.</p>

      <div className='cardsinOffering'>
        <div className='offerCards1'>
          <p id='offerCardsTitle'>Front-end development Services</p>
          <p id='offerCardsText'>Leading businesses and startups bolster their development teams with Venzo front-end developers for software development projects that increase usability, including web development, UI/UX, and mobile app development. We use a wide variety of low-code languages.</p>
          <button className='offerButton border-gradient-purple' onClick={() => setButtonPopup(true)} >Get Quote</button>
        </div>
        <div className='offerCards1'>
          <p id='offerCardsTitle'>Back-End Application Development Services</p>
          <p id='offerCardsText'>We provide backend web development services that include but are not limited to, creating scalable, complicated applications and IoT infrastructure. Our team creates scalable backend solutions that automatically expand to meet your business needs.</p>
          <button className='offerButton border-gradient-purple' onClick={() => setButtonPopup(true)} >Get Quote</button>
        </div>
        <div className='offerCards1' id='offerCardsRes'>
          <p id='offerCardsTitle'>Comprehensive DevOps Solutions</p>
          <p id='offerCardsText'>Eliminate the tradeoff between quick release and quality assurance. We enable companies to accelerate innovation without taking any risks. By removing friction, our solutions can increase developer productivity, shorten the time it takes to launch products and boost customer happiness.</p>
          <button className='offerButton border-gradient-purple' onClick={() => setButtonPopup(true)} >Get Quote</button>

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

    </div>
  )
}

export default Offering