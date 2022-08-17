import React from 'react'
import "../testing/testing.css"

function testing() {
  return (
      <section>
          <div className='testing'>
            <div className='typesTesting'>
                <h1>Types of<br></br> Testings<br></br> we do</h1>
                <div className='testingCard'>
                   <div className='types'>
                       <div className='types1'>
                           <ul>
                               <li>UAT</li>
                               <li>Regression Testing</li>
                               <li>Functional Testing</li>
                               <li>Database Testing</li>
                               <li>Security Testing</li>
                           </ul>
                       </div>
                       <div className='types2'>
                           <ul>
                               <li>Usability Testing</li>
                               <li>Performance Testing</li>
                               <li>UI Testing</li>
                               <li>API Testing</li>
                               <li>Transaction Testing</li>
                           </ul>
                       </div>
                   </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default testing