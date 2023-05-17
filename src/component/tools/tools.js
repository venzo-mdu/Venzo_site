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