import React from 'react'
import '../tools/tools.css'
import bankingqatools5 from "../../images/bankingqatools5.png"
import bankingqatools4 from "../../images/bankingqatools4.png"
import bankingqatools3 from "../../images/bankingqatools3.png"
import bankingqatools2 from "../../images/bankingqatools2.png"
import bankingqatools1 from "../../images/bankingqatools1.svg"


function tools() {
    return (
        <section>
            <div className='toolsweuse'>
                <div className='toolsBlock'>
                    <h1 className='headingWeb'>Tools we use</h1>
                    {/* <h1 className='headingRes'>Tools we use</h1> */}

                    {/* <div className='toolTypes'>
                        <div className='toolimgWithtitle'>
                        <img src={jiraImg} alt="toolsTypesIcon"></img><span className='jira'>Jira</span>
                        </div>
                        <p>We offer refined customized applications that streamline your business needs and enhance customer experience We offer refined customized applications that streamline your business needs and enhance customer experience.</p>
                    </div> */}
                    {/* <div className='marqueeToolsRes'>
                    <marquee direction="left" scrolldelay="1500">            

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
                    </marquee> */}

                    <div className='bankingToolsIcon'>
                        <div>
                            <img src={bankingqatools1} alt="icon"></img>
                            <p className="toolsTit1">Jira</p>
                        </div>
                        <div>
                            <img src={bankingqatools2} alt="icon"></img>
                            <p className="toolsTit2">Cucumber</p>
                        </div>
                        <div>
                            <img src={bankingqatools3} alt="icon"></img>
                            <p className="toolsTit3">GitLab</p>
                        </div>
                        <div>
                            <img src={bankingqatools4} alt="icon"></img>
                            <p className="toolsTit4">Selinium</p>
                        </div>
                        <div>
                            <img src={bankingqatools5} alt="icon"></img>
                            <p className="toolsTit5">Eclipse</p>
                        </div>
                    </div>
                </div>








            </div>
        </section>
    )
}

export default tools