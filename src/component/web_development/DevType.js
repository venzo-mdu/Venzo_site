import React from 'react'
import devContent from '../../content/devContent.json'
function DevType() {
    return (
        <div>

            {devContent.map(item => {
                return <div>
                    <div className="development1" >
                        <div className="devContent">
                            <div className="con_title">
                                <p > {item.title}.</p>
                            </div>
                            <div>
                                <div className="con_desc">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                        <div >
                            <img className="con_image" src={item.images} alt='image' />
                        </div>
                    </div>
                    <div className=" row1">
                        <div className='column'>
                            <div className='column1'>
                                {item.SubContent.map(item => {
                                    return <div className='column2'>
                                        <img className="icon1" src={item.icon1} alt='icon' />
                                        <h2 className="heading1">{item.title1}</h2>
                                    </div>
                                })}
                            </div>
                            <div className='column1'>
                                {item.SubContent1.map(item => {
                                    return <div className='column2'>
                                        <img className="icon1" src={item.icon2} alt='icon' />
                                        <h2 className="heading1">{item.title2}</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                        {item.hrLine ? <hr className='hr_line1' /> : " "}

                    </div>
                </div>
            })}
        </div>)
}

export default DevType