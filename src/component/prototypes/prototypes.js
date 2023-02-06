import React from 'react'
import "../prototypes/prototypes.css"
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
function Prototypes() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <section>
          <div className='prototypes'>
           <h1>Build Your Prototypes<br></br><span id="days">in 7 days</span></h1>
           <button className='design'onClick={() => setButtonPopup(true)} >Request a design</button>
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

export default Prototypes