import React from 'react'
import "../aboutUIUX/aboutUIUX.css"
import rightArrow from "../../images/Full cycle arrow-gradient.svg"
function aboutUIUX() {
    return (
        <>
            <section>
            <div className='aboutUIUXRes'>
            <div className='digitalProducts'>
                        <p id='digitalLine1'>We Design  <span id="usable">Incredible</span>&nbsp;<br></br> Interfaces For The Digital Realm.</p>
                        <p id='digitalLine2'>Our UI/UX design company incorporates research and user-centric innovations to enhance user experience. Our products are as addictive as they are good-looking. UI/UX design services involve five steps: mind map + wireframes + design concept + Figma design + clickable prototype with UI kit. </p>
                        <p id='digitalLine3'>REQUEST PROTOTYPE <img src={rightArrow} alt='rightArrow'></img> </p>
                    </div>
            </div>

                <div className='aboutUIUX'>
                    <div className='digitalProducts'>
                        <p id='digitalLine1'>We design <span id="usable">Incredible</span><br></br>Interfaces For The Digital Realm.</p>
                        <p id='digitalLine2'>Our UI/UX design company incorporates research and user-centric innovations to enhance user experience. Our products are as addictive as they are good-looking. UI/UX design services involve five steps: mind map + wireframes + design concept + Figma design + clickable prototype with UI kit. </p>
                        <p id='digitalLine3'>REQUEST PROTOTYPE <img src={rightArrow} alt='rightArrow'></img> </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default aboutUIUX;