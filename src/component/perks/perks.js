import React from 'react'
import "../perks/perks.css"
import perkImg1 from "../../images/perks1.png"
import perkImg2 from "../../images/perks2.png"
import perkImg3 from "../../images/perks3.png"
import perkImg4 from "../../images/perks4.png"


// function perks() {
//   return (
//       <>
//       <section>
//        <div className='perks'>
//         <div className='perksLeftsection'>
//             <p id="perksLeftTitle">Perks you get</p>
//             <p id="perksLeftText">We care about each other’s well-being and success. We share common values that are part of everything we do within a culture of collaboration, respect, and integrity. Consider how much we can accomplish together.</p>
//         </div>
//         <div className='perksRightsection'>
//             <div className='perksLefticon'>
//              <img src={perkImg1} alt="perkIcon"></img>
//              <p id='exploreTalents'>Explore Talents</p>
//              <img src={perkImg3} alt="perkIcon"></img>
//              <p>Social Learning</p>
//             </div>
//             <div className='perksRighticon'>
//              <img src={perkImg2} alt="perkIcon"></img>
//              <p id='careerGrowth'>Career Growth</p>
//              <img src={perkImg4} alt="perkIcon"></img>
//              <p>Vision Building</p>
//             </div>
//         </div>
//        </div>
//       </section>
//       </>
//   )
// }


function perks() {
    return (
        <>
            <section>
                <div className='perks'>
                    <div className='perksLeftsection'>
                        <p id="perksLeftTitle">Perks you get</p>
                        <p id="perksLeftText">We care about each other’s well-being and success. We share common values that are part of everything we do within a culture of collaboration, respect, and integrity. Consider how much we can accomplish together.</p>
                    </div>
                    <div className='perksRightsection'>
                        <div className='perksLefticon'>
                            <img src={perkImg1} alt="perkIcon"></img>
                            <p id='exploreTalents'>Explore Talents</p>
                            <img src={perkImg3} alt="perkIcon"></img>
                            <p>Social Learning</p>
                        </div>
                        <div className='perksRighticon'>
                            <img src={perkImg2} alt="perkIcon"></img>
                            <p id='careerGrowth'>Career Growth</p>
                            <img src={perkImg4} alt="perkIcon"></img>
                            <p>Vision Building</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default perks