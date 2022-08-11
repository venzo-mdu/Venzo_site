import React from 'react'
import "../aboutUIUX/aboutUIUX.css"
import rightArrow from "../../images/Full cycle arrow-gradient.svg"
function aboutUIUX() {
    return (
        <>
            <section>
            <div className='aboutUIUXRes'>
            <div className='digitalProducts'>
                        <p id='digitalLine1'>We design <span id="usable">usable</span>&nbsp;<br></br>digital products</p>
                        <p id='digitalLine2'>Translating any kind of designs into pixel perfect digital products</p>
                        <p id='digitalLine3'>REQUEST PROTOTYPE <img src={rightArrow} alt='rightArrow'></img> </p>
                    </div>
            </div>

                <div className='aboutUIUX'>
                    <div className='digitalProducts'>
                        <p id='digitalLine1'>We design<br></br><span id="usable">usable</span>&nbsp;digital products</p>
                        <p id='digitalLine2'>Translating any kind of designs into pixel perfect digital products</p>
                        <p id='digitalLine3'>REQUEST PROTOTYPE <img src={rightArrow} alt='rightArrow'></img> </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default aboutUIUX;