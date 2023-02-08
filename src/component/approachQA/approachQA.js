import React from 'react'
import "../approachQA/approachQA.css"
import BankingArrow from "../../images/assuranceModel.png"
import BankingArrowstraight from '../../images/straightBankingQA.png'

function approachQA() {
  return (
    <section>
      <div className='ourapproachQA'>
        <h1>Our approach on design</h1>
        <div className='approachDesignQA'>
          <img id="bankingarrow" src={BankingArrow} alt="BankingArrow"></img>
          <img id="straightarrowQA" src={BankingArrowstraight} alt="straightArrowQA"></img>
          <div className='approachQA'>
            <div className='requirement'>
              <h2>Testing Requirements</h2>
              <p id='#ApproachPara'>We attempt to analyse and acquire your specific requirements for your project. </p>
            </div>
            <div className='feasibility'>
              <h2>Test Architecture Review </h2>
              <p id="ApproachPara1">It assists us in narrowing the scope of the project in order to identify the optimum test techniques that apply. </p>
            </div>
            <div className='analysis'>
              <h2 id='analyHead'>Gap Analysis & FSD</h2>
              <p id="ApproachPara4">Aids in identifying bottlenecks in business flow and assessing the risk of changes, as well as reducing build times.</p>
            </div>
            <div className='implementation'>
              <h2 id='analyHead'>Test Development</h2>
              <p id="ApproachPara3">We helps us identify the test procedure series that applies for the various design components and test techniques.</p>
            </div>
            <div className='production'>
              <h2 id='TestProdu'>Test Production</h2>
              <p id="ApproachPara2">At this point, our QA team will have an advantage in supplying solid software and functionality to your Core Banking Software/Tool.</p>
            </div>
            {/* <div className='enhancement'>
                    <h2>Enhancement</h2>
                    <p id="ApproachPara2">We do the user research and define the target audience & the problems.</p>
                    </div> */}
          </div>
        </div>
      </div>


    </section>
  )
}

export default approachQA