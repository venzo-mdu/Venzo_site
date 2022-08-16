import React from 'react'
import "../approach/approach.css"
import UIUXArrow from "../../images/uiuxarrow.svg"
import straightArrow from "../../images/straightArrow.svg"
function approach() {
  return (
   <section>
              <div className='ourApproach'>
                  <h1>Our approach on design</h1>
                  <div className='approachDesign'>
                  <img id="uiuxarrow" src={UIUXArrow} alt="UIUXArrow"></img>
                  <img id="straightarrow" src={straightArrow} alt="straightArrow"></img>
                  <div className='approach'>
                    <div className='research'>
                       <h2>Research &Discover</h2>
                       <p>We do the user research and the discover the target audience & the ux problems.</p>
                    </div>
                    <div className='ideate'>
                    <h2>Definite &Ideate</h2>
                    <p>Defining the problems clearly and ideating different ux solutions for those problems.</p>
                    </div>
                    <div className='prototype'>
                    <h2>Design &Prototype</h2>
                    <p>We do the user research and define the target audience & the problems.</p>
                    </div>
                  </div>
                  </div>
              </div>
   </section>
  )
}

export default approach