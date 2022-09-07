import React from 'react'
import '../join/join.css'
import JoinusImg from '../../images/joinUs.png'
import rightArrow from '../../images/Read more arrow-gradient.svg'

function join() {
  return (
         <section>
             <div className='joinus'>
                <div className='innerJoin'>
                  <img className="joinImg" src={JoinusImg} alt='joinus'></img>
                  <div className='innerText'>
                      <p id='innerTextTitle'>Join with us</p>
                      <p id='innerTextPara'>Here are some career pathways to consider if you enjoy working with others.</p>
                      <p id='applyNow'>Apply Now<img src={rightArrow} alt='rightArrow'></img></p>
                  </div>
                </div>
             </div>
         </section>
  )
}

export default join