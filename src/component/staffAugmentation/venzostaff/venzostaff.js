import React from 'react'
import '../venzostaff/venzostaff.css'
import Popup from '../../careersPage2/popup/popup'
import RightArrow from '../../../images/devArrow.svg'
import { useState } from 'react'
import axios from 'axios'
import toMail from '../../../config/config'
import success from '../../../images/successfully.png'

function Venzostaff() {
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
    const body = {
      to: toMail,
      message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
      subject: "Hire-our-developers"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)
    setSubmit(true)
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
      <div className='venzoSA'>
        <div className='bannerText'>
          <p id='venzoSATitle'>Hire Dedicated <br /> Developers </p>
          <p id='venzoSAText'>Hire our highly qualified and experienced developers and designers to augment your team and assist you in creating complex software solutions based on your business requirements in cost-effective measures.</p>
          <p id='venzoSATalk' onClick={() => setButtonPopup(true)}>Talk to us <img src={RightArrow} alt='talktous'></img></p>
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
          <img src={success} alt='success' className='succImg' />
          <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
        </div>
      </Popup>
    </>
  )
}

export default Venzostaff