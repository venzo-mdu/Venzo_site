import React from 'react'
import '../jobDetails/jobDetails.css'
import careers2bg from '../../../images/careers2bg2.png'
import careers2bgRes from '../../../images/careers2imgRes.png'


function jobDetails() {
  return (
    <>
      <section>
        <div className='jobDetails'>
          <img className='careers2bg' src={careers2bg} alt='backgroundImg'></img>
          <img className='careers2bgRes' src={careers2bgRes} alt='backgroundImgRes'></img>
          <p id='jobDetailsText'>Job Details</p>
        </div>
      </section>
    </>
  )
}

export default jobDetails