import React from 'react'
import '../join/join.css'
import JoinusImg from '../../images/joinUs.png'
import JoinusImgRes from '../../images/joinRes.png'
import rightArrow from '../../images/devArrow.svg'
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
function Join() {
  const [buttonPopup, setButtonPopup] = useState(false);
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
      to: "vgowthama225@gmail.com",
      message: emailInput["message"] + emailInput["email"],
      subject: "subject here"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)

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
    </>
  )
}

export default Join