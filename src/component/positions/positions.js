import React from 'react'
import "../positions/positions.css"
import { Link } from 'gatsby'
import careerArrow from '../../images/CareerArrow.png'




function positions() {
  return (
    <>
      <section>
        <div className='positions'>
          <p id="positionsText">Open Positions</p>
          <div className='posCard'>
            <div className='cards'>
              <p id="cardTitle">Java Architect</p>
              <p id="cardText1">BPM / JAVA ARCHITECT</p>
              <br></br>
              <p id='exprYear'>8 - 10 years experience</p>

              <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>
            </div>
            <div className='cards'>
              <p id="cardTitle">Developers</p>
              <p id="cardText1">SR. JAVA DEVELOPERS
              </p>
              <br></br>
              <p id='exprYear'>6 Years Experience</p>
              <Link to='/careers/careersdetails1'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>
            </div>
            <div className='cards'>
              <p id="cardTitle">Developers</p>
              <p id="cardText1">REACT DEVELOPERS
              </p>
              <br></br>
              <p id='exprYear'>4 Years Experience</p>
              <Link to='/careers/careersdetails2'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>
            </div>
            <div className='cards'>
              <p id="cardTitle">Test Engineer</p>
              <p id="cardText1">AUTOMATION TEST ENGINEER
              </p>
              <br></br>
              <p id='exprYear'>3-5 Years Experience</p>
              <Link to='/careers/careersdetails3'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>
            </div>
            <div className='cards'>
              <p id="cardTitle">Developers</p>
              <p id="cardText1">BACKEND LEAD
              </p><br></br>
              <p id='exprYear'>7+ Years Experience</p>
              <Link to='/careers/careersdetails4'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>
            </div>
            <div className='cards'>
              <p id="cardTitle">Developers</p>
              <p id="cardText1">MICRO STRATEGY
              </p><br></br>
              <p id='exprYear'>6-8 Years Experience</p>
              <Link to='/careers/careersdetails5'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default positions