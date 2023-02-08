import React from 'react'
import "../frequently/frequently.css"
import Accordion from 'react-bootstrap/Accordion';

function frequently() {
    return (
        <section>
            <div className='frequently'>
                <p id="frequentlyTitle">Frequently asked questions?</p>
                <div className='freqQus'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How long does the hiring process takes?</Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                Our hiring process is so simple. We follow 3 rounds of interviews and results will
                                be annouced with 2 weeks.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What are the perks do you get from VENZO?</Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                We offer refined customized applications that streamline your. We offer refined
                                customized applications that streamline your.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is your office timings?</Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                We offer refined customized applications that streamline your. We offer refined
                                customized applications that streamline your.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default frequently;