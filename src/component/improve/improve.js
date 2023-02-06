import React,{useState} from 'react'
import "../improve/improve.css"
import rightArrow from "../../images/Full cycle arrow-gradient.svg"
import Popup from '../careersPage2/popup/popup'

function Improve() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
        <section>
            <div className='improve'>
            <div className='improveSoftware1'>
                        <p id='improveSoftwareLine1'>Next Gen Quality Testing Services for Banks  </p>
                        <p id='improveSoftwareLine2'>Well thought through QA initiatives </p>
                        <p id='improveSoftwareLine3'onClick={() => setButtonPopup(true)}>KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
            </div>
            </div>
            <div className='improveRes'>
            <div className='improveSoftware improveSoftware1'>
                        <p id='improveSoftwareLine1'>Next Gen Quality Testing Services for Banks </p>
                        <p id='improveSoftwareLine2'>Well thought through QA initiatives</p>
                        <p id='improveSoftwareLine3' onClick={() => setButtonPopup(true)} >KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
            </div>
            </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p id='joinourteamText'>Join our team</p>
        <input className='Fname' type="text" placeholder='Name*'></input>
        <input className='Femail' type="text" placeholder='Email*'></input>
        <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
        <input className='file' type="file" placeholder='choose file'></input>
        <textarea className='Fmessage' placeholder='Message*'></textarea>
        <button className='Fbutton'>Submit</button>
      </Popup>

        </section>
  )
}

export default Improve;