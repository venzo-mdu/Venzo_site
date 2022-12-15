import React from 'react'
import '../bcServices/bcServices.css'

import bcd33 from '../../../images/blockchaindevelopment/bcd33.png'



function bcServices() {
    return (
        <div className='bcServices'>
            {/* <img className='bcServicesBG' src={bcd30} alt='backgroundImage'></img> */}

            <div className='innerbcServices'>
                <div className='bcServicesText'>
                    <div className='bcServicesLeft'>
                        <p id='bcServicesTitle1'>Our Services</p>
                        <p id='bcServicesTitle2'>What we <br></br>can do for you</p>
                    </div>
                    <div className='bcServicesRight'>
                        <p id='bcServicesrightText'>As revolutionary as it sounds, enterprise blockchain solutions are truly a mechanism that brings everyone to the highest degree of accountability. We help start-ups, businesses and enterprises to design more transparent, efficient and automated versions of their businesses with our wide spectrum of blockchain development services.</p>
                    </div>
                </div>


                <div className='bctalkServices'>
                    <div className='bcservicesCards' id='smartcontarcts'>
                        <img className='bcservicescardIcon' src={bcd33} alt='icon'></img>
                        <p id='bcCardtitle'>Smart Contracts Development</p>
                        <p id='bcCardtext'>Empowering businesses to automate the execution of activities while ensuring the integrity of multi-party agreements.</p>
                        <button className='bcServicesbutton'>Let's Talk</button>
                    </div>
                    <div className='bcservicesCards'>
                        <img className='bcservicescardIcon' src={bcd33} alt='icon'></img>
                        <p id='bcCardtitle'>Blockchain <br></br>Technology Consulting</p>
                        <p id='bcCardtext'>A one-on-one consulting session helping you design an operational blockchain business network that is secure, democratic and ahead of the curve.</p>
                        <button className='bcServicesbutton'>Let's Talk</button>
                    </div>
                    <div className='bcservicesCards'>
                        <img className='bcservicescardIcon' src={bcd33} alt='icon'></img>
                        <p id='bcCardtitle'>NFT <br></br>Solutions</p>
                        <p id='bcCardtext'>Empowering businesses to automate the execution of activities while ensuring the integrity of multi-party agreements.</p>
                        <button className='bcServicesbutton'>Let's Talk</button>
                    </div>
                </div>

                <div className='bcserviceChoose'>
                    <p id='bcservicechooseTitle'>Why Choose <span id='bcservicegradientText'> VENZO</span>  as Blockchain Development Company?</p>
                    <p id='bcservicechooseText'>We believe in providing guaranteed results, no matter how complex your project is. We practice what we preach and we deliver what we promise.</p>
                </div>

                <div className='bcserviceschooseCards'>
                    <div className='bcserviceschooseCard1'>
                        <p id='bcserviceschooseCardText'>Dynamic Engagement Model</p>
                    </div>
                    <div className='bcserviceschooseCard2'>
                        <p id='bcserviceschooseCardText'>Client Association at Each Stage</p>

                    </div>
                    <div className='bcserviceschooseCard3'>
                        <p id='bcserviceschooseCardText'>Use of <br></br>Latest  Technologies</p>

                    </div>
                    <div className='bcserviceschooseCard4'>
                        <p id='bcserviceschooseCardText'>360° <br></br>Holistic Approach</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default bcServices