import React from 'react'
import "./devServices .css"
import rightArrow from "../../images/Read more arrow-gradient.svg"
import roundimage  from "../../images/round.png"
 
function devServices() {
  return (
    <>
    <div className='developmentServices'>
        <p>Full cycle of development services</p>
            <div className='technologies1'>
                    <li>iOS Development <img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>Android Development<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Web App Development<img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>UI/UX Design <img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>QA Engineering <img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Staff Augmentation <img src={rightArrow} alt='right-Arrow'></img></li>
            </div>
            <div className='technologies2'>
                    <li>iOS Development <img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>Android Development<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Web App Development<img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>UI/UX Design <img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>QA Engineering <img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Staff Augmentation <img src={rightArrow} alt='right-Arrow'></img></li>
            </div>
    </div>
    <div className='venzoMantra'>
      <div className='venzoexperts'>
      <p id='reach'>Make your reach with<br/><span id='mantra'>VENZO MANTRA</span></p>
     
     <p id='venzoExpertise'>Venzo’s expertise have delivered successful applications that accelerate digital transformation with our unique blend of business expertise and streamlined process.</p>
     <p id='Motto'>Build.&nbsp;&nbsp;Innovate.&nbsp;&nbsp;Grow.</p>
      </div>
      <div className='venzoexpertImg'>
        <img src={roundimage} alt='venzoexpertimg'></img>
      </div>
    
   </div>
   
   </>

  )
}

export default devServices