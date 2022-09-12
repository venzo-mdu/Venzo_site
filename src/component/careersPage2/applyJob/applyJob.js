import React from 'react'
import '../applyJob/applyJob.css'
import experianceImg from '../../../images/expImg.png'
import TickImg from '../../../images/tickImg.png'
function applyJob() {
  return (
    <>
    <section>
      <div className='applyJob'>
        <div className='job'>
          <div className='details'>
            <p id='detailsText'>Automation Tester</p>
            <p id='experiancerText'><img src={experianceImg} alt='experiance'></img> 3 - 5 Years Experience</p>
          </div>
          <div className='applyNow'>
            <button className='applyNowButton'>Apply Now</button>
            <p id='shareitOn'>share it on</p>
          </div>
        </div>
        <div className='descripition'>
            <div className='jobDescripition'>
             <p id='jobDescripitionTitle'>Job Descripition</p>
             <ul>
               <li> <img src={TickImg} alt='tickImg'></img> Read and understand the requirements given.</li>
               <li><img src={TickImg} alt='tickImg'></img> Think as a business user and come up with Test scenarios.</li>
               <li><img src={TickImg} alt='tickImg'></img> Write Test scripts as per the CSV validation procedure using Excel or HP ALM or XRAY tools.</li>
               <li><img src={TickImg} alt='tickImg'></img> Execute test cases and capture evidence in result document or HP ALM or XRAY tools.</li>
               <li><img src={TickImg} alt='tickImg'></img> Create traceability between the requirement, test cases, and defects.</li>

             </ul>

            </div>
            <div className='skillsRequired'>
             <p id='skillsRequiredTitle'>skills Required</p>
             <ul>
               <li> Must have HP ALM or XRAY Test management tool experience</li>
               <li>Good to have Selenium (Java, Python), Opkey or Any Automation testing experience, at least basics.</li>
               <li>Good to have Lifescience domain experience</li>
             </ul>

              
            </div>
            <button className='applyNowButton'>Apply Now</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default applyJob