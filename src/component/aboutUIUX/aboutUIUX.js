import React,{useState} from 'react'
import "../aboutUIUX/aboutUIUX.css"
import Popup from '../careersPage2/popup/popup'
import rightArrow from "../../images/Full cycle arrow-gradient.svg"
import axios from 'axios'
function AboutUIUX() {
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
        <>
            <section>
            <div className='aboutUIUXRes'>
            <div className='digitalProducts'>
                        <p id='digitalLine1'>We Design  <span id="usable">Incredible</span>&nbsp;<br></br> Interfaces For The Digital Realm.</p>
                        <p id='digitalLine2'>Our UI/UX design company incorporates research and user-centric innovations to enhance user experience. Our products are as addictive as they are good-looking. UI/UX design services involve five steps: mind map + wireframes + design concept + Figma design + clickable prototype with UI kit. </p>
                        <p id='digitalLine3' onClick={() => setButtonPopup(true)}>REQUEST PROTOTYPE <img src={rightArrow} alt='rightArrow'></img> </p>
                    </div>
            </div>

                <div className='aboutUIUX'>
                    <div className='digitalProducts'>
                        <p id='digitalLine1'>We design <span id="usable">Incredible</span><br></br>Interfaces For The Digital Realm.</p>
                        <p id='digitalLine2'>Our UI/UX design company incorporates research and user-centric innovations to enhance user experience. Our products are as addictive as they are good-looking. UI/UX design services involve five steps: mind map + wireframes + design concept + Figma design + clickable prototype with UI kit. </p>
                        <p id='digitalLine3' onClick={() => setButtonPopup(true)}>REQUEST PROTOTYPE <img src={rightArrow} alt='rightArrow'></img> </p>
                    </div>
                </div>
            </section>

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

        </>
    )
}

export default AboutUIUX;