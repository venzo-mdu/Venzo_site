import React from 'react'
import '../customized/customized.css'

import CustomBg from '../../../images/appdevelopment/appd1.png'
import CustomBgRes from '../../../images/appdevelopment/appd13.png'

function customized() {
  return (
    <div className='customized'>
      <img className='customizedImages' src={CustomBg} alt='customizedbg'></img>
      <img className='customizedImagesRes' src={CustomBgRes} alt='customizedbgRes'></img>
      <div className='custmoizedText'>
        <p id='customizeText'>We build most Innovative & <span id='hiringGradient'><br></br>User-friendly Apps</span></p>
      </div>
    </div>
  )
}

export default customized