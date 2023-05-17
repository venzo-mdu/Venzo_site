import React from 'react'
import './reactjsuse.css'
import './playwrighttesting.css'
import { Table } from 'react-bootstrap'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { slideData1 } from './slideData1'
import { Link } from 'gatsby'

import Playwright1 from '../../images/blogsPic/playwright1.png'
import Playwright2 from '../../images/blogsPic/playwright2.png'
import Playwright3 from '../../images/blogsPic/playwright3.png'


function playwrighttesting() {
  return (
    
    <div className='Selenium'>
      <div className='seleniumleft'>
        <p className='seleTitle'>End to End Test Automation Testing with PLAYWRIGHT</p>
        <div className='angulatTitle1flex'>
          <p className='AngularDate'> Automation Testing | April 27, 2022  | Ramya</p>
          {/* <p className='AnguarPrd'>Automation Testing</p> */}
        </div>
        <img className='selenium1' src={Playwright1} alt='playwright'></img>
        <p className='seleniumTtiel'>What a playwright is ?</p>
        <p className='seleniumCont'>
          Playwright is a tool used for testing web applications. It helps developers automate tests so that they can quickly and easily check if their web application is working properly.
          Playwright works with different web browsers and programming languages, making it a versatile tool for testing web applications.
          It can be used on different operating systems and can be integrated with popular continuous integration and deployment servers like Jenkins, CircleCI, Azure Pipeline, TravisCI, and others.  Overall, Playwright is a helpful tool for developers who want to make sure their web application is functioning correctly.
        </p>
        <p className='seleniumTtiel'>Unlocking the Benefits of Playwright for Efficient Web Automation :</p>
        <p className='seleniumCont'>
          <ul className='seleinumList'>
            <li className='seleinumList'>Playwright has an easy-to-understand way of writing test scripts, making it easier to create automated tests for your web application. </li>
            <li className='seleinumList'>Playwright can interact with different web browsers and web pages easily, giving you more flexibility when testing your web application. </li>
            <li className='seleinumList'>Playwright runs tests faster than other automation frameworks, which can save you time when testing your web application. </li>
            <li className='seleinumList'>Playwright integrates well with other tools, such as Docker, GitHub Actions, Azure Pipelines, CircleCI, Jenkins, GitLab, and JavaScript test runners like Jest/Jasmine, AVA, and Mocha, making it easy to incorporate Playwright into your existing development workflow. </li>
          </ul>
        </p>
        <p className='seleTitle'>Selenium the Most Popular Test Automation Tool; A Superlative Guide To Selenium Testing <span style={{ color: 'blue', fontSize: '22px', borderBottom: '2px solid blue' }}><Link to='/blog/why-selenium-is-most-widely-used-test-automation-tool/'>Read More</Link> </span></p>

        <p className='seleniumTtiel'>In summary, Playwright is a powerful open-source tool for browser automation that offers the following capabilities: </p>
        <p className='seleniumCont'>
          <ol className='seleinumList'>
            <li className='seleinumList'>Auto-wait: Playwright waits for elements to be actionable before performing actions, eliminating the need for artificial timeouts and reducing flaky tests.</li>
            <li className='seleinumList'>Web-first assertions: Playwright assertions are specifically designed for the dynamic web and automatically retry until necessary conditions are met. </li>
            <li className='seleinumList'>Tracing: Playwright offers a variety of tracing capabilities to help eliminate flaky tests, including configurable test retry strategies, execution trace capture, videos, and screenshots.  </li>
            <li className='seleinumList'>No trade-offs: Playwright runs tests out-of-process, eliminating the typical limitations of in-process test runners.</li>
            <li className='seleinumList'>Multiple everything: Playwright can test scenarios that span multiple tabs, origins, and users, with different contexts for each.</li>
            <li className='seleinumList'>Trusted events: Playwright uses a real browser input pipeline to produce trusted events, allowing interaction with dynamic controls and hover elements.</li>
            <li className='seleinumList'>Test frames and pierce Shadow DOM: Playwright selectors can pierce Shadow DOM and allow seamless entry into frames.</li>
            <li className='seleinumList'>Full isolation and execution: Playwright creates a browser context for each test, delivering full test isolation with zero overhead.</li>
            <li className='seleinumList'>Log in once: Playwright allows the authentication state of the context to be saved and reused in all tests, reducing repetitive log-in operations.</li>
            <li className='seleinumList'>Powerful tooling: Playwright offers code generation, an inspector for page inspection and selector generation, and a trace viewer for investigating test failures.</li>

          </ol></p>

        <p className='seleniumTtiel'>To summarize, some of the advantages of using Playwright for web testing are: </p>
        <p className='seleniumCont'>
          <ul className='seleinumList'>
            <li className='seleinumList'>Accurate results and excellent test coverage for sophisticated web applications. </li>
            <li className='seleinumList'>Support for testing scenarios involving multiple tabs, users, and iframes.   </li>
            <li className='seleinumList'>Availability as a VS Code extension for easy test execution, debugging, and selector exploration.</li>
            <li className='seleinumList'>Generation of HTML reports for viewing test execution results in the browser, including visual mismatches and test artifacts.</li>
            <li className='seleinumList'>Support for different types of testing, such as end-to-end, functional, and API testing.</li>
            <li className='seleinumList'>Different debugging options, including Playwright Inspector, Browser Developer Tools, VSCode Debugger, and Trace Viewers Console Logs.</li>
            <li className='seleinumList'>Built-in reporters like JSON, JUnit, and HTML Reporters, and the ability to create custom reporters.</li>
            <li className='seleinumList'>Ability to run parallel test executions locally or on an online Selenium grid, and to share tests between systems for running multiple tests in parallel </li>

          </ul></p>

        <p className='seleniumTtiel'>Playwright Architecture :</p>
        <img className='selenium1' src={Playwright2} alt='playwright'></img>
        <p className='seleniumCont'><span style={{ fontSize: '15px', fontFamily: 'poppins', fontWeight: 'bold' }}>CLIENT : </span>Playwright operates on a client-server model, with the client being your code written in a programming language such as JavaScript, Java, Python, C#, and so on.  </p>
        <p className='seleniumCont'><span style={{ fontSize: '15px', fontFamily: 'poppins', fontWeight: 'bold' }}>SERVER : </span>The Playwright server interacts with the client and the various web browser engines. To communicate with different browsers, Playwright employs a variety of protocols. It communicates with Chromium using the Chrome DevTools Protocol (CDP), and it has its own protocols for Firefox and WebKit that are similar to CDP.  </p>
        <p className='seleniumCont'><span style={{ fontSize: '15px', fontFamily: 'poppins', fontWeight: 'bold' }}>Websocket Protocol : </span>To connect the client and the server, Playwright employs the WebSocket protocol. A process is used to establish the WebSocket connection. </p>
        <p className='seleniumCont'>WebSockets have significantly lower latency than long polling. Because WebSockets keep the connection open, real-time communication between the client and server is possible. </p>
        <p className='seleniumCont'>The WebSocket protocol establishes a full-duplex communication channel over a single TCP connection, allowing communication to take place in both directions. </p>
        <p className='seleniumCont'>The WebSocket connection is a stateful protocol, which means that it will remain active until either the client or the server terminates it. Playwright sends all requests between the client and server via a single WebSocket connection, which is considered superior for automation to the Selenium HTTP Connection protocol. </p>
        <p className='seleniumCont'><span style={{ fontSize: '15px', fontFamily: 'poppins', fontWeight: 'bold' }}>Client Server Communication : </span>When you run a test using Playwright, your test code is converted into a specific format called JSON and sent to the Playwright server using the WebSocket protocol. This protocol allows for faster and more reliable communication between the client and server because it keeps the connection open until all tests are completed. </p>
        <p className='seleniumCont'>This is different from other testing frameworks like Selenium, which uses the HTTP protocol to send each command to the server separately. In Selenium, the connection between the server and client is terminated after each request and then re-established for the next request, which can cause delays and lead to test failures.  </p>
        <p className='seleniumCont'>Because Playwright uses a single connection for all requests, it is faster and less prone to test failures or flakiness. Plus, the commands are executed quickly, which makes Playwright a better choice for cross-browser testing.  </p>

        <img className='selenium1' src={Playwright3} alt='playwright'></img>
        <p className='seleniumTtiel'>Playwright VS Selenium : </p>
        <Table className='iconicTable'>
                    <tr>
                        <th>Criteria</th>
                        <th>Playwright</th>
                        <th>Selenium</th>
                    </tr>
                    <tr>
                        <td className='tableClr'>Browser Support	</td>
                        <td>Chromium, Firefox, and WebKit (note: Playwright tests browser projects, not stock browsers) </td>
                        <td>Chrome, Safari, Firefox, Opera, Edge, and IE </td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Language Support </td>
                        <td>Java, Python, .NET C#, TypeScript, and JavaScript. </td>
                        <td>Java, Python, C#, Ruby, Perl, PHP, and JavaScript </td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Test Runner Frameworks Support 	</td>
                        <td>Jest/Jasmine, AVA, Mocha, and Vitest 	</td>
                        <td>Jest/Jasmine, Mocha, WebDriver IO, Protractor, TestNG, JUnit, and NUnit </td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Operating System Support 	</td>
                        <td>Windows, Mac OS and Linux 	</td>
                        <td>Windows, Mac OS, Linux, and Solaris </td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Architecture 	</td>
                        <td>Headless browser with event-driven architecture 	</td>
                        <td>4-layer architecture (Selenium Client Library, JSON Wire Protocol, Browser Drivers, and Browsers) </td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Integration with CI </td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Prerequisites 	</td>
                        <td>NodeJS 	</td>
                        <td>Selenium Bindings (for your language), Browser Drivers and Selenium Standalone Server </td>
                    </tr>
                    <tr>
                        <td className='tableClr'>Real Device Support </td>
                        <td>Native mobile emulation (and experimental real Android support) 	</td>
                        <td>Real device clouds and remote servers </td>
                    </tr>
                    <tr>
                        <td className='tableClr' >Community Support </td>
                        <td>Smaller but growing set of community resources 	</td>
                        <td>Large, established collection of documentation and support options </td>
                    </tr>
                </Table>

        <p className='seleniumTtiel'> Ready to streamline your testing process? Let us show you the power of automation. <span style={{ fontSize: '16px', fontFamily: 'poppins', fontWeight: '200' }} className='seleinumList'>Contact us now for</span>  </p>
        <span style={{ color: 'blue', fontSize: '18px', borderBottom: '2px solid blue' }}><Link to='/quality-engineering-assurance/'>Quality Assurance and Testing Services</Link> </span>
        <p className='seleniumTtiel'>What is the Playwright Test Recorder ?  </p>

        <p className='seleniumCont'>
          <ul className='seleinumList'>
            <li className='seleinumList'>Playwright Test Recorder is a recording tool included in Playwright's CLI and new VS Code extension. </li>
            <li className='seleinumList'>It allows for fast recording of user journeys without the need for code.   </li>
            <li className='seleinumList'>Benefits include eliminating repetitive tasks and accelerating test creation for faster releases and better test coverage. </li>
            <li className='seleinumList'>Playwright can be used for various tasks such as monitoring and UI automation.  </li>
            <li className='seleinumList'>It is a tool that supports producing better, higher quality software faster with lower effort. </li>

          </ul></p>
        <p className='seleniumTtiel'>Conclusion :  </p>
        <p className='seleniumCont'>Playwright automates web browsers on various computers for tasks such as website testing and screen capturing. It improves software development with its versatility and ease of use. The development team listens to users' feedback to continuously enhance the tool's capabilities. </p>
      </div>
      <div className='blogsRight blogsRight1'>
        <div className='slide1'>
          {
            slideData1.map((obj, index) => {
              return (
                <>
                  <Link to={obj.routeValue} key={index} state={{ data: obj.stateValue }}> <p className='blogText'>{obj.value}</p> </Link><hr />
                </>

              )
            })
          }
        </div>
        <div className='slide2'>
          <p>Tweets</p>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Venzo_Tech"
            options={{ height: 300 }}
          />
        </div>
      </div>
    </div>
  )
}

export default playwrighttesting