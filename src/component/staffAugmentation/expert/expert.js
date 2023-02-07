import React,{useState} from 'react'
import './expert.css'
import Popup from '../../careersPage2/popup/popup';
import axios from 'axios'
function Expert() {
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
    <div className='expert'>
      <div className='buildProduct'>
        <p className='buildText'>Get <span className=' textColor'> expert developers</span> on <br />your team, Quick & Easy</p>
        <button className=' btn buildtalk' onClick={() => setButtonPopup(true)}>Let's talk</button>
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

export default Expert
