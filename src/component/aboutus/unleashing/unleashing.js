import '../unleashing/unleashing.css'
import '../unleashing/Laptop.css'
import React, { useState } from 'react';


import powerImage from '../../../images/aboutus/aboutus4.png'
import gridIcon1 from '../../../images/aboutus/aboutus13.png'
import gridIcon2 from '../../../images/aboutus/aboutus12.png'
import gridIcon3 from '../../../images/aboutus/aboutus8.png'
import gridIcon4 from '../../../images/aboutus/aboutus10.png'
import gridIcon5 from '../../../images/aboutus/aboutus9.png'
import gridIcon6 from '../../../images/aboutus/aboutus11.png'
import TickIcon from '../../../images/aboutus/aboutus17.png'



function Unleashing() {
//   const [active, setActive] = useState('');
//   const dated = (va) => {
//       let container
//       if( document.querySelector('.card1') !==null){
//           container = document.querySelector('.card1')
//       }
//       setActive(va)
//       if (va == 'Values') {
//           container.innerHTML = "<font size=4 color=black>\
//           We offer solutions for Startups/SME/Entrepreneurs\
//           </font>\
//           <br>\
//           <br>\
//           <font size=3 color=gray>\
//           We are client-oriented with a “service” mentality. We are available to assist you. We can either lead or follow. Our primary goal is to maintain the highest quality standards and best practices in today’s IT market.We are client-oriented with a “service” mentality. We are available to assist you. We can either lead or follow. Our primary goal is to maintain the highest quality standards and best practices in today’s IT market.\
//           </font>\
//   ";
//       }
//       else if (va === 'Diversity') {
//           container.innerHTML = "<font size=4 color=black>\
//           We offer refined customized applications that streamline your 2.\
//           </font>\
//           <br>\
//           <br>\
//           <font size=3 color=gray>\
//           Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
//           </font>\
//   ";
//       }
//       else if (va === 'Society') {
//         container.innerHTML = "<font size=4 color=black>\
//         We offer refined customized applications that streamline your 2.\
//         </font>\
//         <br>\
//         <br>\
//         <font size=3 color=gray>\
//         Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
//         </font>\
// ";
//     }
//     }
  return (
    <div className='unleashing'>
      <p id='unleashingTitle'>Venzo is <span id='unleashingGradient'> unleashing the </span> <span className='unleashingGradient1'> transformative power</span> in Technology platforms</p>
      <div className='powerOfvenzo'>
        <div className='powerleftImage'>
          <img className='powerImage' alt='venzopower' src={powerImage}></img>
        </div>
        <div className='powerrightImage'>
          <p id='powerrightText'>Venzo Technologies leverages the power of cognitive computing, hyper-automation, cloud, analytics, and emerging technologies to assist our clients in adapting to and succeeding in the digital world.</p>
          <div className='aboutVenzo'>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon1} alt=''></img>
              <p id='aboutinnerNumber'>90+</p>
              <p id='aboutinnerText'>Brilliant minds</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon2} alt=''></img>
              <p id='aboutinnerNumber'>6</p>
              <p id='aboutinnerText'>Years of Business</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon3} alt=''></img>
              <p id='aboutinnerNumber'>6+</p>
              <p id='aboutinnerText'>Amazing Products</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon4} alt=''></img>
              <p id='aboutinnerNumber'>20+</p>
              <p id='aboutinnerText'>Satisfied Clients</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon5} alt=''></img>
              <p id='aboutinnerNumber'>98%</p>
              <p id='aboutinnerText'>Customer Retention</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon6} alt=''></img>
              <p id='aboutinnerNumber'>30+</p>
              <p id='aboutinnerText'>Tech Stack</p>
            </div>
          </div>
        </div>
      </div>

      <div className='commitments'>
        <div className='leftCommit'>
          <p id='leftCommitTitle'>Our Commitments</p>
          <div className='whatCommits1'>
            <p id='whatCommitsText1'>Values</p>
          </div>
          <div className='whatCommits'>
            <p id='whatCommitsText'>Diversity & Equity</p>
          </div>
          
          <div className='whatCommits'>
            <p id='whatCommitsText'>Society Impact</p>
          </div>
        </div>
        <div className='rightCommit'>
          <p id='rightCommitTitle'>We offer solutions for Startups/SME/Entrepreneurs</p>
          <p id='rightCommitText'>We are client-oriented with a “service” mentality. We are available to assist you. We can either lead or follow. Our primary goal is to maintain the highest quality standards and best practices in today’s IT market.We are client-oriented with a “service” mentality. We are available to assist you. We can either lead or follow. Our primary goal is to maintain the highest quality standards and best practices in today’s IT market.</p>

          <div className='rightCommitIcons'>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Accelerated <br className='Accele'></br> Work</p>
            </div>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Total Transparency</p>
            </div>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Customer Centred Experience</p>
            </div>
            <div className='rightCommitblocks'>
              <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
              <p id='tickiconText'>Revolutionary Testing</p>
            </div>
          </div>

        </div>
                {/* <div className='leftCommit'>
                    <ul className='leftCommit1'>
                        <li className={active === 'Values' ? 'cardtitle01' : 'cardtitle1'} onClick={() => dated('Values')}>Values</li>
                        <li className={active === 'Diversity' ? 'cardtitle01' : 'cardtitle2'} onClick={() => dated('Diversity')}>Diversity & Equity</li>
                        <li className={active === 'Society' ? 'cardtitle01' : 'cardtitle3'} onClick={() => dated('Society')}>Society Impact</li>
                    </ul>
                    <div className='card1'>
                        <p> We offer refined customized applications that streamline your. </p>
                        <p className='subTitle'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                    </div>
                </div> */}

      </div>


    </div>
  )
}


// import aboutusData from '../../../content/aboutusData.json'
// function unleashing() {
//   return (
//     <div>
// {aboutusData.map((item) => {

// return <div><div className='unleashing'>
//       <p id='unleashingTitle'>{item.title1} <span id='unleashingGradient'> {item.title2} </span> <span className='unleashingGradient1'> {item.title3}</span> {item.title4}</p>
//       <div className='powerOfvenzo'>
//         <div className='powerleftImage'>
//           <img className='powerImage' alt='venzopower' src={powerImage}></img>
//         </div>
//         <div className='powerrightImage'>
//           <p id='powerrightText'>{item.powerCont}</p>
//         <div className='aboutVenzo'>
//              <div className='aboutInner'>
//               <img className='aboutinnerImage' src={item.icon} alt=''></img>
//               <p id='aboutinnerNumber'>90+</p>
//               <p id='aboutinnerText'>Brilliant minds</p>
//             </div>
 
//           </div>
      
//         </div>
//       </div>
// </div>

    
//       <div className='commitments'>
//         <div className='leftCommit'>
//           <p id='leftCommitTitle'>{item.commit}</p>
//           <div className='whatCommits1'>
//             <p id='whatCommitsText1'>{item.commit1}</p>
//           </div>
//           <div className='whatCommits'>
//             <p id='whatCommitsText'>{item.commit2}</p>
//           </div>
//           <div className='whatCommits'>
//             <p id='whatCommitsText'>{item.commit3}</p>
//           </div>
//         </div>
//         <div className='rightCommit'>
//           <p id='rightCommitTitle'>{item.offer}</p>
//           <p id='rightCommitText'>{item.offerCont}</p>

//           <div className='rightCommitIcons'>
//             <div className='rightCommitblocks'>
//               <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
//               <p id='tickiconText'>Accelerated <br className='Accele'></br> Work</p>
//             </div>
//             <div className='rightCommitblocks'>
//               <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
//               <p id='tickiconText'>Total Transparency</p>
//             </div>
//             <div className='rightCommitblocks'>
//               <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
//               <p id='tickiconText'>Customer Centred Experience</p>
//             </div>
//             <div className='rightCommitblocks'>
//               <img className='rightTickIcon' src={TickIcon} alt='tickIcon'></img>
//               <p id='tickiconText'>Revolutionary Testing</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//     })}
//   </div>
   
    
//   )
// }
export default Unleashing