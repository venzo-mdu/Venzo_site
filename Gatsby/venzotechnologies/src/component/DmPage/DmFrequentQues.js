import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
function FlushExample() {
    return (
        <div>
            <p className='sect6_title'>Frequently asked questions?</p>
            <div className='freqQus'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>We offer refined customized applications that streamline your ?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            We offer refined customized applications that streamline your. We offer refined
                            customized applications that streamline your.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>We offer refined customized applications that streamline your ?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            We offer refined customized applications that streamline your. We offer refined
                            customized applications that streamline your.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>We offer refined customized applications that streamline your ?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            We offer refined customized applications that streamline your. We offer refined
                            customized applications that streamline your.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>We offer refined customized applications that streamline your ?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            We offer refined customized applications that streamline your. We offer refined
                            customized applications that streamline your.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>We offer refined customized applications that streamline your ?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            We offer refined customized applications that streamline your. We offer refined
                            customized applications that streamline your.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>We offer refined customized applications that streamline your ?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            We offer refined customized applications that streamline your. We offer refined
                            customized applications that streamline your.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>


    );
}

export default FlushExample;