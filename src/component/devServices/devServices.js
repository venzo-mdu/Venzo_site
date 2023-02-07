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
                    <li><Link to="/app-development-company"> Apps Development &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img> </Link></li>
                    <li><Link to="/product-development-company"> Product Development &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
                    <li><Link to="/quality-engineering-assurance">QA Engineering &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link> </li>
                    <li><Link to="/blockchain-development-company">Blockchain Development &nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
                    <li><Link to="/hire-our-developers">Staff Augmentation&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
                    <li><Link to="/banking-application-testing-qa-services">Banking QA Testing&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
            </div>
            <div className='technologies2'>
                    <li><Link to="/digital-marketing-comapany">Digital Marketing&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link> </li>
                    <li><Link to="/ui-ux-design-company">UI & UX Design&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></Link></li>
                    <li><Link to="/website-development-company">Website Development&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img> </Link></li>
                    <li>E-Commerce Development&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Enterprise App Development&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
                    <li>Hire Developers&nbsp;&nbsp;<img src={rightArrow} alt='right-Arrow'></img></li>
            </div>
    </div>
    <div className='venzoMantra'>
      <div className='venzoexperts'>
      <p id='reach'><span id='mantra'>VENZO MANTRA</span></p>
     
     <p id='venzoExpertise'>With our unique blend of business experience and efficient approach, Venzo has developed successful apps that speed digital transformation. Venzoians have expertly crafted IT solutions & developed applications from the ground-up with our fully equipped talent team & BCs on board. We design, implement, and monitor your unique digital business requirements for greater expansion.</p>
     <p id='Motto'>Build&nbsp;.&nbsp;Modernize&nbsp;.&nbsp;Upscale.</p>
      </div>
      <div className='venzoexpertImg'>
        <img src={roundimage} alt='venzoexpertimg'></img>
      </div>
    
   </div>
   
   </>

  )
}

export default devServices