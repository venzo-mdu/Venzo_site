import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import './development.css'
// import Carousel from 'react-bootstrap/Carousel';
// import mango from '../../webDev_Image/mango.png'
// import blog3 from '../../webDev_Image/carosImage.png'
function devCarousel() {

    return (
        <div className='devCaros'>
            {/* <Carousel slide={false}>
            <Carousel.Item >

                <div className='item1'>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

            </Carousel.Item>

            <Carousel.Item >

                <div className='item1'>
                    <div>
                    <img className='mango'  src={mango}></img>

                        <p className="blockchainDev">1 WordPress has been the go-to CMS choice for businesses for years. The platform powers more than 35% of the websites, thanks to its</p>
                    </div>
                    <div>
                        <img
                            className="rightPic"
                            src={blog3}
                            alt="blockchain "
                        />
                    </div>

                </div>
            </Carousel.Item>
            <Carousel.Item >

                <div className='item1'>
                    <div>
                    <img className='mango'  src={mango}></img>

                        <p className="blockchainDev">2 WordPress has been the go-to CMS choice for businesses for years. The platform powers more than 35% of the websites, thanks to its</p>
                    </div>
                    <div>
                        <img
                            className=" rightPic"
                            src={blog3}
                            alt="blockchain "
                        />
                    </div>

                </div>
            </Carousel.Item>
        </Carousel> */}


            <div className='webSlide1'>
                <a href='https://www.google.co.in/'>
                    <div className='webCard1'>
                        <p className='cardWebTitle '>Mangopoint</p>
                    </div>
                </a>

                <div className='webCard2 '>
                    <p className='cardWebTitle'>Algoritmik</p>
                </div>
                <div className='webCard3 '>
                    <p className='cardWebTitle'>Securekloud</p>
                </div>
                <div className='webCard4 '>
                    <p className='cardWebTitle'>Agshealth</p>
                </div>
                <div className='webCard5 '>
                    <p className='cardWebTitle'>Pure-chemical</p>
                </div>
                <div className='webCard6 '>
                    <p className='cardWebTitle'>Siriuscom</p>
                </div>
                <div className='webCard7 '>
                    <p className='cardWebTitle'>RFL Valves</p>
                </div>
                <div className='webCard8 '>
                    <p className='cardWebTitle'>Ebms</p>
                </div>
                <a href='https://www.google.co.in/'>
                    <div className='webCard9 '>
                        <p className='cardWebTitle'>Farmerica</p>
                    </div>
                </a>

                <div className='webCard10 '>
                    <p className='cardWebTitle'>Tringapps</p>
                </div>
                <div className='webCard11 '>
                    <p className='cardWebTitle'>Stronghold<br />Facades</p>
                </div>
                <div className='webCard12 '>
                    <p className='cardWebTitle'>Freshara<br></br>Picklz</p>
                </div>
                <div className='webCard13'>
                    <p className='cardWebTitle'>Vooki</p>
                </div>
                <div className='webCard14 '>
                    <p className='cardWebTitle'>Vivid-edge</p>
                </div>
                <div className='webCard15 '>
                    <p className='cardWebTitle'>Brainobrain</p>
                </div>
                <div className='webCard16 '>
                    <p className='cardWebTitle'>ChennaiSpine</p>
                </div>
            </div>


        </div>


    )
}

export default devCarousel