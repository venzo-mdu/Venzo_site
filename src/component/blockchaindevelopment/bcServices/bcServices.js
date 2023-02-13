import React,{useState}from 'react'
import '../bcServices/bcServices.css'
import Popup from '../../careersPage2/popup/popup'
import bcd33 from '../../../images/blockchaindevelopment/bcd33.png'

import axios from 'axios'
import toMail from '../../../config/config'
import success from '../../../images/successfully.png'

function BcServices() {
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
      message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
      subject: "blockchain-development-company"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)
    setSubmit(true)
    setEmailInput(
      { name: "",
      email: "",
      mobile: "",
      message: ""}
  )

  }
    return (
        <div className='bcServices'>
            {/* <img className='bcServicesBG' src={bcd30} alt='backgroundImage'></img> */}

            <div className='innerbcServices'>
                <div className='bcServicesText'>
                    <div className='bcServicesLeft'>
                        <p id='bcServicesTitle1'>Our Services</p>
                        <p id='bcServicesTitle2'>What we <br></br>can do for you</p>
                    </div>
                    <div className='bcServicesRight'>
                        <p id='bcServicesrightText'>As revolutionary as it sounds, enterprise blockchain solutions are truly a mechanism that brings everyone to the highest degree of accountability. We help start-ups, businesses and enterprises to design more transparent, efficient and automated versions of their businesses with our wide spectrum of blockchain development services.</p>
                    </div>
                </div>


                <div className='bctalkServices'>
                    <div className='bcservicesCards' id='smartcontarcts'>
                        <img className='bcservicescardIcon' src={bcd33} alt='icon'></img>
                        <p id='bcCardtitle'>Smart Contracts Development</p>
                        <p id='bcCardtext'>Empowering businesses to automate the execution of activities while ensuring the integrity of multi-party agreements.</p>
                        <button className='bcServicesbutton' onClick={() => setButtonPopup(true)}>Let's Talk</button>
                    </div>
                    <div className='bcservicesCards'>
                        <img className='bcservicescardIcon' src={bcd33} alt='icon'></img>
                        <p id='bcCardtitle'>Blockchain <br></br>Technology Consulting</p>
                        <p id='bcCardtext'>A one-on-one consulting session helping you design an operational blockchain business network that is secure, democratic and ahead of the curve.</p>
                        <button className='bcServicesbutton' onClick={() => setButtonPopup(true)}>Let's Talk</button>
                    </div>
                    <div className='bcservicesCards'>
                        <img className='bcservicescardIcon' src={bcd33} alt='icon'></img>
                        <p id='bcCardtitle'>NFT <br></br>Solutions</p>
                        <p id='bcCardtext'>Empowering businesses to automate the execution of activities while ensuring the integrity of multi-party agreements.</p>
                        <button className='bcServicesbutton' onClick={() => setButtonPopup(true)}>Let's Talk</button>
                    </div>
                </div>

                <div className='bcserviceChoose'>
                    <p id='bcservicechooseTitle'>Why Choose <span id='bcservicegradientText'> VENZO</span>  as Blockchain Development Company?</p>
                    <p id='bcservicechooseText'>We believe in providing guaranteed results, no matter how complex your project is. We practice what we preach and we deliver what we promise.</p>
                </div>

                <div className='bcserviceschooseCards'>
                    <div className='bcserviceschooseCard1'>
                        <p id='bcserviceschooseCardText'>Dynamic Engagement Model</p>
                    </div>
                    <div className='bcserviceschooseCard2'>
                        <p id='bcserviceschooseCardText'>Client Association at Each Stage</p>

                    </div>
                    <div className='bcserviceschooseCard3'>
                        <p id='bcserviceschooseCardText'>Use of <br></br>Latest  Technologies</p>

                    </div>
                    <div className='bcserviceschooseCard4'>
                        <p id='bcserviceschooseCardText'>360° <br></br>Holistic Approach</p>

                    </div>
                </div>
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
       
          <form onSubmit={sendEmail}>
            <p className='formTitle1'>Let’s catch the initial spark!</p>
            <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
            <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
            <input className='Fphone1' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
            <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message'></textarea>
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

export default BcServices