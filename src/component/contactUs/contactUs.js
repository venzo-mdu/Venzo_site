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
import FbIcon from "../../images/facebook.png"
import TwitterIcon from "../../images/tiwerr.png"
import LinkedinIcon from "../../images/linkedin.png"
import InstaIcon from "../../images/insta.png"
import youtube from '../../images/youtube.png'
function contactUs() {
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
                    <img src={Rectangle} />
                    <div className='lin1'>
                        <img className='ph_icon1' src={phone} alt='ph_icon'/>
                        <h5 className='country1'><u>INDIA</u><br /><span className='phn'>+91 9840594865</span></h5>
                        <p className='country1'><u>USA</u><br /><span className='phn'>+1 325 271 4695 </span></p>
                    </div>
                    <div className='lin2'>
                        <img className='ph_icon1' src={mail} alt='mail_icon'/>
                        <p className='careers1 car1'><u>Business</u><br /> <span className='phn'>bd@venzotechnologies.com </span></p><br id='careBreak'></br>
                        <p className='careers1'><u>Careers</u><br /> <span className='phn'>hrteam@venzotechnologies.com </span></p>
                    </div>
                    <div className='lin3'>
                        <img className='ph_icon1' src={location} alt='location_icon'/>
                        <p className='address1'><u>CHENNAI</u><br /> <span className='addrs'>Purva Primus, 8th Floor, No.236,<br />Old Mahabalipuram Rd, Thoraipakkam,<br />Chennai-600097,Tamil Nadu, India.</span></p>
                        <br></br>
                        <p className='address1'><u>MADURAI</u><br /> <span className='addrs'>Plot No: 16,5/244,<br />Maruthupandiar 1st Cross street,<br />JJ Nagar, Madurai – 625020,Tamil Nadu, India.</span></p>
                    </div>
                </div>
                <div className='ContForm'>
                    <p className='formTitle'>Let’s catch the initial spark!</p>
                    <input className='Fname' type="text" placeholder='Name*'></input>
                    <input className='Femail' type="text" placeholder='Email*'></input>
                    <input className='Fphone' type="phone" placeholder='Mobile number'></input>
                    <textarea className='Fmessage' placeholder='Message*'></textarea>
                    <button className='Fbutton'>Submit</button>

                </div>
            </div>
            <div className='mediaIocn'>
                <p className='icontitle'>connect with us</p>
                <div className='mediaIcons'>
                    <img className='icons1' src={FbIcon} alt='fbIcon'></img>
                    <img className='icons1' src={TwitterIcon} alt='twitterIcon'></img>
                    <img className='icons1' src={LinkedinIcon} alt='linkedIcon'></img>
                    <img className='icons1' src={InstaIcon} alt='instaIcon'></img>  
                    <img className='icons1' src={youtube} alt='youtube'></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default contactUs