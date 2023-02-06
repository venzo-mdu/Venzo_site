import React,{useState} from 'react'
import './expert.css'
import Popup from '../../careersPage2/popup/popup';

function Expert() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='expert'>
      <div className='buildProduct'>
        <p className='buildText'>Get <span className=' textColor'> expert developers</span> on <br />your team, Quick & Easy</p>
        <button className=' btn buildtalk' onClick={() => setButtonPopup(true)}>Let's talk</button>
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
    </div>
  )
}

export default Expert
