import React,{useState} from 'react'
import "../aboutUIUX/aboutUIUX.css"
import Popup from '../careersPage2/popup/popup'
import rightArrow from "../../images/Full cycle arrow-gradient.svg"
function AboutUIUX() {
    const [buttonPopup, setButtonPopup] = useState(false);
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
        <p id='joinourteamText'>Join our team</p>
        <input className='Fname' type="text" placeholder='Name*'></input>
        <input className='Femail' type="text" placeholder='Email*'></input>
        <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
        <input className='file' type="file" placeholder='choose file'></input>
        <textarea className='Fmessage' placeholder='Message*'></textarea>
        <button className='Fbutton'>Submit</button>
      </Popup>
        </>
    )
}

export default AboutUIUX;