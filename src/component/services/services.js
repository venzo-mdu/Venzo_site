import React from 'react'
import "../services/services.css"
import servicesData from '../../content/services.json'
import line from '../../DMpage/Vector 82.png'
function services() {
    return (
        <div>

            <div className='section2'>
                <p className='Dm_heading1 dmheading'>Services</p>
                <p className='Dm_subheading1'>Ready to test any custom software for Corporates, Retail Banks,<strong> Trade Finance & Investment Banking companies. </strong></p>
            </div>
            {servicesData.map((item,index) => {
                return <div key={index}>

                    <img className="serv_hr" src={line} alt="line"/>
                    <div id='parainQA' className='Dm_sec' >
                        <div className='Serv_left'>
                            <div className="serv_title">
                                <p id="titleinQA"> {item.title}.</p>
                            </div>

                        </div>
                        <div className='Serv_right1'>
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