import React from 'react'
import serviceData from '../../content/Dm_pageContent.json'
import line from '../../DMpage/Vector 82.png'
function service() {
    return (
        <div>


            {serviceData.map((item,index) => {
                return <div >
                    <img key={index} className="serv_hr" src={line} alt='line' />
                    <div className='Dm_sec' >
                        <div className='Serv_left'>
                            <div className="serv_title">
                                <p > {item.title}.</p>
                            </div>
                            <div className="DM_icon ">
                                {console.log(serviceData.SubContent)}

                                {item.SubContent.map((item,index) => {
                                    return <img key={index} className="DM_icons" src={item.icon} alt="mobile media icon" />

                                })}
                            </div>
                        </div>
                        <div className='Serv_right'>
                            <div className="serv_Desc">
                                {item.content}
                            </div>

                        </div>
                    </div>
                </div>

            })}

        </div>)
}

export default service