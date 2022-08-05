import React from 'react'
import Header from '../header/header'
import block from '../../images/Blockchain.png'
import './DM_page.css'
import colorArrow from '../../images/Read more arrow-gradient.svg'
import line from '../../images/Vector 76.svg'
import Service from './service'
import Dmcarousels from './DmCarousel'
function DM_Page() {
    return (
        <>
            <Header flag='header1' />
            <Header flag='header2' />
            <div>
                <div >
                    <img className='blockLogo w-100 ' src={block} ></img>
                    <div className='section1'>
                        <p className='Dm_Title'>We grow Business <br />online</p>
                        <p className="blockchainDesc">We’re your data-driven brand growth engine</p>
                        <p className="GetQuote">GET QUOTE <img src={colorArrow} className='whiteArrow' alt="black-arrow"></img></p>
                    </div>
                </div>
                <div className='section2'>
                    <p className='Dm_heading'>Services</p>
                    <p className='Dm_subheading'>Engage Your Target Customers at the <strong>Right Time on the Right Platform</strong></p>
                    <Service />
                </div>
                <div className="section4" >
                    <p className='sect4_title'> Grow your Business </p>
                    <div className='sect4-desc'>
                        <div className='desc-p'>
                            <p className='desc-titlte'>B2B</p>
                            <p className='desc-detail'>We offer refined customized applications that streamline your.</p>
                        </div>

                        <div className='desc-p'>
                            <p className='desc-titlte'>B2C</p>
                            <p className='desc-detail'>We offer refined customized applications that streamline your.</p>
                            <img className='line' src={line} ></img>

                        </div>
                        <div className='desc-p'>
                            <p className='desc-titlte'>Ecommerce</p>
                            <p className='desc-detail'>We offer refined customized applications that streamline your.</p>
                            <img className='line' src={line} ></img>

                        </div>
                    </div>
                </div>
                <div className='section5'>
                    <p className='sect5_title'> What you get</p> </div>
                    <ul className='DM_cardTitle'>
                        <li>Brand Promotion</li>
                        <li>Increase Sales</li>
                        <li>Lead Generation</li>
                        <li>SE ranking</li>
                        <li>Online Reputation</li>
                        <li>Social media engagement</li>
                    </ul>
                </div>
                <div >
                    <Dmcarousels />
                </div>
                

        </>
    )
}

export default DM_Page