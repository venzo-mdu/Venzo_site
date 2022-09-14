import React from 'react'
import '../applyJob/applyJob.css'
import experianceImg from '../../../images/expImg.png'
import TickImg from '../../../images/tickImg.png'
import fbIcon from '../../../images/fbCareers2.png'
import twitterIcon from '../../../images/twitterCareers2.png'
import linkedinIcon from '../../../images/linkedinCareers2.png'
import instaIcon from '../../../images/igCareers2.png'

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
            <button className='applyNowButton' data-toggle="modal" data-target="#exampleModalCenter">Apply Now</button>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            
            <div className='socialmediaIconsCareers'>
            <p id='shareitOn'>share it on</p>
            <div className='icons'>
              <img src={fbIcon} alt='fb-icon'></img>
              <img src={twitterIcon} alt='twitter-icon'></img>
              <img src={linkedinIcon} alt='linkedin-icon'></img>
              <img src={instaIcon} alt='insta-icon'></img>

            </div>
            </div>
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
               <li><img src={TickImg} alt='tickImg'></img> Must have HP ALM or XRAY Test management tool experience</li>
               <li><img src={TickImg} alt='tickImg'></img>Good to have Selenium (Java, Python), Opkey or Any Automation testing experience, at least basics.</li>
               <li><img src={TickImg} alt='tickImg'></img>Good to have Lifescience domain experience</li>
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