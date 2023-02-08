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
              <h2>Research <br></br>&Discover</h2>
              <p>With insights rooted in the voices of our users, we solve customer-oriented problems while satisfying company goals. </p>
            </div>
            <div className='ideate'>
              <h2>Definite &Ideate</h2>
              <p>Our UX-UI designers love creating intuitive, scalable, and user-friendly designs. </p>
            </div>
            <div className='prototype'>
              <h2>Design &Prototype</h2>
              <p>With us, any design can be adapted into any company's pixel-perfect and scalable digital products. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default approach