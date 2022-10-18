import React from 'react'
import Header from '../header/header'
import './assurance.css'
import vector from '../../images/quality/vector.png'
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
import checking from '../../images/quality/check.png'

function qualityAssurance() {
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
                    <div className='assurance_section3_s2'>
                        <p className='btn'><img src={checking}/> Functional Testing</p>
                        <p className='btn'><img src={checking}/>Driven Development</p>
                        <p className='btn'><img src={checking}/>Security Testing</p>
                        <p className='btn'><img src={checking}/>Performance Engineering</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default qualityAssurance