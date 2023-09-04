import React from 'react'
import '../../appdevelopment/techs/techs.css'


import appd18 from '../../../images/appdevelopment/appd18.png'
import appd19 from '../../../images/appdevelopment/appd19.png'
import appd20 from '../../../images/appdevelopment/appd20.png'
import appd21 from '../../../images/appdevelopment/appd21.png'
import appd22 from '../../../images/appdevelopment/appd22.png'
import appd23 from '../../../images/appdevelopment/appd23.png'
import appd24 from '../../../images/appdevelopment/appd24.png'
import appd25 from '../../../images/appdevelopment/appd25.png'
import appd26 from '../../../images/appdevelopment/appd26.png'
import appd27 from '../../../images/appdevelopment/appd27.png'
import appd28 from '../../../images/appdevelopment/appd28.png'
import appd29 from '../../../images/appdevelopment/appd29.png'




function techs() {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Manrope' rel='stylesheet'></link>
      <div className='tech'>
        <div className='techsweUse'>
          <div className='techsText'>
            <p id='techsTitle'><span id='gradienttechsText'>Technologies</span><br id='brinTech'></br>we use</p>
            <p id='techsrightText'>It's challenging to keep up with all the new technologies appearing on various fronts.However, we ensure that our team employs state-of-the-art technologies to cater to your needs.  </p>


          </div>
        </div>
        <div className='techsGrid'>
          <div id='designGrid'>
            <p id='techsName'>Design</p>
            <img src={appd28} className='techsIcon1' alt='techsicon'></img>
            <img src={appd26} className='techsIcon' alt='techsicon'></img>
            <img src={appd27} className='techsIcon' alt='techsicon'></img>
            <img src={appd29} className='techsIcon' alt='techsicon'></img>

          </div>
          <div id='mobileGrid'>
            <p id='techsName'>Mobile Technology</p>
            <img src={appd19} className='techsIcon1' alt='techsicon'></img>
            <img src={appd24} className='techsIcon' alt='techsicon'></img>
          </div>
          <div id='frontendGrid'>
            <p id='techsName'>Frontend Technology</p>
            <img src={appd25} className='techsIcon1' alt='techsicon'></img>
            <img src={appd24} className='techsIcon' alt='techsicon'></img>
            <img src={appd22} className='techsIcon' alt='techsicon'></img>
            <img src={appd23} className='techsIcon' alt='techsicon'></img>
          </div>
          <div id='backendGrid'>
            <p id='techsName'>Backend Technology</p>
            <img src={appd21} className='techsIcon1' alt='techsicon'></img>
            <img src={appd18} className='techsIcon' alt='techsicon'></img>
            <img src={appd20} className='techsIcon' alt='techsicon'></img>
          </div>
        </div>
      </div>
    </>

  )
}

export default techs