import React from 'react'
import "../improve/improve.css"
import rightArrow from "../../images/Full cycle arrow-gradient.svg"


function improve() {
  return (
        <section>
            <div className='improve'>
            <div className='improveSoftware'>
                        <p id='improveSoftwareLine1'>Improve your software<br></br>performance now</p>
                        <p id='improveSoftwareLine2'>We provide an impeccable customer experiance</p>
                        <p id='improveSoftwareLine3'>KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
            </div>
            </div>
            <div className='improveRes'>
            <div className='improveSoftware'>
                        <p id='improveSoftwareLine1'>Improve your software<br></br>performance now</p>
                        <p id='improveSoftwareLine2'>We provide an impeccable customer experiance</p>
                        <p id='improveSoftwareLine3'>KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
            </div>
            </div>
        </section>
  )
}

export default improve;