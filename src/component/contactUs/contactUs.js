import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import Rectangle from '../../images/colorLine.png'
import phone from '../../images/phone.png'
import mail from '../../images/mail.png'
import location from '../../images/location.png'
import './contactus.css'
import './laptopL.css'
import './laptop.css'
import './tablet.css'
import './mobile.css'
import FbIcon from "../../images/contactUs/blackicon5.png"
import TwitterIcon from "../../images/contactUs/blackicon1.png"
import LinkedinIcon from "../../images/contactUs/blackicon2.png"
import InstaIcon from "../../images/contactUs/blackicon3.png"
import youtube from '../../images/contactUs/blackicon4.png'
import axios from 'axios'
import { useState } from 'react'
import Popup from '../careersPage2/popup/popup'
import {toMail} from '../../config/config'
import {toEnquiryMail} from '../../config/config'

import success from '../../images/successfully.png'
function ContactUs() {


    console.log(toMail)

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
            subject: "Venzo Enquiry From :Contact-us Form"
        }
        const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
        console.log(emailResponse)
        setEmailInput(
            {
                name: "",
                email: "",
                mobile: "",
                message: ""
            }
        )

    }
    return (
        <div>
            <Header flag='header2' />
            <div className='help'>
                <p className='helpTitle1'>We are here to Help!</p>
                <p className='helDes'>Get your business raised with the latest tech from our app specialists from Venzo.</p>
            </div>
            <div className='contactUs1'>
                <div className='cont'>
                    <p className='contactTitle' >Got an idea?<br />Let's get in touch!</p>
                    <img src={Rectangle} alt="rectangle" />
                    <div className='lin1'>
                        <img className='ph_icon1' src={phone} alt='ph_icon' />
                        <h5 className='country1'><u>INDIA</u><br /><span className='phn'>+91 9840594865</span></h5>
                        <p className='country1'><u>USA</u><br /><span className='phn'>+1 325 271 4695 </span></p>
                    </div>
                    <div className='lin2'>
                        <img className='ph_icon1' src={mail} alt='mail_icon' />
                        <p className='careers1 car1'><u>Business</u><br /> <span className='phn'>bd@venzotechnologies.com </span></p><br id='careBreak'></br>
                        <p className='careers1'><u>Careers</u><br /> <span className='phn'>hrteam@venzotechnologies.com </span></p>
                    </div>
                    <div className='lin3'>
                        <img className='ph_icon1' src={location} alt='location_icon' />
                        <p className='address1'><u>CHENNAI</u><br /> <span className='addrs'>Spero Sierra, 1st Floor, Awfis,<br />Plot No 21, Bethel Nagar Street, Industrial Estate,<br />Perungudi , Chennai – 600096,Tamil Nadu, India.</span></p>
                        <br></br>
                        <p className='address1'><u>MADURAI</u><br /> <span className='addrs'>Plot No: 16,5/244,<br />Maruthupandiar 1st Cross street,<br />JJ Nagar, Madurai – 625020,Tamil Nadu, India.</span></p>
                    </div>
                </div>
                <div className='ContForm'>
                    <form onSubmit={sendEmail}>
                        <p className='formTitle'>Let’s catch the initial spark!</p>
                        <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
                        <input className='Femail' name='email' type='email' value={emailInput["email"]} onChange={handleChange}  placeholder='Email*' required />
                        <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
                        <textarea className='Fmessage1' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message' required></textarea>
                        <button type='submit' className='Fbutton2'>Submit</button>
                    </form>

                </div>
            </div>

            <div className='mediaIocn'>
                <p className='icontitle'>Connect with us</p>
                <div className='mediaIcons'>
                    {/* <img className='fbicons1' src={FbIcon} alt='fbIcon'></img> */}
                    <a href='https://www.facebook.com/VenzoTechnologies/'target={"_blank"} className='fbicons1'> <p ></p></a>
                    <a href='https://twitter.com/Venzo_Tech/' target={"_blank"} className='twitericons1' > <p ></p></a>
                    <a href='https://www.linkedin.com/company/venzo-technologies/' target={"_blank"} className='linkedicons1'> <p ></p></a>
                    <a href='https://www.instagram.com/venzo_tech/' target={"_blank"} className='instaicons1'> <p ></p></a>
                    <a href='https://www.youtube.com/channel/UCebtP01QSLIIRNrye8Zl4HQ' target={"_blank"}  className='youtubeicons1'> <p></p></a>

                    {/* <img className='twitericons1' src={TwitterIcon} alt='twitterIcon'></img>
                    <img className='linkedicons1' src={LinkedinIcon} alt='linkedIcon'></img>
                    <img className='instaicons1' src={InstaIcon} alt='instaIcon'></img>
                    <img className='youtubeicons1' src={youtube} alt='youtube'></img> */}
                </div>
            </div>


            <Footer />

            <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
                <div className='thankPop'>
                    <p className='subSucss'>Submitted successfully</p>
                    <img src={success} alt='success' className='succImg' />
                    <p className='thanksMsg'>We've received your message loud and clear.<br></br>  Our team will be in touch soon..</p>
                </div>
            </Popup>
        </div>
    )
}

export default ContactUs