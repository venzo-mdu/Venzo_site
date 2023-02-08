import React from 'react'
import '../agile/agile.css'
import appDev1 from '../../../images/appdevelopment/appd2.png'
import appDev2 from '../../../images/appdevelopment/appd3.png'
import Popup from '../../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'


function Agile() {

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
    <div className='agileDev'>
      <p id='agileDevTitle'>Delivering stellar app development services across all platforms!</p>

      <div className='agileCards'>
        <div className='agileCard1'>
          <img className='agileimage' src={appDev1} alt='agileImage'></img>
          <div className='agilecardText'>
            <p id='agileTitle'>Android Development</p>
            <p id='agileText'>Our specialists are fully versed in every facet of the Android OS, having worked with various ecosystems of Android smartphones.</p>
            <div className='agileDevbutton border-gradient-purple' onClick={() => setButtonPopup(true)}>Let's Talk</div>
          </div>
        </div>

        <div className='agileCard1'>
          <img className='agileimage' src={appDev2} alt='agileImage'></img>
          <div className='agilecardText'>
            <p id='agileTitle'>iOS Development</p>
            <p id='agileText'>We create feature-rich, secure, and interactive iOS apps for different business verticals.</p>
            <div className='agileDevbutton border-gradient-purple' onClick={() => setButtonPopup(true)} >Let's Talk</div>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default Agile