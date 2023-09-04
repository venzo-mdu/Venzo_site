import React from 'react'
import '../customized/customized.css'

// import CustomBg from '../../../images/appdevelopment/appd1.png'
import CustomBg from '../../../images/allpageabanner/app_dev_banner_1/app_dev_banner_1_1x.webp'
import CustomBgRes from '../../../images/appdevelopment/appd13.png'

function customized() {
  return (
    <div className='customized'>
      <img className='customizedImages' src={CustomBg} alt='customizedbg'></img>
      <img className='customizedImagesRes' src={CustomBgRes} alt='customizedbgRes'></img>
      <div className='custmoizedText'>
        <p id='customizeText'>We build the most Innovative and <span id='hiringGradient'><br></br>User-friendly Apps</span></p>
      </div>
    </div>
  )
}

export default customized