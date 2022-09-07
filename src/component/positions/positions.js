import React from 'react'
import "../positions/positions.css"
import careerArrow from '../../images/CarrerArrow.png'

function positions() {
  return (
    <>
      <section>
        <div className='positions'>
          <p id="positionsText">Open Positions</p>
          <div className='posCard'>
            <div className='cards'>
              <p id="cardTitle">Automater Tester</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <p id="viewJob">view Job <img src={careerArrow} alt='careerArrow'></img></p>
            </div>
            <div className='cards'>
              <p id="cardTitle">Full Stack Developer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <p id="viewJob">view Job <img src={careerArrow} alt='careerArrow'></img></p>
            </div>
            <div className='cards'>
              <p id="cardTitle">Java Developer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <p id="viewJob">view Job <img src={careerArrow} alt='careerArrow'></img></p>
            </div>
            <div className='cards'>
              <p id="cardTitle">BDE-International Sales</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <p id="viewJob">view Job <img src={careerArrow} alt='careerArrow'></img></p>
            </div>
            <div className='cards'>
              <p id="cardTitle">DevOps Engineer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <p id="viewJob">view Job <img src={careerArrow} alt='careerArrow'></img></p>
            </div>
            <div className='cards'>
              <p id="cardTitle">.Net Developer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <p id="viewJob">view Job <img src={careerArrow} alt='careerArrow'></img></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default positions