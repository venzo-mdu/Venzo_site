import React from 'react'
import "./devServices .css"
import rightArrow from "../../images/devArrow.svg"
import roundimage  from "../../images/round.png"
import { Link } from 'gatsby'
 
function devServices() {
  return (
    <>
    <div className='developmentServices'>
        <p>Full cycle of development services</p>
            <div className='technologies1'>
                    <li>Apps Development &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>Product Development &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li><Link to="/webDevelopment">QA Engineering &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link> </li>
                    <li><Link to="/UIUX">Blockchain Development &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
                    <li><Link to="/bankingQA">Staff Augmentation&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
                    <li><Link to="/dm_page">Banking QA Testing&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
            </div>
            <div className='technologies2'>
                    <li>Digital Marketing&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>UI & UX Design&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Website Development&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img> </li>
                    <li>E-Commerce Development&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Enterprise App Development&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li><Link to="/staffaugmentation">Hire Developers&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
            </div>
    </div>
    <div className='venzoMantra'>
      <div className='venzoexperts'>
      <p id='reach'><span id='mantra'>VENZO MANTRA</span></p>
     
     <p id='venzoExpertise'>With our unique blend of business experience and efficient approach, Venzo has developed successful apps that speed digital transformation. Venzoians have expertly crafted IT solutions & developed applications from the ground-up with our fully equipped talent team & BCs on board. We design, implement, and monitor your unique digital business requirements for greater expansion.</p>
     <p id='Motto'>Build&nbsp;-&nbsp;Modernize&nbsp;-&nbsp;Upscale.</p>
      </div>
      <div className='venzoexpertImg'>
        <img src={roundimage} alt='venzoexpertimg'></img>
      </div>
    
   </div>
   
   </>

  )
}

export default devServices