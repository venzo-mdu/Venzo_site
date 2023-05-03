import React, { useState } from 'react'
import '../discussion/discussion.css'
import lineImg from '../../../images/horizLinecareers2.png'
import axios from 'axios'
import Popup from '../popup/popup'
import toMail from '../../../config/config'
import {toHREnquiryMail} from '../../../config/config'
import success from '../../../images/successfully.png'

function Discussion() {
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
      to: toHREnquiryMail,
      message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
      subject: "Venzo Careers Form"
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
      <section>
        <div className='discussion'>
          <div className='gotanIdea'>
            <p id='gotanIdeaTitle'>Got an idea?<br></br>Let's get in touch!</p>
            <img src={lineImg} alt='horizantalLine'></img>
            <p id='gotanIdeaText'>Let’s discuss your project & find out what we can do to provide value.</p>
          </div>
          <div className='enquiryinDiscussion'>
            <div className='contactformCareers'>
              <p className='formTitle'>Let’s catch the initial spark!</p>
              <form onSubmit={sendEmail}>
                {/* <p id='joinourteamText'>Join our team</p> */}
                <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
                <input className='Femail1' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
                <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />

                <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message'></textarea>
                <button type='submit' className='Fbutton1'>Submit</button>
              </form>

            </div>
          </div>
        </div>
      </section>

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

export default Discussion