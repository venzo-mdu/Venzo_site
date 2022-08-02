import React from 'react'
import "../imageCarousel/imageCarousel.css"
import whiteArrow from "../../images/arrow.png"
import blackArrow from "../../images/arrow-black.svg"
import FbIcon from "../../images/Fb.svg"
import TwitterIcon from "../../images/Twitter.svg"
import LinkedinIcon from "../../images/Linkedin.svg"
import InstaIcon from "../../images/insta.svg"
import Header  from '../header/header.js'



function imageCarousel() {
  return (
        <>
        <Header/>
    <div id="slider">
    <div className="carousel">
        <div className="carousel-inner">

            <div className="carousel-item carousel-item-1">
                <p id='blockchain'>Decentralization<br></br>
                    and cryptographic<br></br>
                    hashing</p>
                    <p id="blockchainDev">We build Blockchain Development<br></br>
                      that people trust</p>
                      <p id="knowMore">Know More <img src={whiteArrow} className='whiteArrow' alt="black-arrow"></img></p>
            </div>
            <div className="carousel-item carousel-item-2">
            <p id='dataEngineering'>Crafting Tech into<br></br>
                        your ideas</p>
                        <p id="dataEnggDev">
                    We build Product Development<br></br>
                    that people trust</p>
                    <p id="knowMore">Know More <img src={whiteArrow} className='whiteArrow' alt="black-arrow"></img></p>
            </div>
            <div className="carousel-item carousel-item-3">
            <p id='productDevelopment'>Development and<br></br>
                Growth</p>
                <p id="productDev">
                    We build Product Development<br></br>
                    that people trust</p>
                    <p id="knowMore1">Know More <img src={blackArrow} className='blackArrow1' alt="black-arrow"></img></p>

            </div>
        </div>
    </div>
</div>
<div className='socialMediaIcon'>
  <img id='fbicon'src={FbIcon} alt='fbIcon'></img>
  <img id='twittericon'src={TwitterIcon} alt='twitterIcon'></img>
  <img id='linkedinicon'src={LinkedinIcon} alt='linkedIcon'></img>
  <img id='instaicon'src={InstaIcon} alt='instaIcon'></img>

</div>

</>
    )
}

export default imageCarousel;