import React,{useState} from 'react'

import Carousel from 'react-bootstrap/Carousel';
import productImage from '../images/productImage.png'
import borderLine from '../images/borderLine.png'


import Header from '../component/header/header'
import Customized from '../component/appdevelopment/customized/customized'
import Cando from '../component/appdevelopment/cando/cando'
import Agile from '../component/appdevelopment/agile/agile'
import Dprocess from '../component/appdevelopment/dprocess/dprocess'
import Offering from '../component/appdevelopment/offering/offering'
import Techs from '../component/appdevelopment/techs/techs'
import Footer from '../component/footer/footer'
import Popup from '../component/careersPage2/popup/popup'
function Appdevelopment() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (

    <div className='appdevbody'>
      <Header flag='header2' />
      <Customized />
      <Cando />
      <Agile />
      <Dprocess />
      <Offering />
      <Techs />

      <div className='awesomeProducts'>
        <p className='awesomeTitle'>Awesome products from <span id='awesomeVenzo'>Venzo !</span></p>
        <Carousel>
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item>
          <Carousel.Item >

            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >

        </Carousel>

      </div>
      <div className='containor3'>
                    <p className='anyIdea'>Build your product <br /><span className=' textColor'>to grow your business</span> </p>
                    <button className=' btn talk' onClick={() => setButtonPopup(true)}>Let's talk</button>
                </div>
      <Footer />

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

export default Appdevelopment