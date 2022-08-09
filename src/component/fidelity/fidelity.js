import React from 'react'
import "../fidelity/fidelity.css"
import Lowfidelity from "../../images/Low fidelity proto.svg"
import Highfidelity from "../../images/High fidelity proto.svg"
import Fidelity1 from "../../images/fidelity1.svg"
import Fidelity2 from "../../images/fidelity2.svg"
import Fidelity3 from "../../images/fidelity3.svg"



function fidelity() {
  return (
      <section>
          <div className='fidelityPrototypes'>
          <div className='fidelity'>
              <div className='lowFidelity'>
              <h3>Low-Fidelity Prototypes</h3>
              <p>This is the initial view of future site/platform/<br></br>application</p>
              <img src={Lowfidelity} alt='low-fidelity-images'></img>
              </div>
              <div className='highFidelity'>
              <h3>High-Fidelity Prototypes</h3>
              <p>This looks  like a finished product with pixel-perfect application</p>
              <img src={Highfidelity} alt='high-fidelity-images'></img>
              </div>
          </div>
          <div className='ourInsights'>
              <div className='idea'>
               <img src={Fidelity1} alt='fidelity1'></img>
               <h4>Drop Your idea clearly</h4>
              </div>
              <div className='idea'>
               <img src={Fidelity2} alt='fidelity1'></img>
               <h4>Submit all requirements needed</h4>
             </div> 
             <div className='idea'>
               <img src={Fidelity3} alt='fidelity1'></img>
               <h4>Get a digital prototype</h4>
            </div>
          </div>
          </div>
      </section>
  )
}

export default fidelity