import React,{useState} from 'react'
import '../mobility/mobility.css'
import Popup from '../../careersPage2/popup/popup'
function Mobility() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
    <div className='mobility'>
    <div className='buildProduct'>
                    <p className='buildText'>How to build an end-to-end <span className=' textColor'> <br/>secured Web Applications? </span></p>
                    <button className=' btn buildtalk' onClick={() => setButtonPopup(true)}>Lets Talk</button>
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

export default Mobility

