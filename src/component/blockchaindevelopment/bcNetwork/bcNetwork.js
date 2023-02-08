import React from 'react'
import '../bcNetwork/bcNetwork.css'

import bcd16 from '../../../images/blockchaindevelopment/bcd16.png'
import bcd13 from '../../../images/blockchaindevelopment/bcd13.png'
import bcd15 from '../../../images/blockchaindevelopment/bcd15.png'
import bcd14 from '../../../images/blockchaindevelopment/bcd14.png'
import bcd17 from '../../../images/blockchaindevelopment/bcd17.png'
import bcd18 from '../../../images/blockchaindevelopment/bcd18.png'
import bcd19 from '../../../images/blockchaindevelopment/bcd19.png'
import bcd32 from '../../../images/blockchaindevelopment/bcd32.png'
import bcd4 from '../../../images/blockchaindevelopment/bcd4.png'
import bcd5 from '../../../images/blockchaindevelopment/bcd5.png'
import bcd6 from '../../../images/blockchaindevelopment/bcd6.png'
import bcd2 from '../../../images/blockchaindevelopment/bcd2.png'
import bcd3 from '../../../images/blockchaindevelopment/bcd3.png'
import bcd7 from '../../../images/blockchaindevelopment/bcd7.png'
import bcd9 from '../../../images/blockchaindevelopment/bcd9.png'
import bcd1 from '../../../images/blockchaindevelopment/bcd1.png'


function bcNetwork() {
  return (
    <div className='bcNetwork'>
      <p id='bcnetworkgradient'>The most trusted way to build future</p>
      <p id='bcnetworkTitle'>Blockchain Networks We Support</p>
      <p id='bcnetworkText'>Equip your business with secure, decentralized, and immutable blockchain solutions. We help start-ups, businesses and enterprises to design more transparent, efficient and automated versions of their businesses with our wide spectrum of blockchain development services.</p>
      <div className='bcnetworkImages'>
        <div className='bcnetworkImage1'>
          <img src={bcd16} alt='networkicon' className='networkIcons'></img>
          <img src={bcd13} alt='networkicon' className='networkIcons'></img>
          <img src={bcd15} alt='networkicon' className='networkIcons'></img>
          <img src={bcd14} alt='networkicon' className='networkIcons'></img>
          <img src={bcd17} alt='networkicon' className='networkIcons'></img>
          <img src={bcd18} alt='networkicon' className='networkIcons'></img>
          <img src={bcd19} alt='networkicon' className='networkIcons'></img>
          <img src={bcd32} alt='networkicon' className='networkIcons'></img>
          <img src={bcd4} alt='networkicon' className='networkIcons'></img>
          <img src={bcd5} alt='networkicon' className='networkIcons'></img>
        </div>
        <div className='bcnetworkImage2'>
          <img src={bcd6} alt='networkicon' className='networkIcons'></img>
          <img src={bcd2} alt='networkicon' className='networkIcons'></img>
          <img src={bcd3} alt='networkicon' className='networkIcons'></img>
          <img src={bcd7} alt='networkicon' className='networkIcons'></img>
          <img src={bcd9} alt='networkicon' className='networkIcons'></img>
          <img src={bcd1} alt='networkicon' className='networkIcons'></img>
        </div>
      </div>


      <div className='bcnetworkRes'>
        <div className='bcnetworkImageRes1'>
          <img src={bcd16} alt='networkicon' className='networkIcons'></img>
          <img src={bcd13} alt='networkicon' className='networkIcons'></img>
          <img src={bcd15} alt='networkicon' className='networkIcons'></img>
          <img src={bcd14} alt='networkicon' className='networkIcons'></img>
          <img src={bcd17} alt='networkicon' className='networkIcons'></img>
          <img src={bcd18} alt='networkicon' className='networkIcons'></img>
        </div>
        <div className='bcnetworkImageRes2'>
          <img src={bcd19} alt='networkicon' className='networkIcons'></img>
          <img src={bcd32} alt='networkicon' className='networkIcons'></img>
          <img src={bcd4} alt='networkicon' className='networkIcons'></img>
          <img src={bcd5} alt='networkicon' className='networkIcons'></img>
        </div>
        <div className='bcnetworkImageRes3'>
          <img src={bcd6} alt='networkicon' className='networkIcons'></img>
          <img src={bcd2} alt='networkicon' className='networkIcons'></img>
          <img src={bcd3} alt='networkicon' className='networkIcons'></img>
          <img src={bcd7} alt='networkicon' className='networkIcons'></img>
          <img src={bcd9} alt='networkicon' className='networkIcons'></img>
          <img src={bcd1} alt='networkicon' className='networkIcons'></img>
        </div>
      </div>
    </div>
  )
}

export default bcNetwork