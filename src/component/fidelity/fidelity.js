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
            <p>We use low-fidelity prototyping to create a simple, fast, and inexpensive product version. This prototype allows users to explore ideas quickly and change direction easily. It also forces designers to consider what they are adding to the design, which is important for usability. </p>
            <img src={Lowfidelity} alt='low-fidelity-images'></img>
          </div>
          <div className='highFidelity'>
            <h3>High-Fidelity Prototypes</h3>
            <p>High-fidelity prototypes are an important element in the design process of an application. Venzo uses an iterative design process to create high-fidelity prototypes that can be used for user testing. These prototypes are created through digital mockups and low-fidelity paper models. </p>
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