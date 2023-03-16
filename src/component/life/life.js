import React from 'react'
import "../life/life.css"


function life() {
  return (
    <section>
      <div className='lifeAtvenzo'>
        <p id="lifeAtvenzotitle">Life at Venzo</p>
        <p id="lifeAtvenzoText">Creating more opportunities for fun at work tends to boost Venzo morale. Our employees are more prone to put effort into an activity they find enjoyable. </p>
        <div className='youtubeVideo'>
          <div className='link1'>
          <div className="video-responsive">
          <iframe src="https://www.youtube.com/embed/UasAjYBtybc"></iframe>
          </div>
          </div>
          <div className='link2'>
          <div className="video-responsive">
          <iframe  src="https://www.youtube.com/embed/V3Ms61nY3wY"></iframe>
          </div>
          </div>
        </div>

      </div>
    </section>



  )
}

// import lifeData from '../../content/lifeData.json'
// function life() {
//   return (
//     <div>
//       {lifeData.map((item) => 
//       {return <section>
//           <div className='lifeAtvenzo'>
//              <p id="lifeAtvenzotitle">{item.title}</p>
//              <p id="lifeAtvenzoText">{item.contn}</p>
//              <div className='youtubeVideo'>
//                <div className='link1'>
//                <img src={item.youtube1} alt='youtubeVideo1'></img>
//                </div>
//                <div className='link2'>
//                <img src={item.youtube2} alt='youtubeVideo2'></img>
//                </div>
//              </div>

//           </div>
//       </section>
//       }
//       )}
//       </div>




//   )
// }

export default life