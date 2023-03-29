import React from 'react'
import '../culture/culture.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import cultureImage1 from '../../../images/allpageabanner/about_us/children/children_1x.webp'
import cultureImage2 from '../../../images/allpageabanner/about_us/Ladies/Ladies_1x.webp'
import cultureImage3 from '../../../images/allpageabanner/about_us/our team/our team_1x.webp'
import cultureImage4 from '../../../images/allpageabanner/about_us/banner/banner_1x.webp'


function Culture() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='culture'>
      <p id='cultureTitle'>The Venzo Way - Culture </p>
      <p id='cultureText'>With casual work attire and social activities as company culture, Venzo is defined by smart minds doing smart things. We take pride in our culture of fun, reward, and hard work. We follow three core values: integrity, positivity, and quality.</p>
      <div className='cultures'>
        {/* <marquee direction="left" className='marqueeinCulture'> */}
        <img className='cultureImage' src={cultureImage1} alt='culture'></img>
        <img className='cultureImage' src={cultureImage2} alt='culture'></img>
        <img className='cultureImage' src={cultureImage3} alt='culture'></img>
        <img className='cultureImage' src={cultureImage4} alt='culture'></img>
        {/* </marquee> */}
      </div>

      <div className='Carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={2000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards1'>
                <img className='cultureImage' src={cultureImage1} alt='culture'></img>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards2'>
                <img className='cultureImage' src={cultureImage2} alt='culture'></img>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards3'>
                <img className='cultureImage' src={cultureImage3} alt='culture'></img>
              </div>
            </div>
          </Carousel.Item>



          <Carousel.Item interval={2000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards3'>
                <img className='cultureImage' src={cultureImage4} alt='culture'></img>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

      </div>


    </div>
  )
}

// import cult from '../../../content/aboutusData.json'    
// function Culture() {
//   const [index, setIndex] = useState(0);
// const handleSelect = (selectedIndex, e) => 
// {
//   setIndex(selectedIndex);
// };
//   return (
//     <div>
//       {cult.map((item) => { return <div className='culture'>
//       <p id='cultureTitle'>{item.cultureTitle}le</p>
//       <p id='cultureText'>{item.culturecont}</p>
//       <div className='cultures'>
//         {/* <marquee direction="left" className='marqueeinCulture'> */}
//           <img className='cultureImage' src={cultureImage1} alt='culture'></img>
//           <img className='cultureImage' src={cultureImage2} alt='culture'></img>
//           <img className='cultureImage' src={cultureImage3} alt='culture'></img>
//           <img className='cultureImage' src={cultureImage4} alt='culture'></img>
//         {/* </marquee> */}
//       </div>

// <div className='Carousel'>
// <Carousel activeIndex={index} onSelect={handleSelect}>
// <Carousel.Item interval={2000}>
//   <div style={{ display: 'flex' }}>
//     <div className='innercarouselCards1'>
//           <img className='cultureImage' src={cultureImage1} alt='culture'></img>
//     </div>
//     </div>
// </Carousel.Item>

// <Carousel.Item interval={2000}>
//   <div style={{ display: 'flex' }}>

//     <div className='innercarouselCards2'>
//           <img className='cultureImage' src={cultureImage2} alt='culture'></img>
//     </div>
//   </div>
// </Carousel.Item>

// <Carousel.Item interval={2000}>
//   <div style={{ display: 'flex' }}>
//     <div className='innercarouselCards3'>
//           <img className='cultureImage' src={cultureImage3} alt='culture'></img>
//     </div>
//     </div>
// </Carousel.Item>

// <Carousel.Item interval={2000}>
//   <div style={{ display: 'flex' }}>
//   <div className='innercarouselCards3'>
//           <img className='cultureImage' src={cultureImage4} alt='culture'></img>
//   </div>
//   </div>
// </Carousel.Item>
// </Carousel>
// </div>
// </div>  
// })}
// </div>
//   )
// }  

export default Culture