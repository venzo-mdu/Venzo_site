import React from 'react'
import '../leadership/leadership.css'

import Leader1 from '../../../images/allpageabanner/about_us/Asif bro/Asif bro_1x.webp'
import Leader2 from '../../../images/allpageabanner/about_us/balaji bro/balaji bro_1x.webp'
import Leader3 from '../../../images/allpageabanner/about_us/Ravi bro/Ravi bro_1x.webp'
import linkedIcon from '../../../images/aboutus/aboutus14.png'




function leadership() {
  return (
    <>
      <div className='leadership'>
        <p id='leadershipTitle'>Meet Our Leadership Team</p>
        <p id='leadershipText'>With over 15 years of combined experience, we’ve <span id='hiringGradient1'>got a well-seasoned team of experts</span> at Venzo Technologies.</p>


        <div className='ourLeaders'>

          <div className='leaders'>
            <div className='imagewithText'>
              <img className='leaderImage' src={Leader1} alt='leader'></img>
              <div className='aboutLeader'>
                <p id='nameText'>Asif</p>
                <p id='positionText'>Co-Founder</p>
              </div>
            </div>
            <p id='aboutLeaders'>After a 12-year stint donning various hats as a Project leader, Pre-Sales Consultant, Functional Consultant, and Trade-finance professional, he took the entrepreneurial plunge in his early 30’s with a relentless drive for innovation and a passion to best to align technology with customer business plans. </p>
            <a href='https://www.linkedin.com/in/asifaly/' target={'_blank'}><img className='linkedinIcon' src={linkedIcon} alt='linkedicon'></img></a>
          </div>

          <div className='leaders'>
            <div className='imagewithText'>
              <img className='leaderImage' src={Leader2} alt='leader'></img>
              <div className='aboutLeader'>
                <p id='nameText'>Balaji</p>
                <p id='positionText'>Co-Founder</p>
              </div>
            </div>
            <p id='aboutLeaders'>Trade Finance professional with experience of more than 18 years in all facets of trade finance operations and handling projects of different natures like in-sourcing, core banking, online banking & merger of banks. </p>
            <a href='https://www.linkedin.com/in/balaji-venkatachalam-1012145/' target={'_blank'}><img className='linkedinIcon IconCoFounder' src={linkedIcon} alt='linkedicon'></img></a>
          </div>

          <div className='leaders'>
            <div className='imagewithText'>
              <img className='leaderImage' src={Leader3} alt='leader'></img>
              <div className='aboutLeader'>
                <p id='nameText'>Ravi</p>
                <p id='positionText'>Co-Founder</p>
              </div>
            </div>
            <p id='aboutLeaders'>CEG Alumnus and a Business Leader with 17 plus years of rich experience in handling Finance and Operations. Expertise in handling a diverse range of operations, including areas involving Strategy, Engineering, Delivery, Marketing, Program Management for software products and services.</p>
            <a href='https://www.linkedin.com/in/ravindran-subbaiah-74824369/' target={'_blank'}><img className='linkedinIcon' src={linkedIcon} alt='linkedicon'></img></a>
          </div>

        </div>

      </div>
    </>
  )
}

// function leadership() {
//   return (
//     <>
//     <div className='leadership'>
//         <p id='leadershipTitle'>Meet Our Leadership Team</p>
//         <p id='leadershipText'>With over 15 years of combined experience, we’ve <span id='hiringGradient1'>got a well-seasoned team of experts</span> at Venzo Technologies.</p>


//         <div className='ourLeaders'>

//           <div className='leaders'>
//             <div className='imagewithText'>
//             <img className='leaderImage' src={Leader1} alt='leader'></img>
//             <div className='aboutLeader'>
//               <p id='nameText'>Asif</p>
//               <p id='positionText'>Co-Fouder</p>
//             </div>
//             </div>
//             <p id='aboutLeaders'>After a 12-year stint donning various hats as a Project leader, Pre-Sales Consultant, Functional Consultant, and Trade-finance professional, he took the entrepreneurial plunge in his early 30’s with a relentless drive for innovation and a passion to best to align technology with customer business plans.</p>
//             <img className='linkedinIcon' src={linkedIcon} alt='linkedicon'></img>
//           </div>

//           <div className='leaders'>
//             <div className='imagewithText'>
//             <img className='leaderImage' src={Leader2} alt='leader'></img>
//             <div className='aboutLeader'>
//               <p id='nameText'>Balaji</p>
//               <p id='positionText'>Co-Fouder</p>
//             </div>
//             </div>
//             <p id='aboutLeaders'>Trade Finance professional with experience of more than 18 years in all facets of trade finance operations and handling projects of different natures like in-sourcing, core banking, online banking & merger of banks.</p>
//             <img className='linkedinIcon IconCoFounder' src={linkedIcon} alt='linkedicon'></img>
//           </div>

//           <div className='leaders'>
//             <div className='imagewithText'>
//             <img className='leaderImage' src={Leader1} alt='leader'></img>
//             <div className='aboutLeader'>
//               <p id='nameText'>Ravi</p>
//               <p id='positionText'>Co-Fouder</p>
//             </div>
//             </div>
//             <p id='aboutLeaders'>CEG Alumnus and a Business Leader with 17 plus years of rich experience in handling Finance and Operations. Expertise in handling a diverse range of operations, including areas involving Strategy, Engineering, Delivery, Marketing, Program Management for software products and services.</p>
//             <img className='linkedinIcon' src={linkedIcon} alt='linkedicon'></img>
//           </div>

//         </div>

//     </div>
//     </>
//   )
// }

export default leadership