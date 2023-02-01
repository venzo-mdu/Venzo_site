import React from 'react'
import '../dprocess/dprocess.css'

import appd4 from '../../../images/appdevelopment/appd4.png'
import appd6 from '../../../images/appdevelopment/appd6.png'
import appd7 from '../../../images/appdevelopment/appd7.png'
import appd5 from '../../../images/appdevelopment/appd5.png'
import appd12 from '../../../images/appdevelopment/appd12.png'


function dprocess() {
    return (
        <div className='devProcess'>
            <div className='leftDevprocess'>
                <p id='leftdevTitle'>Our Development Process in 5 Steps</p>
                <p id='leftdevText1'>We follow a comprehensive process for customized app development. We thoroughly review the mobile app development process to ensure that your application aligns with your marketing objectives and market niche.</p>
                <p id='leftdevText1'>Our development process is transparent, focusing on your app idea, and our installable applications are implemented by back-end support. Also, we test applications on the target devices to turn dream business success into reality.</p>
            </div>
            <div className='rightDevprocess'>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd4} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Research</p>
                        <p id='rightdevprocessDesc'>We conduct rigorous research before app development to tailor it to the target audience's requirements.</p>
                        <hr className='hrIndprocess'></hr>

                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd6} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Planning</p>
                        <p id='rightdevprocessDesc'>Drafting a solid plan for the envisioned product helps us uncover the usability issues that might occur.</p>
                        <hr className='hrIndprocess'></hr>

                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd7} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Design & Prototyping</p>
                        <p id='rightdevprocessDesc'>With prototyping, we offer the perception of the application's layout, design and functionality for potential users.</p>
                        <hr className='hrIndprocess'></hr>
                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd5} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Testing & QA</p>
                        <p id='rightdevprocessDesc'>We test for usability, compatibility, security, interface inspections, and performance early and often!</p>
                        <hr className='hrIndprocess'></hr>
                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd12} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Launch</p>
                        <p id='rightdevprocessDesc'>Once your app is tested and debugged, it is ready to launch. We also provide post deployment support!</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default dprocess