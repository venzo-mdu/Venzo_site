import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Dm_Carousel from "../../content/DmCarousel.json"
import surcamp from "../../DMpage/image 7.png"
import sirius from "../../DMpage/image 8.png"
import agsHealth from "../../DMpage/image 10.png"
import panPure from "../../DMpage/image 11.png"
import btsscrop from "../../DMpage/image 13.png"
import mangopoint from "../../DMpage/image 14.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function DmCarousel() {
    const renderSlides = () =>
        Dm_Carousel.map(num => (
            <div>
                <img src={num.images} />
            </div>
        ));


    return (
        // <div>
        //     <Carousel fade className='DmCarosel' interval={3000}>
        //         <Carousel.Item >
        //             <div >
        //                 <img className='line1' src={surcamp} />
        //                 <img className='line1' src={sirius} />
        //                 <img className='line1' src={agsHealth} />
        //                 <img className='line1' src={panPure} />
        //                 <img className='line1' src={btsscrop} />
        //                 <img className='line1' src={mangopoint} />
        //             </div>
        //         </Carousel.Item>
        //         <Carousel.Item >
        //             <div >
        //                 <img className='line1' src={sirius} />
        //                 <img className='line1' src={agsHealth} />
        //                 <img className='line1' src={panPure} />
        //                 <img className='line1' src={btsscrop} />
        //                 <img className='line1' src={mangopoint} />
        //                 <img className='line1' src={surcamp} />

        //             </div>
        //         </Carousel.Item>
        //         <Carousel.Item >
        //             <div >
        //                 <img className='line1' src={agsHealth} />
        //                 <img className='line1' src={panPure} />
        //                 <img className='line1' src={btsscrop} />
        //                 <img className='line1' src={mangopoint} />
        //                 <img className='line1' src={surcamp} />
        //                 <img className='line1' src={sirius} />
        //             </div>
        //         </Carousel.Item>                
        //         <Carousel.Item >
        //             <div >
        //                 <img className='line1' src={panPure} />
        //                 <img className='line1' src={btsscrop} />
        //                 <img className='line1' src={mangopoint} />
        //                 <img className='line1' src={surcamp} />
        //                 <img className='line1' src={sirius} />
        //                 <img className='line1' src={agsHealth} />
        //             </div>
        //         </Carousel.Item>                
        //         <Carousel.Item >
        //             <div >
        //                 <img className='line1' src={btsscrop} />
        //                 <img className='line1' src={mangopoint} />
        //                 <img className='line1' src={surcamp} />
        //                 <img className='line1' src={sirius} />
        //                 <img className='line1' src={agsHealth} />
        //                 <img className='line1' src={panPure} />
        //             </div>
        //         </Carousel.Item>                
        //         <Carousel.Item >
        //             <div >
        //                 <img className='line1' src={mangopoint} />
        //                 <img className='line1' src={surcamp} />
        //                 <img className='line1' src={sirius} />
        //                 <img className='line1' src={agsHealth} />
        //                 <img className='line1' src={panPure} />
        //                 <img className='line1' src={btsscrop} />
        //             </div>
        //         </Carousel.Item>

        //     </Carousel>
        // </div>
        <div>
        <div className='sliderDesk'>
            <Slider dots={false} slidesToShow={5} slidesToScroll={1} autoplay={true} autoplaySpeed={3000} >
                {renderSlides()}
            </Slider>
        </div>
        <div className='sliderLap'>
            <Slider dots={false} slidesToShow={4} slidesToScroll={1} autoplay={true} autoplaySpeed={3000} >
                {renderSlides()}
            </Slider>
        </div>
        <div className='slidermob'>
            <Slider dots={false} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={3000} >
                {renderSlides()}
            </Slider>
        </div>
        </div>
    )
}

export default DmCarousel;