import React from 'react'
import '../cando/cando.css'

import appCard8 from '../../../images/appdevelopment/appd8.png'
import appCard9 from '../../../images/appdevelopment/appd9.png'
import appCard10 from '../../../images/appdevelopment/appd10.png'
import appCard11 from '../../../images/appdevelopment/appd11.png'
import appCard17 from '../../../images/appdevelopment/appd17.png'
import appCard14 from '../../../images/appdevelopment/appd14.png'
import appCard15 from '../../../images/appdevelopment/appd15.png'
import appCard16 from '../../../images/appdevelopment/appd16.png'


function cando() {
  return (
    <div className='canDo'>
      <p id='canDotitle'>What We can do for you</p>
      <p id='canDotext'>We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors. Our IT solutions are fully functional, robust, and scalable that empowers Start-ups, SMEs and Enterprises.</p>


      <div className='candoCards'>
        <div className='candocards1'>
          <img className='cardsIcon' src={appCard11} alt='cardsicon'></img>
          <img src={appCard17} className='canDocards' alt='candocards'></img>
          <p id='cardsTitle'>Mobile Application Development</p>
        </div>
        <div className='candocards2'>
          <img className='cardsIcon' src={appCard10} alt='cardsicon'></img>
          <p id='cardsTitle2'>Web App Development</p>
          <img src={appCard14} className='canDocards' alt='candocards'></img>
          <p id='cardsTitle1'>Venzo Technologies
goes far beyond software product development to assist its clients in identifying emerging trends, understanding.</p>
        </div>
        <div className='candocards3'>
          <img className='cardsIcon' src={appCard8} alt='cardsicon'></img>
          <img src={appCard15} className='canDocards' alt='candocards'></img>
          <p id='cardsTitle'>Enterprise App Development</p>
        </div>
        <div className='candocards4'>
          <img className='cardsIcon' src={appCard9} alt='cardsicon'></img>
          <img src={appCard16} className='canDocards' alt='candocards'></img>
          <p id='cardsTitle'>UI/UX Design</p>
        </div>
      </div>
    </div>
  )
}

export default cando