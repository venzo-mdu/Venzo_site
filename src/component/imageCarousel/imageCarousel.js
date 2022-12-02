import React from 'react'
import "../imageCarousel/imageCarousel.css"
import whiteArrow from "../../images/whiteArrow.svg"
import blackArrow from "../../images/blackArrow.svg"
import FbIcon from "../../images/Fb.svg"
import TwitterIcon from "../../images/twitter.svg"
import LinkedinIcon from "../../images/linkedin.svg"
import InstaIcon from "../../images/insta.svg"
import Header from '../header/header.js'
import blog1 from '../../images/Blockchain-1.png'
import blog2 from '../../images/Data-Engineering-Banner.png'
import blog3 from '../../images/Product-Development-Banner.png'
import blogBl1 from '../../images/blogBl1.png'
import blogBl2 from '../../images/blogBl2.png'
import blogBl3 from '../../images/blogBl3.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function imageCarousel() {
    const items = [
        <img className='carouselImage' src={blog1} role="presentation" />,
        <img className='carouselImage' src={blog2} role="presentation" />,
        <img className='carouselImage' src={blog3} role="presentation" />,
    ];
    return (
        <>
            <Header flag='header1' />
            <Header flag='header2' />
            <AliceCarousel
                stopAutoPlayOnHover={false}
                buttonsDisabled={false}
                mouseTrackingEnabled
                autoPlay={true}
                playButtonEnabled={false}
                autoPlayInterval={10000}
            >
                <div>
                    <img
                        id='blockchainweb'
                        className="d-block w-100"
                        src={blog1}
                        alt="blockchain "
                    />
                    <img
                        className=" blockchainBl"
                        src={blogBl1}
                        alt="blockchainBl "
                    />
                    <div className='item1'>
                        <p id='blockchain'>Decentralization<br></br> and cryptographic<br></br> hashing</p>
                        <p id="blockchainDev">We build Blockchain Development<br></br>
                            that people trust</p>
                        <p id="knowMore">KNOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<img src={whiteArrow} className='whiteArrow' alt="black-arrow"></img></p>
                    </div>
                </div>
                <div>
                    <img
                        id='productDevelopmentweb'
                        className="d-block w-100 "
                        src={blog3}
                        alt=" productDevelopment"
                    />
                    <img
                        className="productDevelopmentBl"
                        src={blogBl3}
                        alt="productDevelopmentBl "
                    />
                    <div className='item3'>
                        <p id='productDevelopment'>Development and<br></br> Growth</p>
                        <p id="productDev">
                            We build Product Development<br></br>
                            that people trust</p>
                        <p id="knowMore">KNOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<img src={whiteArrow} className='whiteArrow' alt="black-arrow"></img></p>
                    </div>
                </div>
                <div>
                    <img
                        id='productDevelopmentweb'
                        className="d-block w-100"
                        src={blog2}
                        alt="dataEngineering "
                    />
                    <img
                        className="dataEngineeringBl"
                        src={blogBl2}
                        alt="dataEngineeringBl "
                    />
                    <div className='item2'>
                        <p id='dataEngineering'>Crafting Tech into<br></br> your ideas</p>
                        <p id="dataEnggDev">
                            We build Product Development<br></br>
                            that people trust</p>
                        <p id="knowMore1">KNOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<img src={blackArrow} className='blackArrow1' alt="black-arrow"></img></p>
                    </div>
                </div>
            </AliceCarousel>

            <div className='socialMediaIcon'>
                <img id='fbicon' src={FbIcon} alt='fbIcon'></img>
                <img id='twittericon' src={TwitterIcon} alt='twitterIcon'></img>
                <img id='linkedinicon' src={LinkedinIcon} alt='linkedIcon'></img>
                <img id='instaicon' src={InstaIcon} alt='instaIcon'></img>
            </div>

        </>
    )
}

export default imageCarousel;