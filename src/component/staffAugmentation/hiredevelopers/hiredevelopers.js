import React from 'react'
import '../hiredevelopers/hiredevelopers.css'

import hireIcon1 from '../../../images/hireIcon8.png'
import hireIcon2 from '../../../images/hireIcon7.png'
import hireIcon3 from '../../../images/hireIcon4.png'
import hireIcon4 from '../../../images/hireIcon5.png'
import dashedarrow from '../../../images/arrowdashed.png'

function hiredevelopers() {
  return (
    <div className='hireDevelopers'>
      <div className='leftHire'>
        <p id='lefthireTitle'>Why Hire Developers from Venzo Technologies?</p>
        <p id='lefthireText'>Venzo’s hybrid hiring model allows you to deploy part of your team on-site while the other part works from an offshore location. Let’s look at some of the reasons why you should hire our developers for your company:</p>
      </div>
      <div className='rightHire'>
        <img className='rightHireIcon' src={hireIcon1} alt='hireicons'></img><p id='imageText'>Dedicated On-Demand Team</p>
        <img className='dashedArrow' src={dashedarrow} alt='dashedicons'></img>
        <img className='rightHireIcon' src={hireIcon2} alt='hireicons'></img><p id='imageText'>Flexible Resource Contract</p>
        <img className='dashedArrow' src={dashedarrow} alt='dashedicons'></img>
        <img className='rightHireIcon' src={hireIcon3} alt='hireicons'></img><p id='imageText'>Fixed Cost Project</p>
        <img className='dashedArrow' src={dashedarrow} alt='dashedicons'></img>
        <img className='rightHireIcon' src={hireIcon4} alt='hireicons'></img><p id='imageText'>Managed Recruitment Services</p>

      </div>
    </div>
  )
}

export default hiredevelopers