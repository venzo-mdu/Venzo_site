import React from 'react'
import "../whatwedo/whatwedo.css"
import UIUXArrow from "../../images/uiuxarrow.svg"

function whatwedo() {
  return (
      <section>
          <div className='whatwedo'>
            <div className='whatwedoflex'>
              <div className='whatwedoText'>
                  <h3>What we do?</h3>
                  <p>We offer design thinking-based and technology driven services in digital product innovation, customer experience management, and digital transformation.</p>
              </div>
              <div className='whatwedoCard'>
                  <div className='uxResearch'>
                   <h4>UX<br></br>Research</h4>
                   <p>Understanding the user needs and evaluating to convert more business values.</p>
                  </div>
                  <div className='uiuxDesign'>
                   <h4>UI/UX<br></br>Design</h4>
                   <p>A complete product design focused on usability and interactions.</p>
                      
                 </div>
                 <div className='digitalPrototyping'>
                   <h4>Digital<br></br>Prototyping</h4>
                   <p>Digital prototype of the product focused on data driven design.</p>
                      
                 </div>
                 <div className='digitalBranding'>
                   <h4>Digital<br></br>Branding</h4>
                   <p>Helping brands with all digital support to grow digitally.</p>
                      
                 </div>
                 </div>
              </div>
              <div className='ourApproach'>
                  <h1>Our approach on design</h1>
                  <div className='approachDesign'>
                  <img src={UIUXArrow} alt="UIUXArrow"></img>
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
          </div>
      </section>
  )
}

export default whatwedo