import React from 'react'

import '../../style/style.css'
import '../../style/laptop.css'
import '../../style/laptopL.css'
import '../../style/tablet.css'
import '../../style/mobile.css'

import buildContent from '../../content/BuilContent.json'
function Build() {
    return (
        <div>
            
            {console.log(buildContent.SubContent)}

            {buildContent.map(item => {
                return <div>
                    <div className="containor1" >
                        <div className="build">
                            <div className="title">
                                <p > {item.title}.</p>
                            </div>
                            <div>
                                <div className="desc">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                        <div >
                            <img className="images" src={item.images} />
                        </div>
                    </div>
                    <div className=" row">
                        {item.SubContent.map(item => {
                            return <div className='col1'>
                                <img className="icon" src={item.icon} />
                                <h2 className="heading">{item.title1}</h2>
                                <p className="desc1">{item.content1}</p>
                        <p className='readMore'> {item.readMore ? item.readMore : ""}&nbsp;</p>
                                {item.arrow ? <img className='arrow1' src={item.arrow} alt='arrow' /> : ""}
                            </div>
                        })}

                    </div>
                    {item.hrLine ? <hr className='hr_line' /> : " "}

                </div>
                
            })}

        </div>
    )
}

export default Build
// import build from '../../images/Build.svg'
// import web from '../../images/Web development-gradient.svg'
// import android from '../../images/Android Development-gradient.svg'
// import ios from '../../images/iOS Development-gradient.svg'
// import arrow from '../../images/Read more arrow-gradient.svg'

{/* <div className="containor1" >
                <div className="build">
                    <div className="title">
                        <p > BULID.</p>
                    </div>
                    <div>
                        <div className="desc">
                            We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.
                        </div>
                    </div>
                </div>
                <div >
                    <img className="images" src={build} alt="Build" />
                </div>
            </div> */}
            {/* <div className=" col1">
                    <img className="icon" src={web} alt="web" />
                    <h2 className="heading">Web Development	</h2>
                    <p className="desc1">We offer refined customized applications that streamline your business needs and enhance  customer  experience  for diversified sectors.</p>
                </div>
                <div className=" col2">
                    <img className="icon" src={android} alt="android" />
                    <h2 className="heading"> Android Development	</h2>
                    <p className="desc1">We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.</p>
                </div>
                <div className=" col3">
                    <img className="icon" src={ios} alt="ios" />
                    <h2 className="heading">IOS Development	</h2>
                    <p className="desc1">We offer refined customized applications that streamline your business needs and enhance customer experience for diversified sectors.</p>
                    <p className='readMore'>READ MORE &nbsp;</p><img className='arrow1' src={arrow}  alt='arrow' /> 
                </div>
            </div> */}