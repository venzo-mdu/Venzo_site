import React from 'react'
import "../pathway/pathway.css"
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
function Pathway() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <section>
          <div className='pathway'>
            <p id="pathwayText">Here are some career pathways to <span id="gradientTextPathway">consider if you enjoy working with others.</span></p>
            <button className='pathwayButton' onClick={() => setButtonPopup(true)}>Lets Talk</button>
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

export default Pathway;