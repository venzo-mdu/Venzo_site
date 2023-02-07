import React,{useState} from 'react'
import '../discussion/discussion.css'
import lineImg from '../../../images/horizLinecareers2.png'
import axios from 'axios'
function Discussion() {
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
        <p id='joinourteamText'>Join our team</p>
        <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' />
        <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' />
        <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' />

        <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*'></textarea>
        <button type='submit' className='Fbutton'>Submit</button>
        </form>

                </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default Discussion