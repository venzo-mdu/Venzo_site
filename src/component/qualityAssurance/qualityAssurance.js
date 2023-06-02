import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Header from '../header/header'
import './assurance.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
import vector from '../../images/quality/Vector.png'
import functiontesting from '../../images/quality/functiontesting.png'
import manualtesting from '../../images/quality/manualtesting.png'
import performancetesting from '../../images/quality/performancetesting.png'
import line from '../../images/quality/Vectorline.png'
import group1 from '../../images/quality/group1.png'
import group2 from '../../images/quality/group2.png'
import group3 from '../../images/quality/group3.png'
import group4 from '../../images/quality/group4.png'
import group5 from '../../images/quality/group5.png'
import group6 from '../../images/quality/group6.png'
import gainimg from '../../images/allpageabanner/Gain peculiar/Gain peculiar_1x.webp'
import cardimg1 from '../../images/quality/quality13.svg'
import cardimg2 from '../../images/quality/quality14.svg'
import cardimg3 from '../../images/quality/quality12.svg'
import autoimg1 from "../../images/quality/Group 81757.svg"
import autoimg2 from "../../images/quality/Group 81755.svg"
import autoimg3 from "../../images/quality/Group 81756.svg"
import testimg1 from "../../images/quality/image 49.svg"
import testimg2 from "../../images/quality/image 50.svg"
import testimg3 from "../../images/quality/image 51.svg"
import developimg1 from "../../images/quality/image 52.svg"
import developimg2 from "../../images/quality/image 53.svg"
import webimg1 from "../../images/quality/image 57.svg"
import webimg2 from "../../images/quality/Group 81766.svg"
import webimg3 from "../../images/quality/image 58.svg"
import securityimg1 from "../../images/quality/securityimg1.png"
import securityimg2 from "../../images/quality/securityimg2.png"
import securityimg3 from "../../images/quality/securityimg3.png"
import performimg1 from "../../images/quality/image 34.svg"
import performimg2 from "../../images/quality/Group 81752.svg"
import performimg3 from "../../images/quality/image 39.svg"
import card4  from "../../images/quality/quality12.svg"

import Popup from '../../component/careersPage2/popup/popup'
import checkcolor from '../../images/quality/checkcolor.png'
import Footer from '../footer/footer'
import axios from 'axios'
import toMail from '../../config/config'
import {toEnquiryMail} from '../../config/config'

import success from '../../images/successfully.png'

function QualityAssurance() {
    const [active, setActive] = useState('');
    const [buttonPopup, setButtonPopup] = useState(false);
    const dated = (value) => {
        let container
        if (document.querySelector('.quality_card1') !== null) {
            container = document.querySelector('.quality_card1')
        }
        setActive(value)
        if (value === 'Automation') {
            container.innerHTML = "<img src='" + autoimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img class='q1images' src='" + autoimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + autoimg3 + "' />\
    ";
        }
        else if (value === 'Defect') {
            container.innerHTML = "<img src='" + testimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + testimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + testimg3 + "' />\
    ";
        }
        else if (value === 'Devops') {
            container.innerHTML = "<br>\
            <br>\
            <img src='" + developimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + developimg2 + "' />\
    ";
        }
        else if (value === 'Mobile') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + card4 + "' />\
    ";
        }
        else if (value === 'Web') {
            container.innerHTML = "<img src='" + webimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + webimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + webimg3 + "' />\
    ";
        }
        else if (value === 'Security') {
            container.innerHTML = "<img src='" + securityimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + securityimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + securityimg3 + "' />\
    ";
        }
        else if (value === 'Performance') {
            container.innerHTML = "<img src='" + performimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + performimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + performimg3 + "' />\
    ";
        }
    }
    const [submit, setSubmit] = useState(false);
    const [emailInput, setEmailInput] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (e) => {
        setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
    }
    async function sendEmail(event) {
        event.preventDefault()
        setSubmit(true)

        const body = {
            to: toEnquiryMail,
            message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
            subject: "Venzo Enquiry From: Lets Talk Form"
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
    return (
        <div>
            <Header flag='header2' />
            <div>
                <div className='quality_section1'>
                    <p className='quality_Title'>Improve your <br />software <br />performance now!​</p>
                </div>
                <div>
                    <p className='section2_Title'>We are <span className='colorname'>experts in</span></p>
                    <div className='roworder'>
                        <div className='colm'>
                            <img className="icon" src={performancetesting} alt='icon' />
                            <h2 className="heading">Performance <br />Testing</h2>
                        </div>
                        <img className='Vline2' src={line} alt="line"></img>
                        <hr className='qualityres' />
                        <div className='colm'>
                            <img className="icon" src={manualtesting} alt='icon' />
                            <h2 className="heading">Manual and <br />Automation Testing</h2>
                        </div>
                        <img className='Vline2' src={line} alt="line"></img>
                        <hr className='qualityres' />

                        <div className='colm'>
                            <img className="icon" src={functiontesting} alt='icon' />
                            <h2 className="heading">Functional <br />Testing</h2>
                        </div>
                        <img className='Vline2' src={line} alt="line"></img>
                        <hr className='qualityres' />
                        <div className='colm'>
                            <img className="icon" src={vector} alt='icon' />
                            <h2 className="heading">Usability <br />Testing</h2>
                        </div>
                    </div>
                    <p className='section2_desc'>Venzo is about providing an impeccable customer experience. We focus on robust quality testing mechanisms and practices tailored to your specific business goals by leveraging our expertise in various industries.</p>
                </div>
                <div className='assurance_section3'>
                    <div className='assurance_section3_s1'>
                        <p className='section3_s1Title'>Our Approach to<br />an End-to-end Quality Assurance Process</p>
                        <div>
                            <img className="s1icon" src={group1} alt='icon' />
                            <h2 className="s1heading">Performance Evaluation</h2>
                            <p className='s1desc'>We evaluate your application’s performance in various environments, as well as its scalability and stability under different user loads.</p>
                        </div>
                        <hr className='quality_cardTitleHr' />
                        <div>
                            <img className="s1icon" src={group2} alt='icon' />
                            <h2 className="s1heading">Quality and UX audit</h2>
                            <p className='s1desc'>During this stage, our experts will analyze your product’s user interface and come up with ideas for how to make your user experience smoother and more pleasant.</p>
                        </div>
                        <hr className='quality_cardTitleHr' />
                        <div>
                            <img className="s1icon" src={group3} alt='icon' />
                            <h2 className="s1heading">Integration Testing</h2>
                            <p className='s1desc'>This stage we conducted to evaluate the compliance of a system or component with specified functional requirements.</p>
                        </div>
                    </div>
                    <div className='assurance_section3_s2'>
                        <div>
                            <img className="s2icon" src={group4} alt='icon' />
                            <h2 className="s2heading">Performance Evaluation</h2>
                            <p className='s2desc'>We evaluate your application’s performance in various environments, as well as its scalability and stability under different user loads.</p>
                        </div>
                        <hr className='quality_cardTitleHr' />
                        <div>
                            <img className="s2icon" src={group5} alt='icon' />
                            <h2 className="s2heading">Quality and UX audit</h2>
                            <p className='s2desc'>During this stage, our experts will analyze your product’s user interface and come up with ideas for how to make your user experience smoother and more pleasant.</p>
                        </div>
                        <hr className='quality_cardTitleHr' />
                        <div>
                            <img className="s2icon" src={group6} alt='icon' />
                            <h2 className="s2heading">Integration Testing</h2>
                            <p className='s2desc'>This stage we conducted to evaluate the compliance of a system or component with specified functional requirements.</p>
                        </div>
                    </div>
                </div>
                <div className='assurance_section4'>
                    <div className='assurance_section4_s1'>
                        <p className='section4_heading'><span className='s4_colortext'>Gain Peculiar advantage</span> of Software testing from Venzo</p>
                        <p className='s4_desc'>Venzo offers end-to-end quality assurance and testing services to assist businesses in managing an increasingly complex technological landscape.</p>
                        <img src={gainimg} alt="line"></img>
                    </div>
                    <div className='assurance_section4_s2'>
                        <div className=' testbtn'><p>Driven Development</p></div>
                        <div className=' testbtn'><p>Security Testing</p></div>
                        <div className=' testbtn'><p> Functional Testing</p></div>
                        <div className=' testbtn'><p>Performance Engineering</p></div>
                    </div>
                </div>
                <div className='quality_section5'>
                    <p className="quality_section5_titlte">Software QA And Technology Stack & Tools</p>
                    <div className='quality_cardList'>
                        <ul className='quality_cardTitle'>
                            <li className={active === 'Automation' ? 'cardtitle01' : 'cardtitle1'} onClick={() => dated('Automation')}>Automation Testing</li>
                            <hr className='quality_cardTitleHr' />
                            <li className={active === 'Defect' ? 'cardtitle01' : 'cardtitle2'} onClick={() => dated('Defect')}>Test & Defect</li>
                            <hr className='quality_cardTitleHr' />
                            <li className={active === 'Devops' ? 'cardtitle01' : 'cardtitle3'} onClick={() => dated('Devops')}>Devops Integration</li>
                            <hr className='quality_cardTitleHr' />
                            <li className={active === 'Mobile' ? 'cardtitle01' : 'cardtitle4'} onClick={() => dated('Mobile')}>Mobile Testing</li>
                            <hr className='quality_cardTitleHr' />
                            <li className={active === 'Web' ? 'cardtitle01' : 'cardtitle5'} onClick={() => dated('Web')}>Web Testing</li>
                            <hr className='quality_cardTitleHr' />
                            <li className={active === 'Security' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('Security')}>Security Testing</li>
                            <hr className='quality_cardTitleHr' />
                            <li className={active === 'Performance' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('Performance')}>Performance Testing</li>
                        </ul>
                        <div className='quality_card1'>
                            <div>
                                <img src={autoimg1} alt="autoimg" />
                                <br /><br /><hr />
                                <img src={autoimg2} alt="autoimg" />
                                <br /><br /><hr />
                                <img src={autoimg3} alt="autoimg" />
                            </div>
                        </div>
                    </div>

                    <div className='quality_section52'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='qacardtitle' >Automation Testing </Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <img src={autoimg1} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={autoimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={autoimg3} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='qacardtitle' >Test & Defect</Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <img src={testimg1} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={testimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={testimg3} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='qacardtitle' >Devops Integration</Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <br /><br />
                                        <img src={developimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={developimg1} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='qacardtitle' >Mobile Testing</Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <img src={cardimg1} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={cardimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={cardimg3} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className='qacardtitle' >Web Testing</Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <img src={webimg1} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={webimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={webimg3} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className='qacardtitle' >Security Testing</Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <img src={securityimg1} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={securityimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={securityimg3} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header className='qacardtitle' >Performance Testing</Accordion.Header>
                                <Accordion.Body className=' quality_card2'>
                                    <div>
                                        <img src={performimg1} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={performimg2} alt="autoimg" />
                                        <br /><br /><hr />
                                        <img src={performimg3} alt="autoimg" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>

                </div>
                <div className='quality_section6'>
                    <p className='quality_section6_title'>Venzo’s Stages of <span className='s6_colortext'> QA Process </span></p>
                    <p className='quality_section6_desc'>Venzo is about providing an impeccable customer experience. We focus on robust quality testing mechanisms and practices tailored to your specific business goals by leveraging our expertise in various industries.</p>
                    <div className='qaprocess'>
                        <div className='qaSec6Res'>
                            <img src={checkcolor} alt="autoimg"></img>
                            <p>Analyze Requirements</p>
                        </div>
                        <div className='qaSec6Res'>
                            <img src={checkcolor} alt="autoimg"></img>
                            <p>Test Planning</p>
                        </div>
                        <div className='qaSec6Res'>
                            <img src={checkcolor} alt="autoimg"></img>
                            <p>Sprint QA Activities</p>
                        </div>
                        <div className='qaSec6Res'>
                            <img src={checkcolor} alt="autoimg"></img>
                            <p>Hardening Sprint</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='quality_section7'>
                        <p className='qulaityend'><span className=' textColor'>End-To-End Quality</span><br />Engineering Services </p>
                        <p className='qualitybtn' onClick={() => setButtonPopup(true)}>Get Quote</p>
                    </div>
                </div>
            </div>
            <Footer />

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form onSubmit={sendEmail}>
                    <p className='formTitle1'>Let’s catch the initial spark!</p>
                    <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
                    <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
                    <input className='Fphone1' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
                    <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message' required></textarea>
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

        </div>
    )
}

export default QualityAssurance