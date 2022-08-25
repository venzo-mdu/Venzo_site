import React from 'react'
import video from '../../images/Video thumbnail.svg'
import arrow from '../../images/Read more arrow-gradient.svg'
import '../../style/style.css'
import '../../style/laptop.css'
import '../../style/laptopL.css'
import '../../style/tablet.css'
import '../../style/mobile.css'
// import customerContent from '../../content/CustomerContent.json'

function customer() {
    return (
        <div  className='customer'>
            <p className='cus-title'> We offer refined customized <br className='mobileBr'/> applications that streamline <br className='webBr' /> your <br className='mobileBr'/> business needs and <br className='mobileBr'/>  <b>enhance customer experience </b> <br className='webBr' />for <br className='mobileBr'/>  diversified sectors.</p>
            <div className='row2'>
                <div className='col4'>
                    <p className=' des1'>We offer refined customized applications that streamline your business needs and enhance customer experience We offer refined customized applications that streamline your business needs and enhance customer experience</p>
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