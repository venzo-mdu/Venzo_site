import React, { useState } from 'react'
import Header from '../header/header'
import line from '../../images/Vector 76.svg'
import line1 from '../../DMpage/Vector 82.png'
import DevType from './DevType'
import DevCarousel from './devCarousel'
import colorArrow from '../../images/devArrow.svg'
import success from '../../images/successfully.png'

import './development.css'
import './laptopL.css'
import './laptop.css'
import './tablet.css'
import './mobile.css'
import Footer from '../footer/footer'
import Popup from '../careersPage2/popup/popup'
import axios from 'axios'
import toMail from '../../config/config'
import {toEnquiryMail} from '../../config/config'

function Development() {
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
        setSubmit(true)

        const body = {
            to: toEnquiryMail,
            message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
            subject: "Venzo Enquiry From: Lets Talk Form"
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
        <div>
            <Header flag='header2' />
            <div className='component'>
                <div className='sect1'>
                    <p className='web_Title'>Enabling businesses stand out <br/> securely in the dynamic digital <br/> environment territory</p>
                    {/* <p className="webDesc">We build sites that build your business</p> */}
                    {/* <p className="knowmore" onClick={() => setButtonPopup(true)}>KNOW MORE <img src={colorArrow} className='whiteArrow' alt="black-arrow"></img></p> */}
                </div>
            </div>
            <div className="sect2" >
                <p className='sect2_title'> What we do? </p>
                <div className='sect2-desc'>
                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Wordpress Development </p>
                        <p className='Webdesc-detail'> Developing customized WordPress websites for businesses based on parameters like adaptability, dynamic functionality, and security.  </p>
                        <img className="lineM1" src={line1} alt="line"/>
                    </div>

                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Ecommerce Development </p>
                        <p className='Webdesc-detail'>Offering a blended connection with the present and potential customers through accelerated and innovative e-commerce solutions.</p>
                        <img className='Vline1' src={line} alt="line"></img>
                        <img className="lineM1" src={line1} alt="line"/>

                    </div>
                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Custom Website Development </p>
                        <p className='Webdesc-detail'>Integrating business solutions in future ready custom websites to seize growth opportunities in the digital economy. </p>
                        <img className='Vline1' src={line} alt="line"></img>

                    </div>
                </div>
            </div>
            <DevType />
            <hr className='hr_line2' />
            <p className='sect3_title'> We  worked with </p>
            <DevCarousel />
            <div>
                <div className='containor12'>
                    <p className='anyIdea12'>Build your website <br /><span className=' textColor'>to grow your business  </span> </p>
                    <button className=' btn talk12' onClick={() => setButtonPopup(true)}>Let's Talk</button>
                </div>
            </div>
            <Footer />

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form onSubmit={sendEmail}>
            <p className='formTitle1'>Let’s catch the initial spark!</p>
            <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
            <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
            <input className='Fphone1' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
            <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message' required></textarea>
            <button type='submit' className='Fbutton'>Submit</button>
          </form>
            </Popup>

            <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          <p className='subSucss'>Submitted successfully</p>
          <img src={success} alt='success' className='succImg'/>
          <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
        </div>
      </Popup>

        </div>
    )
}

export default Development