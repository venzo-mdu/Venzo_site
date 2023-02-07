import React from 'react'
import '../customerexp/customerexp.css'

import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
  
function Customerexp() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [emailInput,setEmailInput]=useState({
    name:"",
    email:"",
    mobile:"",
    message:""
  });

  const handleChange=(e)=>{
    setEmailInput({...emailInput,[e.target.name]:e.target.value});
  }
  async function sendEmail(event){
    event.preventDefault()
    const body={
      to:"vgowthama225@gmail.com",
      message:emailInput["message"]+emailInput["email"],
      subject:"subject here"
    }
    const emailResponse=await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail",body);
    console.log(emailResponse)

  }
  return (
      <section>
          <div className='customerExperiance1'>
           <h3>Contact us - Embrace transformation with confidence by leveraging<br></br><span id='through'>our customised quality engineering services. (Speak to us)</span></h3>
           <button className='reachus' onClick={() => setButtonPopup(true)}>Reach us</button>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={sendEmail}>
        <p id='joinourteamText'>Join our team</p>
        <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' />
        <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' />
        <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' />
        <input className='file' type="file" placeholder='choose file' />
        <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*'></textarea>
        <button type='submit' className='Fbutton'>Submit</button>
        </form>
      </Popup>
      </section>
  )
}

export default Customerexp