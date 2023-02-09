import React from 'react'
import '../applyJob/applyJob.css'
import experianceImg from '../../../images/expImg.png'
import TickImg from '../../../images/tickImg.png'
import fbIcon from '../../../images/fbCareers2.png'
import twitterIcon from '../../../images/twitterCareers2.png'
import linkedinIcon from '../../../images/linkedinCareers2.png'
import instaIcon from '../../../images/igCareers2.png'
import Popup from '../popup/popup'
import { useState } from 'react'
import axios from 'axios'
import toMail from '../../../config/config'
import Popup1 from '../popup/popup'

function ApplyJob() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [emailInput, setEmailInput] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [file, setFile] = useState([]);
  const handleChange = (e) => {

    setEmailInput({ ...emailInput, [e.target.name]: e.target.value });

  }
  const handleFileChange = (e) => {
    console.log(e)
    setFile(e.target.file)
  }

  async function sendEmail(event) {
    event.preventDefault()
    const body = {
      to: toMail,
      message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
      // message:emailInput["message"]+emailInput["email"],
      subject: "subject here"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)
    setSubmit(true)


  }
  return (
    <>


      <section>
        <div className='applyJob'>
          <div className='job'>
            <div className='details'>
              <p id='detailsText'>BPM / JAVA ARCHITECT</p>
              <p id='experiancerText'><img src={experianceImg} alt='experiance'></img> 8-10 Years Experience</p>
            </div>
            <div className='applyNow'>
              <button className='applyNowButton' data-toggle="modal" data-target="#exampleModalCenter" onClick={() => setButtonPopup(true)}>Apply Now</button>

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
                <li> <img src={TickImg} alt='tickImg'></img> At least 8-10 years of IT experience in Java and BPM technologies.</li>
                <li><img src={TickImg} alt='tickImg'></img> At least 3 years of BPM experience actively contributing with large-scale BPM projects.</li>
                <li><img src={TickImg} alt='tickImg'></img>Understanding requirements from business-team and model workflow.</li>
                <li><img src={TickImg} alt='tickImg'></img> Creating BPMN processes</li>
                <li><img src={TickImg} alt='tickImg'></img>Integrating approval into corporate portal using apis for seamless UI experiences.</li>
                <li> <img src={TickImg} alt='tickImg'></img> Has clear idea about identity and Access management to a BPM application..</li>
                <li><img src={TickImg} alt='tickImg'></img>Strong knowledge on integrate principles to integrate BPM with other systems.</li>
                <li><img src={TickImg} alt='tickImg'></img>At least 3 years of spring boot experience involving REST, SpringData, SpringIntegration.</li>
                <li><img src={TickImg} alt='tickImg'></img> Extensive hands-on Service Oriented architecture.</li>
                <li><img src={TickImg} alt='tickImg'></img>Comfortable with microservices/cloud architecture.</li>
                <li><img src={TickImg} alt='tickImg'></img>Ability to work with team.</li>
              </ul>

            </div>
            <div className='skillsRequired'>
              <p id='skillsRequiredTitle'>skills Required</p>
              <ul>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Experience in Kubernetes</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Deep knowledge in database.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Working knowledge on AWS or other cloud platforms.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Administration experience with both offline and online deployments.</p></li>
              </ul>


            </div>
            <button className='applyNowButton1' onClick={() => setButtonPopup(true)}>Apply Now</button>
          </div>
        </div>

      </section>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={sendEmail}>
          <p id='joinourteamText'>Join our team</p>
          <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
          <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
          <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
          <input className='file' name='file' type="file" value={file} onChange={handleFileChange} placeholder='choose file' />
          <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*'></textarea>
          <button type='submit' className='Fbutton'>Submit</button>
        </form>
      </Popup>

      <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          Thank you for contacting us, our team will reach you.
        </div>
      </Popup>

    </>
  )
}

export default ApplyJob