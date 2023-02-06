import React from 'react'
import '../venzostaff/venzostaff.css'
import Popup from '../../careersPage2/popup/popup'
import RightArrow from '../../../images/devArrow.svg'
import { useState } from 'react'
function Venzostaff() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className='venzoSA'>
        <div className='bannerText'>
          <p id='venzoSATitle'>Hire Dedicated <br/> Developers </p>
          <p id='venzoSAText'>Hire our highly qualified and experienced developers and designers to augment your team and assist you in creating complex software solutions based on your business requirements in cost-effective measures.</p>
          <p id='venzoSATalk' onClick={() => setButtonPopup(true)}>Talk to us <img src={RightArrow} alt='talktous'></img></p>
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
    </>
  )
}

export default Venzostaff