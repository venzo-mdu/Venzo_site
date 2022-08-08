import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade'; import Header from '../header/header'
import Collapse from 'react-bootstrap/Collapse'
import { Accordion, Card, Button } from "react-bootstrap";

import block from '../../images/Blockchain.png'
import './DM_page.css'
import colorArrow from '../../images/Read more arrow-gradient.svg'
import line from '../../images/Vector 76.svg'
import Service from './service'
import Dmcarousels from './DmCarousel'
import FrequntQus from '../../content/ferquntQus.json'
function DM_Page() {
    const [open, setOpen] = useState(false);

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
                <div className='cardList'>
                    <ul className='DM_cardTitle'>
                        <li className='cardtitle1' onClick={() => dated('brand')}>Brand Promotion</li>
                        <li className='cardtitle2' onClick={() => dated('sales')}>Increase Sales</li>
                        <li className='cardtitle3' onClick={() => dated('lead')}>Lead Generation</li>
                        <li className='cardtitle4' onClick={() => dated('se')}>SE ranking</li>
                        <li className='cardtitle5' onClick={() => dated('online')}>Online Reputation</li>
                        <li className='cardtitle6' onClick={() => dated('social')}>Social media engagement</li>
                    </ul>
                    <div className='card1'>

                    </div>
                </div>
            </div>
            <Dmcarousels />
            <div className='section6'>
                <p className='sect6_title'>Frequently asked questions?</p>
                {FrequntQus.map(item => {
                    return <div key={item.id} defaultActiveKey="0">
                    {console.log(item.id,item.titile,item.data)}
                        <p>{item.titile}</p>
                        <Button variant="link" Key={item.id} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="collapseID"> +  </Button>
                        <Collapse in={open} Key={item.id}>
                            <div 
                                style={{
                                    width: 300,
                                    textAlign: 'justify'
                                }}
                            >
                                {item.data}
                            </div>
                        </Collapse>
                    </div>
                })}

            </div>


        </>
    )
}
function dated(va) {
    { console.log(va) }
    let container = document.querySelector('.card1')
    if (va == 'brand') {
        container.innerHTML = 'brand1111'
    }
    else if (va === 'sales') {
        container.innerHTML = 'brand2222'
    }
    else if (va === 'lead') {
        container.innerHTML = 'brand3333'
    }
    else if (va === 'se') {
        container.innerHTML = 'brand4444'
    }
    else if (va === 'online') {
        container.innerHTML = 'brand5555'
    }
    else if (va === 'social') {
        container.innerHTML = 'brand6666'
    }
}

export default DM_Page