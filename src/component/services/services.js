import React from 'react'
import "../services/services.css"
import servicesData from '../../content/services.json'
import line from '../../DMpage/Vector 82.png'
function services() {
    return (
        <div>

                <div className='section2'>
                    <p className='Dm_heading'>Services</p>
                    <p className='Dm_subheading'>We built the best-in-class software solutions that bring <strong >enhanced growth to your business</strong></p>
                </div>
            {servicesData.map(item => {
                return <div >
              
                <img className="serv_hr" src={line} />
                <div className='Dm_sec' >
                    <div className='Serv_left'>
                        <div className="serv_title">
                            <p id="titleinQA"> {item.title}.</p>
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

export default services