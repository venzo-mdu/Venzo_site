import React from 'react'
import "../prototypes/prototypes.css"
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
import toMail from '../../config/config'
import success from '../../images/successfully.png'

function Prototypes() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [emailInput, setEmailInput] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [submit, setSubmit] = useState(false);
  const handleChange = (e) => {
    setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
  }
  async function sendEmail(event) {
    event.preventDefault()
    setSubmit(true)

    const body = {
      to: toMail,
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
    <>
      <section>
        <div className='prototypes'>
          <h1>Build Your Prototypes<br></br><span id="days">in 7 days</span></h1>
          <button className='design' onClick={() => setButtonPopup(true)} >Request a design</button>
        </div>
      </section>
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
          <img src={success} alt='success' className='succImg' />
          <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
        </div>
      </Popup>

    </>

  )
}

export default Prototypes