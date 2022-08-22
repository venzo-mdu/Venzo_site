import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import Rectangle from '../../images/Rectangle 118.png'
import phone from '../../images/phone.png'
import mail from '../../images/mail.png'
import location from '../../images/location.png'
import './contactus.css'
import FbIcon from "../../images/Fb.svg"
import TwitterIcon from "../../images/Twitter.svg"
import LinkedinIcon from "../../images/Linkedin.svg"
import InstaIcon from "../../images/insta.svg"
function contactUs() {
    return (
        <div>
            <Header flag='header1' />
            <Header flag='header2' />
            <div className='help'>
                <p className='helpTitle'>We are here to Help!</p>
                <p className='helpDesc'>Get your business raised with the latest tech from our app specialists from Venzo.</p>
            </div>
            <div className='contactUs1'>
                <div className='contact1'>
                    <p className='contactTitle' >Got an idea?<br />Let's get in touch!</p>
                    <img src={Rectangle} />
                    <div className='lin1'>
                        <img className='ph_icon' src={phone} />
                        <h5 className='country1'>INDIA<br /> <span className='phn'>+91 9840594865</span></h5>
                        <p className='country1'>USA<br /> <span className='phn'>+1 325 271 4695 </span></p>
                    </div>
                    <div className='lin2'>
                        <img className='ph_icon' src={mail} />
                        <p className='careers1'>Business<br /> <span className='phn'>bd@venzotechnologies.com </span></p>
                        <p className='careers1'>Careers<br /> <span className='phn'>hrteam@venzotechnologies.com </span></p>
                    </div>
                    <div className='lin3'>
                        <img className='ph_icon' src={location} />
                        <p className='address1'>CHENNAI<br /> <span className='addrs'>Purva Primus, 8th Floor, No.236,<br />Old Mahabalipuram Rd, Thoraipakkam,<br />Chennai-600097,Tamil Nadu, India.</span></p>
                        <p className='address1'> MADURAI<br /> <span className='addrs'>Plot No: 16,5/244,<br />Maruthupandiar 1st Cross street,<br />JJ Nagar, Madurai – 625020,Tamil Nadu, India.</span></p>
                    </div>
                </div>
                <div className='contactform'>
                    <p className='formTitle'>Let’s catch the initial spark!</p>
                    <input className='Fname' type="text" placeholder='Name*'></input>
                    <input className='Femail' type="text" placeholder='Email*'></input>
                    <input className='Fphone' type="phone" placeholder='Mobile number'></input>
                    <textarea className='Fmessage' rows="5" cols="50" placeholder='Message*'></textarea>
                    <button className='Fbutton'>Submit</button>
 
                </div>
            </div>
            {/* <div className='mediaIocn'>
                <p className='icontitle'>connect with us</p>
                <div>
                <img id='icons1' src={FbIcon} alt='fbIcon'></img>
                <img id='icons1' src={TwitterIcon} alt='twitterIcon'></img>
                <img id='icons1' src={LinkedinIcon} alt='linkedIcon'></img>
                <img id='icons1' src={InstaIcon} alt='instaIcon'></img>                </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default contactUs