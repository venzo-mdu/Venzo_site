import React from 'react'
import '../venzostaff/venzostaff.css'

import RightArrow from '../../../images/devArrow.svg'

function venzostaff() {
  return (
    <>
      <div className='venzoSA'>
        <div className='bannerText'>
          <p id='venzoSATitle'>Hire Dedicated <br/> Developers </p>
          <p id='venzoSAText'>Hire our highly qualified and experienced developers and designers to augment your team and assist you in creating complex software solutions based on your business requirements in cost-effective measures.</p>
          <p id='venzoSATalk'>Talk to us <img src={RightArrow} alt='talktous'></img></p>
        </div>
      </div>
    </>
  )
}

export default venzostaff