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
import appCard30 from '../../../images/appdevelopment/appd30.png'
import appCard31 from '../../../images/appdevelopment/appd31.png'
import appCard32 from '../../../images/appdevelopment/appd32.png'
import appCard33 from '../../../images/appdevelopment/appd33.png'
import appCard34 from '../../../images/appdevelopment/appd34.png'
import appCard35 from '../../../images/appdevelopment/appd35.png'
import appCard36 from '../../../images/appdevelopment/appd36.png'
import appCard37 from '../../../images/appdevelopment/appd37.png'




function cando() {
  return (
    <div className='canDo'>
      <p id='canDotitle'>Our spectrum of services </p>
      <p id='canDotext'>At Venzo, we are committed to delivering transformative results incorporating the agile app development methodology. With meticulous planning, we develop best-in-class apps that simplify the business process with end-to-end support and accelerate your growth.</p>


      <div className='candoCards'>
        
        <div className='candocards1'>
        <img className='cardsIcon' src={appCard11} alt='cardsicon'></img>
        <p id='cardsTitle2'>Native App Development </p>
          <span id='cardsTitle1'>Our developers’ Native apps assure optimized performance leveraging the latest technology.</span>
        </div>

        <div className='candocards2'>
        <img className='cardsIcon' id='rescardsIcon' src={appCard10} alt='cardsicon'></img>
          <p id='cardsTitle2'>Hybrid App Development </p>
          <span id='cardsTitle1'>Our hybrid apps are highly scalable, budget friendly, and cross-platform compatible to increase ROI. </span>
          </div>

          <div className='candocards3'>
          <img className='cardsIcon' src={appCard8} alt='cardsicon'></img>
          <p id='cardsTitle2'>Enterprise App Development</p>
          <span id='cardsTitle1'>Designing the secured web gateways to connect users and services. </span>
          </div>

          <div className='candocards4'>
          <img className='cardsIcon' src={appCard9} alt='cardsicon'></img>
          <p id='cardsTitle2'>Ecommerce App Development </p>
          <span id='cardsTitle1'>We make your ecommerce app the most convenient and preferred shopping avenue.</span>
          </div>

          </div>
    </div>
  )
}

export default cando