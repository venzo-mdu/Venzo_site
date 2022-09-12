import React from 'react'
import '../jobDetails/jobDetails.css'
import careers2bg from '../../../images/careers2bg2.png'

function jobDetails() {
  return (
    <>
    <section>
      <div className='jobDetails'>
      <img src={careers2bg} alt='backgroundImg'></img>
      <p id='jobDetailsText'>Job Details</p>
      </div>
    </section>
    </>
  )
}

export default jobDetails