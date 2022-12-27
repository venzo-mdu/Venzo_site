import React from 'react'
import '../join/join.css'
import JoinusImg from '../../images/joinUs.png'
import JoinusImgRes from '../../images/joinRes.png'
import rightArrow from '../../images/devArrow.svg'
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
function Join() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>  <section>
      <div className='joinus'>
        <div className='innerJoin'>
          <img className="joinImg" src={JoinusImg} alt='joinus'></img>
          {/* <img className="joinImgRes" src={JoinusImgRes} alt='joinusRes'></img> */}
          <div className='innerText'>
            <p id='innerTextTitle'>Join with us</p>
            <p id='innerTextPara'>Here are some career pathways to consider if you enjoy working with others.</p>
            <p id='applyNow' onClick={() => setButtonPopup(true)}>Apply Now<img src={rightArrow} alt='rightArrow'></img></p>
          </div>
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

export default Join