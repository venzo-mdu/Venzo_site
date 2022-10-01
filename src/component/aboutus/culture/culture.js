import React from 'react'
import '../culture/culture.css'

import cultureImage1 from '../../../images/culture/culture1.png'
import cultureImage2 from '../../../images/culture/culture2.png'
import cultureImage3 from '../../../images/culture/culture3.png'
import cultureImage4 from '../../../images/culture/culture4.png'


function culture() {
  return (
    <div className='culture'>
      <p id='cultureTitle'>The Venzo Way of Culture, Co-Operative & Versatile</p>
      <p id='cultureText'>With casual work attire and social activities as company culture, Venzo is defined by smart minds doing smart things. We take pride in our culture of fun, reward, and hard work. We follow three core values: integrity, positivity, and quality. </p>
      <div className='cultures'>
         <img className='cultureImage' src={cultureImage1} alt='culture'></img>
         <img className='cultureImage' src={cultureImage2} alt='culture'></img>
         <img className='cultureImage' src={cultureImage3} alt='culture'></img>
         <img className='cultureImage' src={cultureImage4} alt='culture'></img>
      </div>
    </div>
  )
}

export default culture