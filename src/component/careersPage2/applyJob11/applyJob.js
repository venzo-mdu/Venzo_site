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
                            <p id='detailsText'>Marketing and Communication Strategist</p>
                            <p id='experiancerText'><img src={experianceImg} className='iconExp' alt='experiance'></img>   1 - 3 Years Experience</p>
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
                                <li> <img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Venzo Technologies is looking for Marketing & Communication Strategist with 1 to 3 years of experience.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'> Candidate will be involved Marketing communication & Social media strategies.</p></li>
                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Skills and qualifications</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>MBA/BE/MSc media studies </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Familiarity with social media platforms such as Facebook, X, Instagram, LinkedIn.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Understanding of SEO and web traffic metrics/analytics</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Strong analytical skills with the ability to interpret data and make data-driven decisions.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Familiarity with digital marketing tools and platforms.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Strong verbal and written communication skills</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Experience with graphic design, video editing, and publishing is an added advantage.</p></li>
                            </ul>
                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Communication Strategies</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Design, Develop and Own effective corporate communication strategies</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Create communication strategy and content for existing / new brand initiatives with brand language consistency and strategic approach</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Clear and effective communication with various stakeholders including the internal team,clients, partners and vendors.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Monitor SEO trends and Stay updated on industry trends, competitors, and customer preferences. Use this knowledge to adapt communication strategies accordingly.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Coordinate and promote company events, webinars, workshops, and conferences. Prepare event related communication materials.</p></li>
                            </ul>
                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Content Creation</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Create compelling and engaging content for various communication channels, including website, social media, press releases, newsletters, videos, and marketing materials.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Create, curate, and manage published content (images, video, written) across various social media platforms.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Conduct research and generate content that aligns with current social media trends and utilizes relevant hashtags to engage a target audience based on their interests.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Manage a social media content calendar for various channels, planning and scheduling posts in advance.</p></li>
                            </ul>
                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Social Media Engagement </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Manage and grow our social media presence across platforms such as Facebook, X, Instagram,LinkedIn, and others.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Create, curate, and manage published content (images, video, written) across various social media platforms.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Develop strategy, relevant ideas, themes, story-line for the clients social media marketing efforts</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Develop and implement effective social media optimization (SMO) strategies to boost online presence, engagement, and conversions.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Work with the content and design team members to design, create and manage promotions and Social ad campaigns.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Coordinate with social media influencers, bloggers, and news outlets to promote brand awareness and create social buzz around product launches</p></li>


                            </ul>

                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Internal Communication </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Develop and implement internal communication strategies to ensure that employees are informed and engaged with company updates, initiatives, and culture.</p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Work with the team to conceive visuals/designs and content for specific campaigns</p></li>
                            </ul>

                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Brand Management </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Maintain and strengthen the company's brand identity, ensuring consistency in messaging and design across all communication channels.  </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Building brand perception and value as per company’s communication goals</p></li>
                            </ul>

                        </div>

                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>Analytics and Reporting</p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Monitor and analyze the performance of communication strategies, using metrics and feedback to make data-driven improvements. </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Analyze campaigns and translate qualitative data into recommendations and plans for revising social media, content marketing and social advertising campaigns. </p></li>
                            </ul>

                        </div>


                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>About a company </p>
                            <ul>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Venzo Technologies, a custom software development company that offers integrated solutions to start-ups, SMEs, and large enterprises. Over the course of six years, we have been developing, optimizing, and scaling products on a wide range of platforms, including Mobile, Web, Cloud, Blockchain and Analytics.   </p></li>
                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>For more information visit : </p></li>
                                <li style={{ color: 'blue' }} id='SkillPara'> <a href='https://www.venzotechnologies.com' >https://www.venzotechnologies.com</a></li>

                            </ul>

                        </div>
                        <div className='skillsRequired'>
                            <p id='skillsRequiredTitle'>How to apply</p>
                            <ul>

                                <li><img src={TickImg} alt='tickImg'></img><p id='SkillPara'>Interested candidates please share your updated profile to : </p></li>
                                <li style={{ color: 'blue' }} id='SkillPara'> <a href='mailto:hrteam@venzotechnologies.com ' >hrteam@venzotechnologies.com </a></li>

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