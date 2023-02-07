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
import Popup from '../careersPage2/popup/popup'
  
function Customer() {
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

        
        <div  className='customer'>
            <p className='cus-title'>  We Integrate Traditional Applications and Information Technology Systems <br className='mobileBr'/> with Innovative Customized Application to uphold  your <br className='mobileBr'/> business needs and <br className='mobileBr'/> <br className='webBr' /> <b>Future Growth & Thrive in Markets.</b>  </p>
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

export default Customer