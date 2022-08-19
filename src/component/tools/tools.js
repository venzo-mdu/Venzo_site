import React from 'react'
import '../tools/tools.css'
import toolsData from "../../content/toolsData.json"
import jiraImg from "../../images/jira.png"

function tools() {
  return (
      <section>
          <div className='toolsweuse'>
          <div className='toolsBlock'>
          <h1>Tools <br></br><span id="weuse">we use</span></h1>
          <div className='toolTypes'>
            <img src={jiraImg} alt="toolsTypesIcon"></img><span className='jira'>Jira</span>
            <p>We offer refined customized applications that streamline your business needs and enhance customer experience We offer refined customized applications that streamline your business needs and enhance customer experience.</p>
          </div>
          </div>

          <div className='marqueeTools'>
              <marquee direction="down">
                  {
                      toolsData.map(item=>{
                          return(
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
                      toolsData.map(item=>{
                          return(
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
s      </section>
  )
}

export default tools