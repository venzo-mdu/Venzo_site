import React, { useState } from 'react'
import Header from '../header/header'
import './assurance.css'
import './laptop.css'
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
import gainimg from '../../images/quality/gainimg.png'
import cardimg1 from '../../images/quality/cardimg1.png'
import cardimg2 from '../../images/quality/cardimg2.png'
import cardimg3 from '../../images/quality/cardimg3.png'
import checkcolor from '../../images/quality/checkcolor.png'
import Footer from '../footer/footer'
function QualityAssurance() {
    const [active, setActive] = useState('');
    const dated = (value) => {
        let container = document.querySelector('.quality_card1')
        setActive(value)
        if (value == 'Automation') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg3 + "' />\
    ";
        }
        else if (value === 'Defect') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg3 + "' />\
    ";
        }
        else if (value === 'Devops') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg3 + "' />\
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
            <img src='" + cardimg3 + "' />\
    ";
        }
        else if (value === 'Web') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg3 + "' />\
    ";
        }
        else if (value === 'Security') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg3 + "' />\
    ";
        }
        else if (value === 'Performance') {
            container.innerHTML = "<img src='" + cardimg1 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg2 + "' />\
            <br>\
            <br>\
            <hr/>\
            <img src='" + cardimg3 + "' />\
    ";
        }
    }
    return (
        <div>
            <Header flag='header1' />
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
                        <img className='Vline2' src={line} ></img>

                        <div className='colm'>
                            <img className="icon" src={manualtesting} alt='icon' />
                            <h2 className="heading">Manual and <br />Automation Testing</h2>
                        </div>
                        <img className='Vline2' src={line} ></img>

                        <div className='colm'>
                            <img className="icon" src={functiontesting} alt='icon' />
                            <h2 className="heading">Functional <br />Testing</h2>
                        </div>
                        <img className='Vline2' src={line} ></img>
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
                        <div>
                            <img className="s1icon" src={group2} alt='icon' />
                            <h2 className="s1heading">Quality and UX audit</h2>
                            <p className='s1desc'>During this stage, our experts will analyze your product’s user interface and come up with ideas for how to make your user experience smoother and more pleasant.</p>
                        </div>
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
                        <div>
                            <img className="s2icon" src={group5} alt='icon' />
                            <h2 className="s2heading">Quality and UX audit</h2>
                            <p className='s2desc'>During this stage, our experts will analyze your product’s user interface and come up with ideas for how to make your user experience smoother and more pleasant.</p>
                        </div>
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
                        <img src={gainimg} ></img>
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
                            <hr />
                            <li className={active === 'Defect' ? 'cardtitle01' : 'cardtitle2'} onClick={() => dated('Defect')}>Test & Defect</li>
                            <hr />
                            <li className={active === 'Devops' ? 'cardtitle01' : 'cardtitle3'} onClick={() => dated('Devops')}>Devops Integration</li>
                            <hr />
                            <li className={active === 'Mobile' ? 'cardtitle01' : 'cardtitle4'} onClick={() => dated('Mobile')}>Mobile Testing</li>
                            <hr />
                            <li className={active === 'Web' ? 'cardtitle01' : 'cardtitle5'} onClick={() => dated('Web')}>Web Tesing</li>
                            <hr />
                            <li className={active === 'Security' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('Security')}>Security Testing</li>
                            <hr />
                            <li className={active === 'Performance' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('Performance')}>Performance Tesing</li>
                        </ul>
                        <div className='quality_card1'>
                        </div>
                    </div>
                </div>
                <div className='quality_section6'>
                    <p className='quality_section6_title'>Venzo’s Stages of <span className='s4_colortext'> QA Process </span></p>
                    <p className='quality_section6_desc'>Venzo is about providing an impeccable customer experience. We focus on robust quality testing mechanisms and practices tailored to your specific business goals by leveraging our expertise in various industries.</p>
                    <div className='qaprocess'>
                        <div >
                            <img src={checkcolor}></img>
                            <p>Analyze Requirements</p>
                        </div>
                        <div>
                            <img src={checkcolor}></img>
                            <p>Test Planning</p>
                        </div>
                        <div>
                            <img src={checkcolor}></img>
                            <p>Sprint QA Activities</p>
                        </div>
                        <div>
                            <img src={checkcolor}></img>
                            <p>Hardening Sprint</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='quality_section7'>
                        <p className='qulaityend'><span className=' textColor'>End-To-End Quality</span><br/>Engineering Services </p>
                        <button className=' btn qualitybtn'>Get Quote</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default QualityAssurance