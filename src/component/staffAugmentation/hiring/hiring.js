import React from 'react'
import '../hiring/hiring.css'
import ArrowHiring from '../../../images/Read more arrow-gradient.svg'
function hiring() {
  return (
    <div className='hiring'>
        <p id='hiringTitle'>Scale Up Your Team with <span id='hiringGradient'>Venzo’s Staff Augmentation</span></p>
        <p id='hiringText'>what you are looking for? Contact us so we can help.</p>
         <div className='hiringCards'>
         <div className='hiringpositions'>
          <div className='hiringposCard'>
            <div className='hireCards'>
              <p id="cardTitle">Web Developer</p>
              <p id="cardText">Agile engineering capabilities and full-service engineering capabilities.
              </p>
            </div>
            <div className='hireCards'>
              <p id="cardTitle">Mobile Developer &nbsp;&nbsp;<img src={ArrowHiring} alt='arrow' ></img></p>
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

         <div className='hireEmployee'>
           
         </div>
    </div>
  )
}

export default hiring

