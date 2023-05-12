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
import { toHREnquiryMail } from '../../../config/config'

import { storage } from '../../firebase'
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import success from '../../../images/successfully.png'
function ApplyJob() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [imagelist, setImagelist] = useState('');
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
    const sendEmail = async (event) => {
        event.preventDefault();
        setSubmit(true)



        const body = {
            to: toHREnquiryMail,
            message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"] + " " + "<br> Resume:" + " " + imagelist,
            subject: "Venzo Careers Form",

        }
        const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
        console.log(emailResponse)
        setEmailInput(
            {
                name: "",
                email: "",
                mobile: "",
                message: ""
            }
        )
    }
    const sendFile = (e) => {
        console.log('hihh', imagelist, 'image', imageUpload);
        setImageUpload(e.target.files[0])
        console.log(e.target.files[0])
        const imageRef = ref(storage, `venzofile/${e.target.files[0].name + v4()}`)

        uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                // setImagelist((prev) => [...prev, url]);
                setImagelist(url)
            })
        })
    }
    return (
        <>


            <section>
                <div className='applyJob'>
                    <div className='job'>
                        <div className='details'>
                            <p id='detailsText'>Project & Account Manager</p>
                            <p id='experiancerText'><img src={experianceImg} alt='experiance'></img> 3 - 4 Years Experience</p>
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
                        <div className='skillsRequired'>
                            <p id='jobDescripitionTitle'>Job Descripition</p>
                            <ul>
                                <li> <img src={TickImg} alt='tickImg'></img>Venzo Technologies looking for Account/ProjectManager with 3 to 4years of experience.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Candidate will  be  involved  inaccount  management  and  project  management  for  Website,  E-commerce  and Digital marketing projects. </li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='jobDescripitionTitle'>Roles & Responsibilities</p>
                            <ul>
                                <li> <img src={TickImg} alt='tickImg'></img>Lead projects from requirements definition through implementation, identifying schedules, scopes, budget estimations, and implementation plans, including risk mitigation.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Coordinate internal teams to ensure that projects adhere to scope, schedule, and budget. </li>
                                <li><img src={TickImg} alt='tickImg'></img>Analyze project status and, when necessary, escalateto ensure that project requirements can be met. </li>
                                <li><img src={TickImg} alt='tickImg'></img> Responsible  for  initiating,  planning,  execution  (monitoring/controlling)  and  close-down  of projects. </li>
                                <li><img src={TickImg} alt='tickImg'></img> Structure and manage integrated, multitrack projects across production, performance, brand projects.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Ensure the timely and successful delivery of our solutions according to customer needs and objectives.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Interaction with PreSales,Design, Development, and marketing team to get the work done.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Communicate clearly the progress of monthly/quarterly initiatives to internal and external stakeholders.</li>
                                <li><img src={TickImg} alt='tickImg'></img>Manage  a  project  (design,  website,  digital  marketing)  seamlessly  by  interacting  internalresources.</li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>skills Required</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>A  minimum  of 3years  of  experience  in  managing  multiple  projects  either  in  aWebsite development or Design agency or similar environment (Domestic & International clients).</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Proven  track  record  in  leading successful  project  implementations  for  a  diverse  range  of clients. </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Strong knowledge of various digital platforms, including website development, social media channels, content management systems, email marketing tools, and web analytics tools.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Excellent  written  and  verbal  communication  skills,  with  the  ability  to  effectively  convey complex concepts and ideas to diverse audiences, including clients and internal stakeholders.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Strong  project  management  and  organisational  skills,  with  the  ability  to  manage  multiple priorities and meet deadlines in a fast-paced, deadline-driven environment</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>A collaborative mindset, with the ability to work effectively as part of a team and build strong relationships with stakeholders at all levels of the organisation.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Strong analytical and problem-solving skills, with the ability to approach challenges with a solutions-oriented mindset.</p></li>

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
                    <input className='file' type="file" accept='.pdf , .doc , .docx' placeholder='choose file' onChange={sendFile} />
                    <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message' ></textarea>
                    <button type='submit' className='Fbutton'>Submit</button>
                </form>
            </Popup>

            <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
                <div className='thankPop'>
                    <p className='subSucss'>Submitted successfully</p>
                    <img src={success} alt='success' className='succImg' />
                    <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
                </div>
            </Popup>
        </>
    )
}

export default ApplyJob