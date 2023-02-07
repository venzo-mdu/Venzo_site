import React from 'react'
import '../agile/agile.css'
import appDev1 from '../../../images/appdevelopment/appd2.png'
import appDev2 from '../../../images/appdevelopment/appd3.png'
import Popup from '../../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
  

function Agile() {
    
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
            <div className='agileDevbutton border-gradient-purple'onClick={() => setButtonPopup(true)} >Let's Talk</div>
        </div>
        </div>
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
   </div>
  )
}

export default Agile