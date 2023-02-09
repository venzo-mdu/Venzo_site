import React from 'react'
import video from '../../images/Video thumbnail.svg'
import arrow from '../../images/devArrow.svg'
import '../../style/style.css'
import '../../style/laptop.css'
import '../../style/laptopL.css'
import '../../style/tablet.css'
import '../../style/mobile.css'
import axios from 'axios'
// import customerContent from '../../content/CustomerContent.json'
import { useState } from 'react'
import toMail from '../../config/config'
import Popup from '../careersPage2/popup/popup'

function Customer() {
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


    <div className='customer'>
      <p className='cus-title'>  We Integrate Traditional Applications and Information Technology Systems <br className='mobileBr' /> with Innovative Customized Application to uphold  your <br className='mobileBr' /> business needs and <br className='mobileBr' /> <br className='webBr' /> <b>Future Growth & Thrive in Markets.</b>  </p>
      <div className='row2'>
        <div className='col4'>
          <p className=' des1'>We break down the custom-built complexities.   Our custom applications are powered by cutting-edge technologies and superior process agility. You benefit from next-generation applications that are tailored to your specific needs without the hassle. </p>
          <p className='readMore1' onClick={() => setButtonPopup(true)}> READ MORE<img className='arrow' src={arrow} alt='arrow' /></p>
        </div>
        <div className='col5'>
          <img className='videoImg' src={video} alt='video' />

        </div>
      </div>
      {/* {customerContent.customer.map((item) => {
               return <div className='customer'>
                    <p className='cus-title'> {item.title}</p>
                    <div className='row2'>
                        <div className='col4'>
                            <p className=' des1'>{item.desc}</p>
                            <p className='readMore1'> {item.readMore}<img className='arrow' src={item.arrow} alt='arrow' /></p>
                        </div>
                        <div className='col5'>
                            <img className='videoImg' src={item.Images} alt='video' />

                        </div>
                    </div>
                </div>
            })} */}
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
    </div>
  )
}

export default Customer