import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import './development.css'
import Carousel from 'react-bootstrap/Carousel';
import mango from '../../webDev_Image/mango.png'
import blog3 from '../../webDev_Image/carosImage.png'
function devCarousel() {
  
    return (
        <div className='devCaros'> 
         <Carousel >
            <Carousel.Item >

                <div className='item1'>
                    <div>
                        <img className='mango' src={mango}></img>
                        <p className="blockchainDev">WordPress has been the go-to CMS choice for businesses for years. The platform powers more than 35% of the websites, thanks to its</p>
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

                        <p className="blockchainDev">WordPress has been the go-to CMS choice for businesses for years. The platform powers more than 35% of the websites, thanks to its</p>
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

                        <p className="blockchainDev">WordPress has been the go-to CMS choice for businesses for years. The platform powers more than 35% of the websites, thanks to its</p>
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
        </Carousel>
        </div>
       

    )
}

export default devCarousel