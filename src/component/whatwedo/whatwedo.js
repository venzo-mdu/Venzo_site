import React from 'react'
import "./whatwedo.css"


function whatwedo() {
  return (
    <section>
      <div className='whatwedo'>
        <div className='whatwedoflex'>
          <div className='whatwedoText'>
            <h3>What we do?</h3>
            <p>Our award-winning UI and UX design team researches business goals, UX goals and UX to bring you a more intuitive interface that accomplishes your goals while satisfying the user's needs. </p>
          </div>
          <div className='whatwedoCard'>
            <div className='uxResearch'>
              <h4>UX<br></br>Research</h4>
              <p>At Venzo, we believe that it is our service to bring the best user experience to life for our clients. UX research is a necessary part of the process and is always led by an expert. </p>
            </div>
            <div className='uiuxDesign'>
              <h4>UI/UX<br></br>Design</h4>
              <p>We offer UI/UX design services to help make your product look and function as you envision it. From wireframing to prototyping, we provide end-to-end UX/UI services. </p>

            </div>
            <div className='digitalPrototyping'>
              <h4>Digital<br></br>Prototyping</h4>
              <p>Lay the entire foundation of the app by designing and developing navigation components. </p>

            </div>
            <div className='digitalBranding'>
              <h4>Digital<br></br>Branding</h4>
              <p>Create a style that will make the product stand out by including custom fonts, icons, and animations. </p>

            </div>
          </div>
          <div className='whatwedoCardResponsive'>
            <div className='uxResearch1'>
              <h4>UX<br></br>Research</h4>
              <p>Understanding the user needs and evaluating to convert more business values.</p>
            </div>
            <div className='uiuxDesign1'>
              <h4>UI/UX<br></br>Design</h4>
              <p>A complete product design focused on usability and interactions.</p>

            </div>
            <div className='digitalPrototyping1'>
              <h4>Digital<br></br>Prototyping</h4>
              <p>Digital prototype of the product focused on data driven design.</p>

            </div>
            <div className='digitalBranding1'>
              <h4>Digital<br></br>Branding</h4>
              <p>Helping brands with all digital support to grow digitally.</p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default whatwedo