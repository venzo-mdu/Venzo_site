import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import productImage from '../images/productImage.png'
import borderLine from '../images/borderLine.png'


import Header from '../component/header/header'
import BCBanner from '../component/blockchaindevelopment/bcBanner/bcBanner'
import BCNetwork from '../component/blockchaindevelopment/bcNetwork/bcNetwork'
import BCServices from '../component/blockchaindevelopment/bcServices/bcServices'
import BCExecution from '../component/blockchaindevelopment/bcExecution/bcExecution'
import Footer from '../component/footer/footer'



function blockchaindevelopment() {
  return (
    <>
      <Header flag='header2' />
      <BCBanner />
      <BCNetwork />
      <BCServices />
      <BCExecution />

      <div className='awesomeProducts'>
        <p className='awesomeTitle'>Awesome products from <span id='awesomeVenzo'>Venzo !</span></p>
        <Carousel>
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item>
          <Carousel.Item >

            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >
          <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img className='productImage' src={productImage} alt='productImage'></img>
            </div>
          </Carousel.Item >

        </Carousel>
      </div>

      <div className='buildProduct'>
        <p className='buildText'> Start building blockchain <br /><span className=' textColor'>to grow your business</span> </p>
        <button className=' btn buildtalk'>Let's talk</button>
      </div>
      <Footer />
    </>
  )
}

export default blockchaindevelopment