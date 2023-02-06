import React from 'react'
import '../hiring/hiring.css'

import ArrowHiring from '../../../images/devArrow.svg'
import VenzoSAImage from '../../../images/venzoSAImage5.png'
import VenzoSAIcon1 from '../../../images/venzoSAIcon2.png'
import VenzoSAIcon2 from '../../../images/venzoSAIcon8.png'
import VenzoSAIcon3 from '../../../images/venzoSAIcon1.png'
import VenzoSAIcon4 from '../../../images/venzoSAIcon3.png'
import BackgroundImage1 from '../../../images/backgroundSA1.png'
import BackgroundImage2 from '../../../images/backgroundSA2.png'


function hiring() {
  return (
   <div>
    <div className='hiring'>
      <p id='hiringTitle'>Scale Up Your Team with <span id='hiringGradient'>Venzo’s Staff Augmentation</span></p>
      <p id='hiringText'>We bridge the IT talent demand-supply gap with an innovative, best-in-class recruiting engine and a client-centric service focus. </p>
      <div className='hiringCards'>
        <div className='hiringpositions'>
          <div className='hiringposCard'>
            <div className='hireCards'>
              <p id="cardTitle">Web Developer</p>
              <p id="cardText">Agile engineering capabilities and full-service engineering capabilities. 
              </p>
            </div>
            <div className='hireCards'>
              <p id="cardTitle">Mobile Developer &nbsp;&nbsp;
              {/* <img src={ArrowHiring} alt='arrow' ></img> */}
              </p>
              <p id="cardText">Cross-Platform mobile application development mixed with digital strategy.
              </p>
            </div>
            <div className='hireCards'>
              <p id="cardTitle">QA Engineer</p>
              <p id="cardText">With relentless automation and intelligent QA, quality moves in the fast lane.
              </p>
            </div>
            <div className='hireCards'>
              <p id="cardTitle">Full-Stack Developer</p>
              <p id="cardText">Develop web applications quicker with fewer backend and front-end engineers.
              </p>
            </div>
            <div className='hireCards'>
              <p id="cardTitle">Business Consultant</p>
              <p id="cardText">Maximize Strategy, Planning, and Problem-Solving in businesses.
              </p>
            </div>
            <div className='hireCards'>
              <p id="cardTitle">Python Developer</p>
              <p id="cardText">Tackle Dynamic Programming languages in maximum platforms.
              </p>
            </div>

          </div>
        </div>
      </div>
</div>

      <div className='backgroundimagesSA'>
        <img className='bgImgSA1' src={BackgroundImage1} alt='backgroundImage'></img>
        <div className='hireEmployee'>

          <div className='hireDemand'>
            <div className='leftImagehire'>
              <img className='venzoSAImage' src={VenzoSAImage} alt='venzoSAImage'></img>
            </div>
            <div className='rightTexthire'>
              <p id='rightTitlehire'>Need to hire on-demand employees but don’t know where to start?</p>
              <p id='rightParathire'>No worries, Get in touch if you’d like to add outside talent to your in-house team while avoiding the pitfalls of traditional recruiting. <br/><br/>
We accelerate development and reduce development costs for both IT and non-IT companies. Our programmers are skilled in Java, .NET, Python, Blockchain & PHP, and other technologies. </p>
            </div>
          </div>
        </div>
        <img className='bgImgSA2' src={BackgroundImage2} alt='backgroundImage'></img>

      </div>

      <div className='hiring'>


      <div className='choose'>
        <p id='chooseTitle'>Why Choose <span id='chooseGradienttext'>Venzo</span>  Technologies</p>
        <p id='chooseText'>We are a software services company using high-value business processes and tech to build immersive digital products & provide superior technology services to our clients.</p>
        <div className='whyChoose'>

          <div className='choosingIdeas'>
            <img src={VenzoSAIcon1} alt='choosingimages'></img>
            <p id='chooseimageText'>Highly Adaptive &<br/> Motivated Teams</p>
          </div>
          <div className='choosingIdeas'>
            <img src={VenzoSAIcon2} alt='choosingimages'></img>
            <p id='chooseimageText'>Quality &Security <br/>Adherence</p>
          </div>
          <div className='choosingIdeas'>
            <img src={VenzoSAIcon3} alt='choosingimages'></img>
            <p id='chooseimageText'>ROI <br/> Approach</p>
          </div>
          <div className='choosingIdeas'>
            <img src={VenzoSAIcon4} alt='choosingimages'></img>
            <p id='chooseimageText'>Guaranteed <br/>Innovation</p>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default hiring

