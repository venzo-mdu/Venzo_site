import React,{useState} from 'react'
import '../bcBanner/bcBanner.css'

import Popup from '../../careersPage2/popup/popup' 

function BcBanner() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
    <div className='bcBanner'>
      <div className='innerbcBanner'>
      <p id='bcbannerTitle'><span id='bcBannergradienttext'>Blockchain, Metaverse</span>, AI/ML, IoT and Mobility Solutions Provider</p>
      <p id='bcbannerText'>We build stellar products with elite blockchain engineers for global web3 startups</p>
      <div className='bcdemoButton' onClick={() => setButtonPopup(true)}>Let’s Talk</div>
      </div>
    </div>
    <div className='bcBannerRes'>
      <div className='innerbcBannerRes'>
      <p id='bcbannerTitleRes'><span id='bcBannergradienttext'>Blockchain, Metaverse</span>, AI/ML, IoT and Mobility Solutions Provider</p>
      <p id='bcbannerTextRes'>We build stellar products with elite blockchain engineers for global web3 startups</p>
      <div className='bcdemoButton'>Let’s Talk</div>
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

export default BcBanner