import React from 'react'
import '../agile/agile.css'
import appDev1 from '../../../images/appdevelopment/appd2.png'
import appDev2 from '../../../images/appdevelopment/appd3.png'


function agile() {
  return (
   <div className='agileDev'>
       <p id='agileDevTitle'>Delivering stellar app development services across all platforms!</p>
   
    <div className='agileCards'>
        <div className='agileCard1'>
        <img className='agileimage' src={appDev1} alt='agileImage'></img>
        <div className='agilecardText'>
            <p id='agileTitle'>Android Development</p>
            <p id='agileText'>Our specialists are fully versed in every facet of the Android OS, having worked with various ecosystems of Android smartphones.</p>
            <div className='agileDevbutton border-gradient-purple'>Let's Talk</div>
        </div>
        </div>

        <div className='agileCard1'>
        <img className='agileimage' src={appDev2} alt='agileImage'></img>
        <div className='agilecardText'>
            <p id='agileTitle'>iOS Development</p>
            <p id='agileText'>We create feature-rich, secure, and interactive iOS apps for different business verticals.</p>
            <div className='agileDevbutton border-gradient-purple' >Let's Talk</div>
        </div>
        </div>
    </div>
   
   </div>
  )
}

export default agile