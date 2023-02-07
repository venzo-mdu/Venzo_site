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
import Countup from 'react-countup'
import { duration } from '@mui/material';
import Accordion from 'react-bootstrap/Accordion';
import ScrollTrigger from 'react-scroll-trigger'


function Unleashing() {
  const [counter, setCounter]=useState(false);
  const [active, setActive] = useState('');
  const dated = (va) => {
      let container
      if( document.querySelector('.cardAboutUs') !==null){
          container = document.querySelector('.cardAboutUs')
      }
      setActive(va)
      if (va == 'Values') {
          container.innerHTML = "<font size=4 color=black>\
          We offer solutions for Startups/SME/Entrepreneurs\
          </font>\
          <br>\
          <br>\
          <font size=3 color=gray>\
          Venzo values honesty, integrity, and respect for all individuals. We believe in creating a positive, inclusive work environment and fostering collaboration and innovation.\
          </font>\
          <br>\
          <br>\
  ";
      }
      else if (va === 'Diversity') {
          container.innerHTML = "<font size=4 color=black>\
          People first always\
          </font>\
          <br>\
          <br>\
          <font size=3 color=gray>\
          Venzo values diversity and equity in all aspects of our business. We believe that creating a diverse and inclusive environment fosters innovation and leads to better outcomes for our employees, customers, and community.\
          </font>\
  ";
      }
      else if (va === 'Society') {
        container.innerHTML = "<font size=4 color=black>\
        Creating social impact through thechnologies\
        </font>\
        <br>\
        <br>\
        <font size=3 color=gray>\
        Venzo has a strong commitment to social responsibility and actively works to make a positive impact on society through various initiatives and partnerships.\
        </font>\
";
    }
    }
  return (
    <div className='unleashing'>
      <p id='unleashingTitle'>Venzo is <span id='unleashingGradient'> unleashing the </span> <span className='unleashingGradient1'> transformative power</span> in Technology platforms</p>
      <div className='powerOfvenzo'>
        <div className='powerleftImage'>
          <img className='powerImage' alt='venzopower' src={powerImage}></img>
        </div>
        <div className='powerrightImage'>
          <p id='powerrightText'>We lead with an independent point-of-view. That means we work with the partners you ask for in addition to the ones we know you need, leveraging our stores of knowledge and experience to bring together the best of the best to help you reach your specific goals.</p>
          <div className='aboutVenzo'>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon1} alt=''></img>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <p id='aboutinnerNumber'>
                {counter && <Countup start={0} end ={90} duration={2} delay={0}></Countup>}
               +
              </p>
              </ScrollTrigger>
              
             
              <p id='aboutinnerText'>Brilliant minds</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon2} alt=''></img>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <p id='aboutinnerNumber'>
                {counter && <Countup start={0} end ={6} duration={2} delay={0}></Countup>}
               
              </p>
              </ScrollTrigger>
              <p id='aboutinnerText'>Years of Business</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon3} alt=''></img>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <p id='aboutinnerNumber'>
                {counter && <Countup start={0} end ={6} duration={2} delay={0}></Countup>}
               +
              </p>
              </ScrollTrigger>
              <p id='aboutinnerText'>Amazing Products</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon4} alt=''></img>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <p id='aboutinnerNumber'>
                {counter && <Countup start={0} end ={20} duration={2} delay={0}></Countup>}
               +
              </p>
              </ScrollTrigger>
              <p id='aboutinnerText'>Satisfied Clients</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon5} alt=''></img>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <p id='aboutinnerNumber'>
                {counter && <Countup start={0} end ={98} duration={2} delay={0}></Countup>}
               %
              </p>
              </ScrollTrigger>
              <p id='aboutinnerText'>Customer Retention</p>
            </div>
            <div className='aboutInner'>
              <img className='aboutinnerImage' src={gridIcon6} alt=''></img>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
              <p id='aboutinnerNumber'>
                {counter && <Countup start={0} end ={30} duration={2} delay={0}></Countup>}
               +
              </p>
              </ScrollTrigger>
              <p id='aboutinnerText'>Tech Stack</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='commitments'>
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
        </div> */}

                <div className='aboutLeftCommit'>
                  <div>
                  <ul className='leftCommit1'>
                        <li className={active === 'Values' ? 'cardtitle02' : 'cardtitle1'} onClick={() => dated('Values')}>Values</li>
                        <li className={active === 'Diversity' ? 'cardtitle02' : 'cardtitle2'} onClick={() => dated('Diversity')}>Diversity & Equity</li>
                        <li className={active === 'Society' ? 'cardtitle02' : 'cardtitle3'} onClick={() => dated('Society')}>Society Impact</li>
                    </ul>
                  </div>
                    <div className='cardAboutUs'>
                        <p> We offer solutions for Startups/SME/Entrepreneurs</p>
                        <p className='subTitle'>Venzo values honesty, integrity, and respect for all individuals. We believe in creating a positive, inclusive work environment and fostering collaboration and innovation. </p>
                    </div>
                </div>
                <div className='section51 aboutCardUnleas'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Values</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                {/* <p className='cardtitle'>Values</p> */}
                                <p className='carddesc'>Venzo values honesty, integrity, and respect for all individuals. We believe in creating a positive, inclusive work environment and fostering collaboration and innovation. </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Diversity & Equity</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                {/* <p className='cardtitle'>Diversity & Equity</p> */}
                                <p className='carddesc'>Venzo values diversity and equity in all aspects of our business. We believe that creating a diverse and inclusive environment fosters innovation and leads to better outcomes for our employees, customers, and community. </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Society Impact</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                {/* <p className='cardtitle'>Society Impact</p> */}
                                <p className='carddesc'>Venzo has a strong commitment to social responsibility and actively works to make a positive impact on society through various initiatives and partnerships.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
      </div>


    // </div>
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



{/* <div display=grid>\
<div px-5>\
  <img src='" + TickIcon+ "'  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \
  <img src='" + TickIcon + "' />\
  <img src='" + TickIcon + "' />\
  <img src='" + TickIcon + "' />\
</div>\
<div>\
hello\
hello\
</div>\

</div>\ */}