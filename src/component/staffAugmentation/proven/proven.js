import React from 'react'
import '../proven/proven.css'

import venzoArrow from '../../../images/venzoSAarrowicon.png'
import processSAIcon1 from '../../../images/venzoSAIcon4.png'
import processSAIcon2 from '../../../images/venzoSAIcon6.png'
import processSAIcon3 from '../../../images/venzoSAIcon7.png'


function proven() {
  return (
    <div className='provenDev'>
      <p id='provenDevTitle'>Proven Development Methods</p>
      {/* <div className='processSA'>
        <img className='processSAIcon1' src={processSAIcon1} alt='processSAIcon'></img>
        <p id='iconbelowText'>Agile Development</p>
        <img className='arrowImg1' src={venzoArrow} alt='arrowImage'></img>
        <img className='processSAIcon2' src={processSAIcon2} alt='processSAIcon'></img>
        <p id='iconbelowText1'>Clean Code</p>
        <img className='arrowImg2' src={venzoArrow} alt='arrowImage'></img>
        <img className='processSAIcon3' src={processSAIcon3} alt='processSAIcon'></img>
        <p id='iconbelowText'>Quality Assurance</p>
    </div> */}
      <div className='provenDevdesc'>
        <div>
          <img className='processSAIcon1' src={processSAIcon1} alt='processSAIcon'></img>
          <p className='iconbelowText' >Agile Development</p>
          <p className='provenDevText'>Self-organized, cross-functional teams frequently analyze circumstances and user needs to adapt projects </p>
        </div>
        <div>
          <img className='arrowImg1' src={venzoArrow} alt='arrowImage'></img>
          <img className='processSAIcon2' src={processSAIcon2} alt='processSAIcon'></img>
          <p className='iconbelowText'>Clean Code</p>
          <p className='provenDevText'>We believe in using best practices to provide the highest quality code for easy extensibility and cost-effective maintenance.</p>

        </div>
        <div>
          <img className='arrowImg2' src={venzoArrow} alt='arrowImage'></img>
          <img className='processSAIcon3' src={processSAIcon3} alt='processSAIcon'></img>
          <p className='iconbelowText'>Quality Assurance</p>
          <p className='provenDevText'>Our primary goal is to achieve unrivaled product quality. Venzo offers end-to-end quality assurance and testing services </p>
        </div>
      </div>
    </div>
  )
}

export default proven