import React from 'react'
import "../pathway/pathway.css"

function pathway() {
  return (
      <section>
          <div className='pathway'>
            <p id="pathwayText">Here are some career pathways to <span id="gradientTextPathway">consider if you enjoy working with others.</span></p>
            <button className='pathwayButton'>Lets Talk</button>
          </div>
      </section>
  )
}

export default pathway;