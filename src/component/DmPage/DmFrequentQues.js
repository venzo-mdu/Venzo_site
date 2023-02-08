import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
function FlushExample() {
    return (
        <div>
            <p className='sect6_title'>Frequently asked questions?</p>
            <div className='freqQus'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is digital marketing? </Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            Digital marketing is the use of online channels, such as search engines, social media, email, and websites, to promote a brand, product, or service.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why do businesses need digital marketing? </Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            Businesses need digital marketing to reach a larger and more targeted audience, to improve their online visibility, and to establish a strong online presence.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What are the different digital marketing services offered?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            Common digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content marketing.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How do digital marketing services help improve my business? </Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            Digital marketing services can help improve your business by increasing your website traffic, generating leads and sales, improving your online reputation, and building brand awareness.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Can digital marketing services be customized for my business? </Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            Yes, digital marketing services can be customized to meet the specific needs and goals of your business.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>How do I choose the right digital marketing agency for my business?</Accordion.Header>
                        <Accordion.Body className='collapseData'>
                            When choosing a digital marketing agency, consider their experience, portfolio, case studies, and client testimonials. You should also look for an agency that offers transparent pricing, clear communication, and a commitment to delivering results.


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>


    );
}

export default FlushExample;