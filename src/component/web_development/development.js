import React, { useState } from 'react'
import Header from '../header/header'
import line from '../../images/Vector 76.svg'
import line1 from '../../DMpage/Vector 82.png'
import DevType from './DevType'
import DevCarousel from './devCarousel'
import colorArrow from '../../images/devArrow.svg'
import './development.css'
import './laptopL.css'
import './laptop.css'
import './tablet.css'
import './mobile.css'
import Footer from '../footer/footer'
import Popup from '../careersPage2/popup/popup'
import axios from 'axios'
import toMail from '../../config/config'
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
        <div>
            <Header flag='header1' />
            <Header flag='header2' />
            <div className='component'>
                <div className='sect1'>
                    <p className='web_Title'>Expand your digtial <br className='mobilBr' />territory</p>
                    <p className="webDesc">We build sites that build your business</p>
                    <p className="knowmore" onClick={() => setButtonPopup(true)}>KNOW MORE <img src={colorArrow} className='whiteArrow' alt="black-arrow"></img></p>
                </div>
            </div>
            <div className="sect2" >
                <p className='sect2_title'> What we do? </p>
                <div className='sect2-desc'>
                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Wordpress Development</p>
                        <p className='Webdesc-detail'>We offer refined customized applications that streamline your.</p>
                        <img className="lineM1" src={line1} alt="line"/>
                    </div>

                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Ecommerce Development</p>
                        <p className='Webdesc-detail'>We offer refined customized applications that streamline your.</p>
                        <img className='Vline1' src={line} alt="line"></img>
                        <img className="lineM1" src={line1} alt="line"/>

                    </div>
                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Website Development</p>
                        <p className='Webdesc-detail'>We offer refined customized applications that streamline your.</p>
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

export default Development