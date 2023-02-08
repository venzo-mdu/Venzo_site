import React, { useState } from 'react'
import '../endtoend/endtoend.css'
import Accordion from 'react-bootstrap/Accordion';

function Endtoend() {
    const [active, setActive] = useState('');
    const dated = (va) => {
        let container
        if (document.querySelector('.card1') !== null) {
            container = document.querySelector('.card1')
        }
        setActive(va)
        if (va == 'brand') {
            container.innerHTML = "<font size=4 color=black>\
            Automated Testing\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Our end-to-end automated testing services enable you to automate test cases and release your bug-free products to the market faster. \
            </font>\
    ";
        }
        else if (va === 'sales') {
            container.innerHTML = "<font size=4 color=black>\
            Security Testing \
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            QA engineers at Venzo conduct comprehensive security assessments of your products to identify and eliminate security vulnerabilities.\
            </font>\
    ";
        }
        else if (va === 'lead') {
            container.innerHTML = "<font size=4 color=black>\
            Mobile Testing\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Our QA specialists test and optimize your application to run smoothly on all mobile devices, resolution displays, and platforms.\
            </font>\
    ";
        }
        else if (va === 'se') {
            container.innerHTML = "<font size=4 color=black>\
            Performance Testing\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Never worry about scalability again, as Venzo’s performance testing services ensure that your application consistently delivers top-notch performance.\
            </font>\
    ";
        }
        else if (va === 'online') {
            container.innerHTML = "<font size=4 color=black>\
            Accessibility Testing\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Our accessibility testing services focus on making your application available to users across multiple devices and platforms, thereby providing greater reach.\
            </font>\
    ";
        }
        //     else if (va === 'social') {
        //         container.innerHTML = "<font size=4 color=black>\
        //         We offer refined customized applications that streamline your 6.\
        //         </font>\
        //         <br>\
        //         <br>\
        //         <font size=3 color=gray>\
        //         Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
        //         </font>\
        // ";
        //     }
    }
    return (
        <section>
            <div className='endtoendSolutions'>
                <div className='section5'>
                    <p className='sect51_title'> End to End Bank Testing Services </p>
                    <p id='endtoendpara'>Our QA & Software Testing Services are designed to take down all obstacles in Corporate Financing, Consumer Finance, Investments, and Commercial Banking.  </p>
                </div>

                <div className='cardList'>
                    <ul className='DM_cardTitle'>
                        <li className={active === 'brand' ? 'cardtitle01' : 'cardtitle1'} onClick={() => dated('brand')}>Automated Testing</li>
                        <li className={active === 'sales' ? 'cardtitle01' : 'cardtitle2'} onClick={() => dated('sales')}>Security Testing </li>
                        <li className={active === 'lead' ? 'cardtitle01' : 'cardtitle3'} onClick={() => dated('lead')}>Mobile Testing </li>
                        <li className={active === 'se' ? 'cardtitle01' : 'cardtitle4'} onClick={() => dated('se')}>Performance Testing </li>
                        <li className={active === 'online' ? 'cardtitle01' : 'cardtitle5'} onClick={() => dated('online')}>Accessibility Testing </li>
                        {/* <li className={active === 'social' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('social')}>Social media engagement</li> */}
                    </ul>
                    <div className='card1'>
                        <p>Automated Testing </p>
                        <p className='subTitle'>Our end-to-end automated testing services enable you to automate test cases and release your bug-free products to the market faster. </p>
                    </div>
                </div>
                <div className='section51'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Automated Testing </Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Automated Testing</p>
                                <p className='carddesc'>Our end-to-end automated testing services enable you to automate test cases and release your bug-free products to the market faster.  </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Security Testing </Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Security Testing</p>
                                <p className='carddesc'>QA engineers at Venzo conduct comprehensive security assessments of your products to identify and eliminate security vulnerabilities.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Mobile Testing </Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Mobile Testing</p>
                                <p className='carddesc'>Our QA specialists test and optimize your application to run smoothly on all mobile devices, resolution displays, and platforms.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Performance Testing </Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Performance Testing.</p>
                                <p className='carddesc'>Never worry about scalability again, as Venzo’s performance testing services ensure that your application consistently delivers top-notch performance.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Accessibility Testing</Accordion.Header>
                            <Accordion.Body className=' cardbox'>
                                <p className='cardtitle'>Accessibility Testing </p>
                                <p className='carddesc'>Our accessibility testing services focus on making your application available to users across multiple devices and platforms, thereby providing greater reach.</p>

                            </Accordion.Body>
                        </Accordion.Item>
                        {/* <Accordion.Item eventKey="6">
                        <Accordion.Header>Support Services</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                        <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                        <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                        </Accordion.Body>
                    </Accordion.Item> */}
                    </Accordion>

                </div>

            </div>
        </section>
    )


}

export default Endtoend