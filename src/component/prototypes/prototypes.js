import React from 'react'
import "../prototypes/prototypes.css"
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
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
    const body = {
      to: "priyariyabca@gmail.com , vgowthama225@gmail.com",
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
    <>
      <section>
        <div className='prototypes'>
          <h1>Build Your Prototypes<br></br><span id="days">in 7 days</span></h1>
          <button className='design' onClick={() => setButtonPopup(true)} >Request a design</button>
        </div>
      </section>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={sendEmail}>
          <p id='joinourteamText'>Join our team</p>
          <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
          <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
          <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
          <input className='file' type="file" placeholder='choose file' />
          <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*' ></textarea>
          <button type='submit' className='Fbutton'>Submit</button>
        </form>
      </Popup>

      <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          Thank you for contacting us, our team will reach you.
        </div>
      </Popup>

    </>

  )
}

export default Prototypes