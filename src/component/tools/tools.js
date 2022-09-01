import React from 'react'
import '../tools/tools.css'
import toolsData from "../../content/toolsData.json"
import jiraImg from "../../images/jira.png"

function tools() {
    return (
        <section>
            <div className='toolsweuse'>
                <div className='toolsBlock'>
                    <h1 className='headingWeb'>Tools <br></br><span id="weuse">we use</span></h1>
                    <h1 className='headingRes'>Tools we use</h1>

                    <div className='toolTypes'>
                        <div className='toolimgWithtitle'>
                        <img src={jiraImg} alt="toolsTypesIcon"></img><span className='jira'>Jira</span>
                        </div>
                        <p>We offer refined customized applications that streamline your business needs and enhance customer experience We offer refined customized applications that streamline your business needs and enhance customer experience.</p>
                    </div>
                    <div className='marqueeToolsRes'>
                    <marquee direction="left">
                        {
                            toolsData.map(item => {
                                return (
                                    <>
                                        <div className='leftSidetools'>

                                            <img src={item.toolsicon} alt='toolsIcon1'></img>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </marquee>

                </div>
                </div>

                <div className='marqueeTools'>
                    <marquee direction="down">
                        {
                            toolsData.map(item => {
                                return (
                                    <>
                                        <div className='downSidetools'>


                                            <img src={item.toolsicon} alt='toolsIcon1'></img>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </marquee>
                    <marquee direction="up">
                        {
                            toolsData.map(item => {
                                return (
                                    <>
                                        <div className='upSidedowntools'>

                                            <img src={item.toolsicon} alt='toolsIcon1'></img>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </marquee>
                </div>


              



            </div>
        </section>
    )
}

export default tools