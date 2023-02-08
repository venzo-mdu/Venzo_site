import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import './development.css'
import Carousel from 'react-bootstrap/Carousel';
import mango from '../../webDev_Image/mango.png'
import blog3 from '../../webDev_Image/carosImage.png'
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
            <div className='webCard1 comp1'>
                <p className='cardWebTitle '>Mangopoint</p>
            </div>
</a>
           
            <div className='webCard1 comp2'>
            <p className='cardWebTitle'>Algoritmik</p>
            </div>
            <div className='webCard1 comp3'>
            <p className='cardWebTitle'>Farmerica</p>
            </div>
            <div className='webCard1 comp4'>
            <p className='cardWebTitle'>Chennai<br></br>Spine</p>
            </div>
        </div>
        <div className='webSlide1'>
            <div className='webCard1 comp5'>
            <p className='cardWebTitle'>RFL<br></br>Valves</p>
            </div>
            <div className='webCard1 comp6'>
            <p className='cardWebTitle'>Sarra<br></br>Bricks</p>
            </div>
            <div className='webCard1 comp7'>
            <p className='cardWebTitle'>Stronghold<br></br>Facades</p>
            </div>
            <div className='webCard1 comp8'>
            <p className='cardWebTitle'>Freshara<br></br>Picklz</p>
            </div>
        </div>
        <div className='webSlide1'>
<a href='https://www.google.co.in/'>
            <div className='webCard1 comp9'>
                <p className='cardWebTitle'>Mangopoint</p>
            </div>
</a>
           
            <div className='webCard1 comp10'>
            <p className='cardWebTitle'>Algoritmik</p>
            </div>
            <div className='webCard1 comp11'>
            <p className='cardWebTitle'>Farmerica</p>
            </div>
            <div className='webCard1 comp12'>
            <p className='cardWebTitle'>Chennai<br></br>Spine</p>
            </div>
        </div>
        <div className='webSlide1 comp13'>
            <div className='webCard1'>
            <p className='cardWebTitle'>RFL<br></br>Valves</p>
            </div>
            <div className='webCard1 comp14'>
            <p className='cardWebTitle'>Sarra<br></br>Bricks</p>
            </div>
            <div className='webCard1 comp15'>
            <p className='cardWebTitle'>Stronghold<br></br>Facades</p>
            </div>
            <div className='webCard1 comp16'>
            <p className='cardWebTitle'>Freshara<br></br>Picklz</p>
            </div>
        </div>


        </div>
       

    )
}

export default devCarousel