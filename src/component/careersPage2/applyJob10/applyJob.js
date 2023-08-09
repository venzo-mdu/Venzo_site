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
                            <p id='detailsText'>UI UX Designer</p>
                            <p id='experiancerText'><img src={experianceImg} alt='experiance'></img> 6 Months - 1 Year Experience</p>
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
                            <p id='skillsRequiredTitle'>Job Profile</p>
                            <ul>
                                <li> <img src={TickImg} alt='tickImg'></img>Venzo Technologies looking for Web Developer with 6 months to 1 year of experience.</li>
                                <li><img src={TickImg} alt='tickImg'></img> We at Venzo looking for a young & creative mind with a keen learning interest and passion for UIUX and Visual designs (Brand designs, Creatives, & more.)   </li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Job Descripition</p>
                            <ul>
                                <li> <img src={TickImg} alt='tickImg'></img>A good knowledge in UI, UX design for Web/ Mobile Application & Graphics design. </li>
                                <li><img src={TickImg} alt='tickImg'></img> Knowledge in creating Wireframing for Web and Mobile UI.  </li>
                                <li><img src={TickImg} alt='tickImg'></img> Exposure in Adobe Photoshop, Figma, Illustrator, XD, Balsamiq, Invision.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Responsible for generating graphics and media designs (Pictures, logos, illustrations, Website Banners, Brochures, Print Adverts, Digital Ads etc.) essentials by using Photoshop, Illustrator etc.   </li>
                                <li><img src={TickImg} alt='tickImg'></img> Develop an understanding of different types of Design Collaterals like Social Media Posts, Landing Pages, Ads, Micro-site, E-mailers, etc.   </li>
                                <li><img src={TickImg} alt='tickImg'></img> Hands on experience in Social media creatives, Prototyping & Interaction Design.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Collaborative Design with other partners (Product Management, Marketing, Technical Architect, Developers)</li>
                                <li><img src={TickImg} alt='tickImg'></img> Analyze and understand Customer personal.</li>


                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'> Required Candidate Profile</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Any degree </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Creativity and Innovation </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Passion For Design and Interest to Learn Explore New Domains.</p></li>
                            </ul>
                        </div>
                       

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Interview Process</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Screening </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Design Test </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>In person Interview </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Final HR discussion  </p></li>
                            </ul>

                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Perks & Benefits </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Excellent Salary   </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Career Growth  </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Friendly Work Environment</p></li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>About a company </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Venzo Technologies, a custom software development company that offers integrated solutions to start-ups, SMEs, and large enterprises. Over the course of six years, we have been developing, optimizing, and scaling products on a wide range of platforms, including Mobile, Web, Cloud, Blockchain and Analytics.   </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>For more information visit : </p></li>
                               <li style={{color:'blue'}} id='SkillPara'> <a href='https://www.venzotechnologies.com' >https://www.venzotechnologies.com</a></li> 
                                
                                </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>How to apply</p>
                            <ul>
                                
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Interested candidates please share your updated profile to : </p></li>
                               <li style={{color:'blue'}} id='SkillPara'> <a href='mailto:hrteam@venzotechnologies.com ' >hrteam@venzotechnologies.com </a></li> 
                                
                                </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'></p>
                            <ul>
                                <li>Note : Preference for Immediate <span style={{color:'blue',fontStyle:'italic'}}> &nbsp;Joinee /30 Days Notice Period</span>  </li>
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