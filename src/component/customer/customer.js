import React from 'react'
import video from '../../images/Video thumbnail.svg'
import arrow from '../../images/devArrow.svg'
import '../../style/style.css'
import '../../style/laptop.css'
import '../../style/laptopL.css'
import '../../style/tablet.css'
import '../../style/mobile.css'
// import customerContent from '../../content/CustomerContent.json'

function customer() {
    return (

        
        <div  className='customer'>
            <p className='cus-title'>  We Integrate Traditional Applications and Information Technology Systems <br className='mobileBr'/> with Innovative Customized Application to uphold  your <br className='mobileBr'/> business needs and <br className='mobileBr'/> <br className='webBr' /> <b>Future Growth & Thrive in Markets.</b>  </p>
            <div className='row2'>
                <div className='col4'>
                    <p className=' des1'>We break down the custom-built complexities.   Our custom applications are powered by cutting-edge technologies and superior process agility. You benefit from next-generation applications that are tailored to your specific needs without the hassle. </p>
                    <p className='readMore1'> READ MORE<img className='arrow' src={arrow} alt='arrow' /></p>
                </div>
                <div className='col5'>
                    <img className='videoImg' src={video} alt='video' />

                </div>
            </div>
            {/* {customerContent.customer.map((item) => {
               return <div className='customer'>
                    <p className='cus-title'> {item.title}</p>
                    <div className='row2'>
                        <div className='col4'>
                            <p className=' des1'>{item.desc}</p>
                            <p className='readMore1'> {item.readMore}<img className='arrow' src={item.arrow} alt='arrow' /></p>
                        </div>
                        <div className='col5'>
                            <img className='videoImg' src={item.Images} alt='video' />

                        </div>
                    </div>
                </div>
            })} */}

        </div>
    )
}

export default customer