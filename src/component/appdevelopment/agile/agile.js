import React from 'react'
import '../agile/agile.css'
import appDev1 from '../../../images/appdevelopment/appd2.png'
import appDev2 from '../../../images/appdevelopment/appd3.png'


function agile() {
  return (
   <div className='agileDev'>
       <p id='agileDevTitle'>Experience World-class Agile app Development for both platforms</p>
   
    <div className='agileCards'>
        <div className='agileCard1'>
        <img className='agileimage' src={appDev1} alt='agileImage'></img>
        <div className='agilecardText'>
            <p id='agileTitle'>Android Development</p>
            <p id='agileText'>Venzo Technologies goes far beyond software product development to assist its clients in identifying emerging trends, understanding.</p>
            <button className='agileDevbutton border-gradient-purple'>Let's Talk</button>
        </div>
        </div>

        <div className='agileCard1'>
        <img className='agileimage' src={appDev2} alt='agileImage'></img>
        <div className='agilecardText'>
            <p id='agileTitle'>iOS Development</p>
            <p id='agileText'>Venzo Technologies goes far beyond software product development to assist its clients in identifying emerging trends, understanding.</p>
            <button className='agileDevbutton border-gradient-purple' >Let's Talk</button>
        </div>
        </div>
    </div>
   
   </div>
  )
}

export default agile