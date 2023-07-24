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
                            <p id='detailsText'>Web Developer</p>
                            <p id='experiancerText'><img src={experianceImg} alt='experiance'></img> 2 - 3 Years Experience</p>
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
                            <p id='skillsRequiredTitle'>Job Descripition</p>
                            <ul>
                                <li> <img src={TickImg} alt='tickImg'></img>Web Developers build, maintain websites and ensure they perform reliably & efficiently. They ensure that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error messages.</li>
                                <li><img src={TickImg} alt='tickImg'></img> Web Developers collaborate with website & graphic designers, monitor website traffic, troubleshoot website problems when they arise and update websites as necessary. </li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Roles & Responsibilities</p>
                            <ul>
                                <li> <img src={TickImg} alt='tickImg'></img>Venzo Technologies looking for Web Developer with 2 to 3 years of experience.</li>
                                <li><img src={TickImg} alt='tickImg'></img> We at Venzo Technologies looking for outstanding Web Developer having 2-3 years of experience who has the quench to scale up & create path breaking software solution. This is a fantastic opportunity to engage in a positive and creative work environment that offers excellent benefits and flexible schedules.  </li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>skills Required</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Top-notch programming skills and in-depth knowledge of WordPress.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>In-depth knowledge of PHP, MySQL, JavaScript/jQuery and HTML/CSS  </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Good understanding & knowledge in WooCommerce, Shopify, Squarespace. </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Developing/modifying custom WordPress/Woo-Commerce themes and plugins. </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Adequate knowledge in hosting website.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Solid understanding of how web applications work including security, session management, and best development practices.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Good Communication skills & Quick learner. </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Ability to manage the project & client.  </p></li>
                            </ul>


                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Location</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Chennai (Work from Office) </p></li>
                            </ul>
                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Interview Process</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Face to Face Interview</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Assessment – Machine Test  </p></li>

                            </ul>

                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Perks & Benefits </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Attractive Compensation  </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Career Growth </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Friendly Work Environment</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Medical Insurance</p></li>
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
                                <li>Note :<span style={{color:'blue',fontStyle:'italic'}}> &nbsp;Interview will be conducted in Venzo office @ Chennai</span>  </li>
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