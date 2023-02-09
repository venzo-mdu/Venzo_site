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
import Popup from '../careersPage2/popup/popup'
import "react-image-gallery/styles/css/image-gallery.css";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios'
import toMail from '../../config/config'
function DM_Page() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [active, setActive] = useState('');
    const dated = (va) => {
        let container
        if (document.querySelector('.card1') !== null) {
            container = document.querySelector('.card1')
        }
        setActive(va)
        if (va == 'brand') {
            container.innerHTML = "<font size=4 color=black>\
            Brand promotion\</font>\
            <br>\<br>\
            <font size=3 color=gray>\
            Promoting your brand is essential for growing your business and reaching a wider audience. Our team of experts will work closely with you to understand your business's unique needs and goals, and customize our services to meet those needs. \
            </font>\
    ";
        }
        else if (va === 'sales') {
            container.innerHTML = "<font size=4 color=black>\
            Increase Sales\</font>\
            <br>\<br>\
            <font size=3 color=gray>\
            Boosting sales is the primary goal of any business. We will achieve this by utilizing various tactics such as offering promotions, discounts, or improving product quality and customer service.\
            </font>\
    ";
        }
        else if (va === 'lead') {
            container.innerHTML = "<font size=4 color=black>\
           Lead Generation\</font>\
            <br>\<br>\
            <font size=3 color=gray>\
            Lead generation is the process of attracting potential customers who are interested in your products or services. This can be done through Venzo’s various tactics such as email marketing, content marketing, or attending trade shows.\
            </font>\
    ";
        }
        else if (va === 'se') {
            container.innerHTML = "<font size=4 color=black>\
            Search Engine Ranking\</font>\
            <br>\<br>\
            <font size=3 color=gray>\
            Improving your website's ranking on search engines like Google will help you reach a wider audience and drive more traffic to your site. We  achieved through search engine optimization (SEO) techniques such as keyword optimization and link building. \
    ";
        }
        else if (va === 'online') {
            container.innerHTML = "<font size=4 color=black>\
            Online Reputation\</font>\
            <br>\<br>\
            <font size=3 color=gray>\
            Your online reputation is crucial to attracting new customers and retaining existing ones. Maintaining a positive image online can be done through various tactics such as responding to customer reviews, monitoring your brand's social media presence, and proactively addressing any negative feedback.\
            </font>\
    ";
        }
        else if (va === 'social') {
            container.innerHTML = "<font size=4 color=black>\
           Social Media Engagement\</font>\
            <br>\<br>\
            <font size=3 color=gray>\
            Social media is a powerful tool for engaging with customers and building brand awareness. You can increase engagement by posting regularly, responding to customer comments, and using social media to promote promotions and events. \
            </font>\
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
        const body = {
            to: toMail,
            // cc: "priyankac@venzotechnologies.com",
            message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"],
            // message:emailInput["message"]+emailInput["email"],
            subject: "subject here"
        }
        const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
        console.log(emailResponse)
        setSubmit(true)

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
                        <p className="GetQuote" onClick={() => setButtonPopup(true)} >GET QUOTE <img src={colorArrow} className='whiteArrow' alt="black-arrow"></img></p>
                    </div>
                </div>
                <div className='section2'>
                    <p className='Dm_heading'>Services</p>
                    <p className='Dm_subheading'>Leverage the power of omnichannel engagement<strong> platforms to reach out to your prospects.</strong></p>
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
                        <p>Brand promotion:</p>
                        <p className='subTitle'>Promoting your brand is essential for growing your business and reaching a wider audience. Our team of experts will work closely with you to understand your business's unique needs and goals, and customize our services to meet those needs. </p>
                    </div>
                </div>

                <div className='section51'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Brand Promotion</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Brand promotion:</p>
                                <p className='carddesc'>Promoting your brand is essential for growing your business and reaching a wider audience. Our team of experts will work closely with you to understand your business's unique needs and goals, and customize our services to meet those needs.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Increase Sales</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Increase Sales:</p>
                                <p className='carddesc'>Boosting sales is the primary goal of any business. We will achieve this by utilizing various tactics such as offering promotions, discounts, or improving product quality and customer service.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Lead Generation</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Lead Generatio:</p>
                                <p className='carddesc'>Lead generation is the process of attracting potential customers who are interested in your products or services. This can be done through Venzo’s various tactics such as email marketing, content marketing, or attending trade shows. </p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>SE ranking</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>SE ranking:</p>
                                <p className='carddesc'>Improving your website's ranking on search engines like Google will help you reach a wider audience and drive more traffic to your site. We  achieved through search engine optimization (SEO) techniques such as keyword optimization and link building.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Online Reputation</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Online Reputation:</p>
                                <p className='carddesc'>Your online reputation is crucial to attracting new customers and retaining existing ones. Maintaining a positive image online can be done through various tactics such as responding to customer reviews, monitoring your brand's social media presence, and proactively addressing any negative feedback. </p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Social media engagement</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Social media engagement:</p>
                                <p className='carddesc'>Social media is a powerful tool for engaging with customers and building brand awareness. You can increase engagement by posting regularly, responding to customer comments, and using social media to promote promotions and events.</p>

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
                    <button className=' btn auidt' onClick={() => setButtonPopup(true)}>Free website audit</button>
                </div>
            </div>
            <Footer />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form onSubmit={sendEmail}>
            <p className='formTitle'>Let’s catch the initial spark!</p>
            <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required />
            <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="text" placeholder='Email*' required />
            <input className='Fphone1' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required />
            <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message*'></textarea>
            <button type='submit' className='Fbutton'>Submit</button>
          </form>
            </Popup>

            <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
                <div className='thankPop'>
                    Thank you for contacting us, our team will reach you.
                </div>
            </Popup>

        </>
    )
}


export default DM_Page


