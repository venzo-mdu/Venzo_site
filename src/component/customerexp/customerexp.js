import React from 'react'
import '../customerexp/customerexp.css'

import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'

  
function Customerexp() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <section>
          <div className='customerExperiance1'>
           <h3>Contact us - Embrace transformation with confidence by leveraging<br></br><span id='through'>our customised quality engineering services. (Speak to us)</span></h3>
           <button className='reachus' onClick={() => setButtonPopup(true)}>Reach us</button>
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

export default Customerexp