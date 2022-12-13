import React from 'react'
import '../unleashing/unleashing.css'
import '../unleashing/Laptop.css'


import powerImage from '../../../images/aboutus/aboutus4.png'
import gridIcon1 from '../../../images/aboutus/aboutus13.png'
import gridIcon2 from '../../../images/aboutus/aboutus12.png'
import gridIcon3 from '../../../images/aboutus/aboutus8.png'
import gridIcon4 from '../../../images/aboutus/aboutus10.png'
import gridIcon5 from '../../../images/aboutus/aboutus9.png'
import gridIcon6 from '../../../images/aboutus/aboutus11.png'
import TickIcon from '../../../images/aboutus/aboutus17.png'



function unleashing() {
  return (
    <div className='unleashing'>
      <p id='unleashingTitle'>Venzo is <span id='unleashingGradient'> unleashing the </span> <span className='unleashingGradient1'> transformative power</span> in Technology platforms</p>
      <div className='powerOfvenzo'>
        <div className='powerleftImage'>
          <img className='powerImage' alt='venzopower' src={powerImage}></img>
        </div>
        <div className='powerrightImage'>
          <p id='powerrightText'>Venzo Technologies leverages the power of cognitive computing, hyper-automation, cloud, analytics, and emerging technologies to assist our clients in adapting to and succeeding in the digital world.</p>
          <div className='aboutVenzo'>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon1} alt=''></img>
              <p id='aboutinnerNumber'>90+</p>
              <p id='aboutinnerText'>Brilliant minds</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon2} alt=''></img>
              <p id='aboutinnerNumber'>6</p>
              <p id='aboutinnerText'>Years of Business</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon3} alt=''></img>
              <p id='aboutinnerNumber'>6+</p>
              <p id='aboutinnerText'>Amazing Products</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon4} alt=''></img>
              <p id='aboutinnerNumber'>20+</p>
              <p id='aboutinnerText'>Satisfied Clients</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon5} alt=''></img>
              <p id='aboutinnerNumber'>98%</p>
              <p id='aboutinnerText'>Customer Retention</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon6} alt=''></img>
              <p id='aboutinnerNumber'>30+</p>
              <p id='aboutinnerText'>Tech Stack</p>
            </div>
          </div>
        </div>
      </div>

      <div className='commitments'>
        <div className='leftCommit'>
          <p id='leftCommitTitle'>Our Commitments</p>
          <div className='whatCommits1'>
            <p id='whatCommitsText1'>Values</p>
          </div>
          <div className='whatCommits'>
            <p id='whatCommitsText'>Diversity & Equity</p>
          </div>
          <div className='whatCommits'>
            <p id='whatCommitsText'>Society Impact</p>
          </div>
        </div>
        <div className='rightCommit'>
          <p id='rightCommitTitle'>We offer solutions for Startups/SME/Entrepreneurs</p>
          <p id='rightCommitText'>We are client-oriented with a “service” mentality. We are available to assist you. We can either lead or follow. Our primary goal is to maintain the highest quality standards and best practices in today’s IT market.We are client-oriented with a “service” mentality. We are available to assist you. We can either lead or follow. Our primary goal is to maintain the highest quality standards and best practices in today’s IT market.</p>

          <div className='rightCommitIcons'>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Accelerated <br className='Accele'></br> Work</p>
            </div>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Total Transparency</p>
            </div>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Customer Centred Experience</p>
            </div>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Revolutionary Testing</p>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default unleashing