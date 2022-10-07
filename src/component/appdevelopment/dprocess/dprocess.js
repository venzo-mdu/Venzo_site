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
                <p id='leftdevText1'>We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors. Our IT solutions are fully functional, robust, and scalable that empowers Start-ups, SMEs and Enterprises.</p>
                <p id='leftdevText1'>We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors. Our IT solutions are fully functional, robust, and scalable that empowers Start-ups, SMEs and Enterprises.</p>
            </div>
            <div className='rightDevprocess'>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd4} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Research</p>
                        <p id='rightdevprocessDesc'>During the business analysis and research, our BA experts determine the software project’s high-level features, functional and non-functional needs.</p>
                        <hr className='hrIndprocess'></hr>

                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd6} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle1'>Planning</p>
                        <p id='rightdevprocessDesc'>Iterations are used to break down the app development process. We collaborate with our clients to plan each iteration in order to produce the desired outcomes.</p>
                        <hr className='hrIndprocess'></hr>

                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd7} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Design & Prototyping</p>
                        <p id='rightdevprocessDesc'>We create prototypes to ensure that the app’s appearance and feel are native to the platform and that the user experience is favorable.</p>
                        <hr className='hrIndprocess'></hr>
                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd5} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Testing & QA</p>
                        <p id='rightdevprocessDesc'>We execute end-to-end testing to ensure the reliability of your project and to save money by detecting issues before the product is released to the public.</p>
                        <hr className='hrIndprocess'></hr>
                    </div>
                </div>
                <div className='rightdevText'>
                    <img className='devprocessIcon' src={appd12} alt='devicon'></img>
                    <div className='rightdevprocessText'>
                        <p id='rightdevprocessTitle'>Launch</p>
                        <p id='rightdevprocessDesc'>We execute end-to-end testing to ensure the reliability of your project and to save money by detecting issues before the product is released to the public.</p>
                        <hr className='hrIndprocess'></hr>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default dprocess