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
            {buildContent.map((item,index) => {
                return <div>
                    <div className="containor1" key={index} >
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

                        <img className="images" src={item.images} alt='build-img' />
                    </div>
                    <div className=" row">
                        {item.SubContent.map((item,index) => {
                            return <div className='col1' key={index}>
                                <img className="icon" src={item.icon} alt='icon' />
                                <h2 className="heading">{item.title1}</h2>
                                <p className="desc1">{item.content1}</p>
                                
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
