import React, { useState } from 'react';
import Header from '../header/header'
import Footer from "../footer/footer"
import block from '../../images/Blockchain.png'
import block1 from '../../DMpage/blockLogo1.png';
import './DM_page.css'
import colorArrow from '../../images/devArrow.svg'
import line from '../../images/Vector 76.svg'
import line1 from '../../DMpage/Vector 82.png'
import ImageGallery from "react-image-gallery";
import Service from './service'
import Dmcarousels from './DmCarousel'
import DmFrequentQues from './DmFrequentQues';
import './laptopL.css'
import './mobile.css'
import "react-image-gallery/styles/css/image-gallery.css";
import Accordion from 'react-bootstrap/Accordion';

function DM_Page() {
    const [active, setActive] = useState('');
    const dated = (va) => {
        let container = document.querySelector('.card1')
        setActive(va)
        if (va == 'brand') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your  1.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'sales') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 2.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'lead') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 3.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'se') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 4.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'online') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 5.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'social') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 6.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
    }
    return (
        <>
            <Header flag='header1' />
            <Header flag='header2' />
            <div>
                <div className='starting'>
                    {/* <img className='blockLogo w-100 ' src={block} ></img>
                    <img className='blockLogo1 w-100 ' src={block1} ></img> */}
                    <div className='section1'>
                        <p className='Dm_Title'>We create robust strategies for <br />online businesses.  </p>
                        <p className="blockchainDesc">Crafting data-driven, automated, and personalized solutions for businesses.</p>
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
                            <p className='desc-detail'>Try our customized B2B marketing strategies to attract the audience.</p>
                            <img className="lineM" src={line1} alt='line' />

                        </div>

                        <div className='desc-p'>
                            <p className='desc-titlte'>B2C</p>
                            <p className='desc-detail'>We guide B2C businesses to reach their targeted customers through customized apps.</p>
                            <img className='line' src={line} alt='line'></img>
                            <img className="lineM" src={line1} alt='line' />

                        </div>
                        <div className='desc-p'>
                            <p className='desc-titlte'>Ecommerce</p>
                            <p className='desc-detail'>We offer multiple strategies to develop your e-commerce to new heights.</p>
                            <img className='line' src={line} alt='line'></img>

                        </div>
                    </div>
                </div>
                <div className='section5'>
                    <p className='sect5_title'> What you get</p>
                </div>
                <div className='cardList'>
                    <ul className='DM_cardTitle'>
                        <li className={active === 'brand' ? 'cardtitle01' : 'cardtitle1'} onClick={() => dated('brand')}>Brand Promotion</li>
                        <li className={active === 'sales' ? 'cardtitle01' : 'cardtitle2'} onClick={() => dated('sales')}>Increase Sales</li>
                        <li className={active === 'lead' ? 'cardtitle01' : 'cardtitle3'} onClick={() => dated('lead')}>Lead Generation</li>
                        <li className={active === 'se' ? 'cardtitle01' : 'cardtitle4'} onClick={() => dated('se')}>SE ranking</li>
                        <li className={active === 'online' ? 'cardtitle01' : 'cardtitle5'} onClick={() => dated('online')}>Online Reputation</li>
                        <li className={active === 'social' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('social')}>Social media engagement</li>
                    </ul>
                    <div className='card1'>
                        <p> We offer refined customized applications that streamline your. </p>
                        <p className='subTitle'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                    </div>
                </div>

                <div className='section51'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Brand Promotion</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                                <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Increase Sales</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                                <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Lead Generation</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                                <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>SE ranking</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                                <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Online Reputation</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                                <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Social media engagement</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                                <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>

            </div>

            <Dmcarousels />
            <div className='section6'>
                <DmFrequentQues />
            </div>

{/* 

            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                link1 isisss
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                link2 isisisis 
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container> */}


            <div>
                <div className='containor11'>
                    <p className='anyIdea1'>Wanna try ? <br /><span className=' textColor'>Get free website audit.</span> </p>
                    <button className=' btn auidt'>Free website audit</button>
                </div>
            </div>
            <Footer />

        </>
    )
}


export default DM_Page


