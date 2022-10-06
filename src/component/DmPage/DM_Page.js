import React from 'react';
import Header from '../header/header'
import Footer from "../footer/footer"
import block from '../../images/Blockchain.png'
import block1 from '../../DMpage/blockLogo1.png';
import './DM_page.css'
import colorArrow from '../../images/Read more arrow-gradient.svg'
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
    // const customised_portfolio_reports = [
    //     {
    //         describtion: (

    //             <div>
      
    //               <div className="portFolioLine"></div>
      
    //               <div style={{ display: "flex" }}>
      
    //                 <div className="portFolioNumber">01</div>
      
    //                 <div className="PortFolioHead">White labelled</div>
      
    //               </div>
      
    //               <div className="PortFolioLabel">Your brand name and logo</div>
      
    //             </div>
      
    //           ),
    //      thumbnail: "https://picsum.photos/id/1018/250/150/",
    //      thumbnailLabel:(

    //         <div>
  
    //           <div className="portFolioLine"></div>
  
    //           <div style={{ display: "flex" }}>
  
    //             <div className="portFolioNumber">01</div>
  
    //             <div className="PortFolioHead">White labelled</div>
  
    //           </div>
  
    //           <div className="PortFolioLabel">Your brand name and logo</div>
  
    //         </div>
  
    //       )
    //     },
    //     {
    //         original: "https://picsum.photos/id/1015/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1015/250/150/",
    //         thumbnailLabel:(

    //             <div>
      
    //               <div className="portFolioLine"></div>
      
    //               <div style={{ display: "flex" }}>
      
    //                 <div className="portFolioNumber">02</div>
      
    //                 <div className="PortFolioHead">White labelled</div>
      
    //               </div>
      
    //               <div className="PortFolioLabel">Your brand name and logo</div>
      
    //             </div>
      
    //           )
    //     },
    //     {
    //         original: "https://picsum.photos/id/1019/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1019/250/150/",
    //         thumbnailLabel:(

    //             <div>
      
    //               <div className="portFolioLine"></div>
      
    //               <div style={{ display: "flex" }}>
      
    //                 <div className="portFolioNumber">03</div>
      
    //                 <div className="PortFolioHead">White labelled</div>
      
    //               </div>
      
    //               <div className="PortFolioLabel">Your brand name and logo</div>
      
    //             </div>
      
    //           )

    //     }
    //   ];

    return (
        <>
            <Header flag='header1' />
            <Header flag='header2' />
            <div>
                <div className='starting'>
                    {/* <img className='blockLogo w-100 ' src={block} ></img>
                    <img className='blockLogo1 w-100 ' src={block1} ></img> */}
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
                            <img className="lineM" src={line1} alt='line'/>

                        </div>

                        <div className='desc-p'>
                            <p className='desc-titlte'>B2C</p>
                            <p className='desc-detail'>We offer refined customized applications that streamline your.</p>
                            <img className='line' src={line} alt='line'></img>
                            <img className="lineM" src={line1} alt='line'/>

                        </div>
                        <div className='desc-p'>
                            <p className='desc-titlte'>Ecommerce</p>
                            <p className='desc-detail'>We offer refined customized applications that streamline your.</p>
                            <img className='line' src={line} alt='line'></img>

                        </div>
                    </div>
                </div>
                <div className='section5'>
                    <p className='sect5_title'> What you get</p> 
                </div>
                <div className='cardList'>
                    <ul className='DM_cardTitle'>
                        <li className='cardtitle1' defaultActiveKey="0" onClick={() => dated('brand')}>Brand Promotion</li>
                        <li className='cardtitle2' onClick={() => dated('sales')}>Increase Sales</li>
                        <li className='cardtitle3' onClick={() => dated('lead')}>Lead Generation</li>
                        <li className='cardtitle4' onClick={() => dated('se')}>SE ranking</li>
                        <li className='cardtitle5' onClick={() => dated('online')}>Online Reputation</li>
                        <li className='cardtitle6' onClick={() => dated('social')}>Social media engagement</li>
                    </ul>
                    <div className='card1'>

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
function dated(va) {
    { console.log(va) }
    let container = document.querySelector('.card1')
    if (va == 'brand') {
        container.innerHTML =  " We offer refined customized applications that streamline your.<br /> <br className='cardDecs'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.<br />"
        container.style.color = 'Black';
        {console.log(container.style)}
    }
    else if (va === 'sales') {
        container.innerHTML =  " We offer refined customized applications that streamline your.<br /> <br className='cardDecs'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.<br />"

    }
    else if (va === 'lead') {
        container.innerHTML =  " We offer refined customized applications that streamline your.<br /> <br className='cardDecs'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.<br />"

    }
    else if (va === 'se') {
        container.innerHTML =  " We offer refined customized applications that streamline your.<br /> <br className='cardDecs'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.<br />"

    }
    else if (va === 'online') {
        container.innerHTML =  " We offer refined customized applications that streamline your.<br /> <br className='cardDecs'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.<br />"

    }
    else if (va === 'social') {
        container.innerHTML =  " We offer refined customized applications that streamline your.<br /> <br className='cardDecs'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.<br />"
    }
}

export default DM_Page

