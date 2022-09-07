import React from 'react'
import "../colleagues/colleagues.css"
import ColleagueImg from "../../images/colleague.png"
import ColleagueImgRes from "../../images/career1resImg.png"


function colleagues() {
  return (
      <section>
          <div className='colleagues'>
              <p id='candidateTitle'>From candidate to <span id="gradientText">colleague</span></p>
              <p id="candidateText">We are an advanced, forward-thinking team of Software engineers & Business Analysts reshaping reality with fun and exciting ideas using cutting-edge technology. Explore new opportunities for career growth. Join our troop today.</p>
              <img classname="colleagueImgRes" src={ColleagueImgRes} alt="colleagueimageRes"></img>
              <img classname="colleagueImg" src={ColleagueImg} alt="colleagueimage"></img>
          </div>
      </section>
  )
}

export default colleagues