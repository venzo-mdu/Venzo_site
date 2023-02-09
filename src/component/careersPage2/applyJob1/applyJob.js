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
import { storage } from '../../firebase'
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

function ApplyJob() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [imagelist, setImagelist] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [emailInput, setEmailInput] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
  }
    const sendEmail =async(event)=>{
    event.preventDefault();
    sendFile();
 

    const body = {
      to: toMail,
      cc: "priyankac@venzotechnologies.com",
      message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
      // message:emailInput["message"]+emailInput["email"],
      subject: "subject here"
    }
    const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
    console.log(emailResponse)
    setSubmit(true)

  }
  const sendFile =()=>{
    console.log('hihih');
  
    const imageRef = ref(storage, `venzofile/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImagelist((prev) => [...prev, url]);
      })
    })
  }
  return (
    <>


      <section>
        <div className='applyJob'>
          <div className='job'>
            <div className='details'>
              <p id='detailsText'>SR. JAVA DEVELOPERS</p>
              <p id='experiancerText'><img src={experianceImg} alt='experiance'></img> 6 Years Experience</p>
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
                <li> <img src={TickImg} alt='tickImg'></img>At least 6 years of IT experience in Java / Spring Boot technologies.</li>
                <li><img src={TickImg} alt='tickImg'></img> Should have strong core java skills.</li>
                <li><img src={TickImg} alt='tickImg'></img> Should have experience in Spring MVC / Spring Boot with Hibernate / JPA.</li>
                <li><img src={TickImg} alt='tickImg'></img>Should have experience in building REST web services with Spring MVC / Spring Boot.</li>
                <li><img src={TickImg} alt='tickImg'></img>Should have experience in building backend applications with JMS/messaging-services.</li>
                <li><img src={TickImg} alt='tickImg'></img>Strong knowledge on integrate principles to integrate BPM with other systems.</li>
                <li><img src={TickImg} alt='tickImg'></img>Should be able to work with Maven / Gradle.</li>
                <li><img src={TickImg} alt='tickImg'></img>Should have good Database skills – writing SQLs.</li>

              </ul>

            </div>
            <div className='skillsRequired'>
              <p id='skillsRequiredTitle'>skills Required</p>
              <ul>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Experience with Thymeleaf or template-engine.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Experience with Angular / React / Reactjs / Angularjs.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Experience with writing the JUnit / Mockito JS.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Experience in Kubernetes.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Deep knowledge in database.</p></li>
                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Working knowledge on AWS or other cloud platforms.</p></li>
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
          <input className='file' type="file" placeholder='choose file' onChange={(e)=>setImageUpload(e.target.files[0])}/>
          <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*' ></textarea>
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