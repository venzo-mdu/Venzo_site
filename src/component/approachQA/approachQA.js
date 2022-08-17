import React from 'react'
import "../approachQA/approachQA.css"
import BankingArrow from "../../images/bankingArrow.png"

function approachQA() {
  return (
      <section>
          <div className='ourapproachQA'>
          <h1>Our approach on design</h1>
          <div className='approachDesignQA'>
                  <img id="bankingarrow" src={BankingArrow} alt="BankingArrow"></img>
                  {/* <img id="straightarrow" src={straightArrow} alt="straightArrow"></img> */}
                  <div className='approachQA'>
                    <div className='requirement'>
                       <h2>Requirement Gathering</h2>
                       <p>We do the user research and the discover the target audience & the ux problems.</p>
                    </div>
                    <div className='feasibility'>
                    <h2>Feasibility Study</h2>
                    <p>Defining the problems clearly and ideating different ux solutions for those problems.</p>
                    </div>
                    <div className='analysis'>
                    <h2>Gap  Analysis&FSD</h2>
                    <p>We do the user research and define the target audience & the problems.</p>
                    </div>
                    <div className='implementation'>
                    <h2>Implementation &Testing</h2>
                    <p>We do the user research and define the target audience & the problems.</p>
                    </div>
                    <div className='production'>
                    <h2>Production</h2>
                    <p>We do the user research and define the target audience & the problems.</p>
                    </div>
                    <div className='enhancement'>
                    <h2>Enhancement</h2>
                    <p>We do the user research and define the target audience & the problems.</p>
                    </div>
                  </div>
                  </div>
          </div>


      </section>
  )
}

export default approachQA