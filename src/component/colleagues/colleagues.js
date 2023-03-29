import React from 'react'
import "../colleagues/colleagues.css"
import ColleagueImg from "../../images/allpageabanner/careers/careers_1x.webp"
import ColleagueImgRes from "../../images/career1resImg.png"


function colleagues() {
    return (
        <section>
            <div className='colleagues'>
                <p id='candidateTitle'>Be a part of <span id="gradientText">VENZO</span>ian</p>
                <p id="candidateText">We are an advanced, forward-thinking team of Software engineers & Business Analysts reshaping reality with fun and exciting ideas using cutting-edge technology. Explore new opportunities for career growth. Join our troop today.</p>
                {/* <img classname="colleagueImgRes" src={ColleagueImgRes} alt="colleagueimageRes"></img> */}
                <img classname="colleagueImg" src={ColleagueImg} alt="colleagueimage"></img>
            </div>
        </section>
    )
}
// import careeData from '../../content/careerData.json'
// function colleagues() {
//     return (
//         <div>       
//             {careeData.map((item) => {return <section>
//             <div className='colleagues'>
//                 <p id='candidateTitle'>{item.careerTitle}<span id="gradientText">{item.careerTitle1}</span></p>
//                 <p id="candidateText">{item.careerCont}</p>
//                 {/* <img classname="colleagueImgRes" src={ColleagueImgRes} alt="colleagueimageRes"></img> */}
//                 <img classname="colleagueImg" src={item.careerImg} alt="colleagueimage"></img>
//             </div>
//         </section>
//          })} 
//         </div>

//     )
//   }

export default colleagues