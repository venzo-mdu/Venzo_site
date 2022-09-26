import React from 'react'
import '../venzostaff/venzostaff.css'

import Bannerimage from '../../../images/bannerSA.png'
import RightArrow from '../../../images/Read more arrow-gradient.svg'

function venzostaff() {
  return (
   <>
   <div className='venzoSA'>
       <img className='staffBanner' src={Bannerimage} alt='bannerimage'></img>
       <div className='bannerText'>
       <p id='venzoSATitle'>Efficient, responsive&affordable developers</p>
       <p id='venzoSAText'>Hire our highly qualified and experienced developers and designers to augment your team and assist you in creating complex software solutions based on your business requirements in cost-effective measures.</p>
       <p id='venzoSATalk'>Talk to us <img src={RightArrow} alt='talktous'></img></p>
       </div>
   </div>
   </>
  )
}

export default venzostaff