import React from 'react'
import "../improve/improve.css"
import rightArrow from "../../images/Full cycle arrow-gradient.svg"


function improve() {
  return (
        <section>
            <div className='improve'>
            <div className='improveSoftware1'>
                        <p id='improveSoftwareLine1'>Next Gen Quality Testing Services for Banks  </p>
                        <p id='improveSoftwareLine2'>Well thought through QA initiatives </p>
                        <p id='improveSoftwareLine3'>KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
            </div>
            </div>
            <div className='improveRes'>
            <div className='improveSoftware improveSoftware1'>
                        <p id='improveSoftwareLine1'>Next Gen Quality Testing Services for Banks </p>
                        <p id='improveSoftwareLine2'>Well thought through QA initiatives</p>
                        <p id='improveSoftwareLine3'>KNOW MORE    <img src={rightArrow} alt='rightArrow'></img> </p>
            </div>
            </div>
        </section>
  )
}

export default improve;