import React, { useState } from 'react'
import "../improve/improve.css"
import rightArrow from "../../images/Full cycle arrow-gradient.svg"
import Popup from '../careersPage2/popup/popup'
import axios from 'axios'
import toMail from '../../config/config'
function Improve() {
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
      cc: "priyankac@venzotechnologies.com",
      message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
      // message:emailInput["message"]+emailInput["email"],
      subject: "subject here"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)
    setSubmit(true)

  }
  return (
    <section>
      <div className='improve'>
        <div className='improveSoftware1'>
          <p id='improveSoftwareLine1'>Next Gen Quality Testing Services for Banks  </p>
          <p id='improveSoftwareLine2'>Well thought through QA initiatives </p>
          <p id='improveSoftwareLine3' onClick={() => setButtonPopup(true)}>KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
        </div>
      </div>
      <div className='improveRes'>
        <div className='improveSoftware improveSoftware1'>
          <p id='improveSoftwareLine1'>Next Gen Quality Testing Services for Banks </p>
          <p id='improveSoftwareLine2'>Well thought through QA initiatives</p>
          <p id='improveSoftwareLine3' onClick={() => setButtonPopup(true)} >KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <form onSubmit={sendEmail}>
            <p className='formTitle'>Let’s catch the initial spark!</p>
            <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
            <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
            <input className='Fphone1' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
            <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*'></textarea>
            <button type='submit' className='Fbutton'>Submit</button>
          </form>
      </Popup>

      <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          Thank you for contacting us, our team will reach you.
        </div>
      </Popup>
    </section>
  )
}

export default Improve;