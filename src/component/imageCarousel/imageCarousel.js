import React, { useState, useEffect } from 'react'
import "../imageCarousel/imageCarousel.css"
import whiteArrow from "../../images/whiteArrow.svg"
import blackArrow from "../../images/blackArrow.svg"
import FbIcon from "../../images/Fb.svg"
import TwitterIcon from "../../images/twitter.svg"
import LinkedinIcon from "../../images/linkedin.svg"
import InstaIcon from "../../images/insta.svg"
import FbIcon2 from "../../images/fbIcon2.svg"
import TwitterIcon2 from "../../images/twitterIcon2.svg"
import LinkedinIcon2 from "../../images/linkedIn2.svg"
import InstaIcon2 from "../../images/instaIcon2.svg"
import Header from '../header/header.js'
import blog1 from '../../images/Blockchain-1.png'
import blog2 from '../../images/Data-Engineering-Banner.png'
import blog3 from '../../images/Product-Development-Banner.png'
import blogBl1 from '../../images/blogBl1.png'
import blogBl2 from '../../images/blogBl2.png'
import blogBl3 from '../../images/blogBl3.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Popup from '../careersPage2/popup/popup'


function ImageCarousel() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [fbIcon,setfbIconlogo] = useState(FbIcon);
    const [twitterIcon, settwitterIconlogo] = useState(TwitterIcon);
    const [linkedIcon, setlinkedinIconlogo] = useState(LinkedinIcon);
    const [instaIcon, setinstaIconlogo] = useState(InstaIcon);

    const changeIcon = () => {
        if (window.scrollY >= 350) {
            setfbIconlogo(FbIcon2)
            settwitterIconlogo(TwitterIcon2)
            setlinkedinIconlogo(LinkedinIcon2)
            setinstaIconlogo(InstaIcon2)

        } else {
            setfbIconlogo(FbIcon)
            settwitterIconlogo(TwitterIcon)
            setlinkedinIconlogo(LinkedinIcon)
            setinstaIconlogo(InstaIcon)
        }
      }
    
      useEffect(() => {
        changeIcon()
        window.addEventListener("scroll", changeIcon)
      })

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
                        <p id='blockchain'>Immutable Blockchain<br id='brtag'></br> Solutions</p>
                        <p id="blockchainDev"> Fabricate Smarter Supply Chains with <br id='brtag'></br>
                        Blockchain Technology Solutions</p>
                        <p id="knowMore" onClick={() => setButtonPopup(true)}>KNOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<img src={whiteArrow} className='whiteArrow' alt="black-arrow"></img></p>
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
                        <p id='productDevelopment'>Innovation That<br id='brtag'></br> Delivers </p>
                        <p id="productDev">
                        Designing & delivering Positive Products <br id='brtag'></br>
                        for progressive change-makers.</p>
                        <p id="knowMore" onClick={() => setButtonPopup(true)}>KNOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<img src={whiteArrow} className='whiteArrow' alt="black-arrow"></img></p>
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
                        <p id='dataEngineering'>  Building you Smart<br id='brtag'></br> Data Management Systems </p>
                        <p id="dataEnggDev">
                        Extending the boundaries of excellence through <br id='brtag'></br>
                        data-driven transformation</p>
                        <p id="knowMore1" onClick={() => setButtonPopup(true)}>KNOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<img src={blackArrow} className='blackArrow1' alt="black-arrow"></img></p>
                    </div>
                </div>
            </AliceCarousel>

            <div className='socialMediaIcon'>
                <a href='https://www.facebook.com/VenzoTechnologies/'><img id='fbicon' src={fbIcon} alt='fbIcon'></img></a>
                <a href='https://twitter.com/Venzo_Tech/'><img id='twittericon' src={twitterIcon} alt='twitterIcon'></img></a>
                <a href='https://www.linkedin.com/company/venzo-technologies/'><img id='linkedinicon' src={linkedIcon} alt='linkedIcon'></img></a>
                <a href='https://www.instagram.com/venzo_tech/'><img id='instaicon' src={instaIcon} alt='instaIcon'></img></a>
            </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p id='joinourteamText'>Join our team</p>
        <input className='Fname' type="text" placeholder='Name*'></input>
        <input className='Femail' type="text" placeholder='Email*'></input>
        <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
        <input className='file' type="file" placeholder='choose file'></input>
        <textarea className='Fmessage' placeholder='Message*'></textarea>
        <button className='Fbutton'>Submit</button>
      </Popup>
        </>
    )
}

export default ImageCarousel;