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
                            <Accordion.Header>What is the company culture like?</Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                We at Venzo think that a fun and positive work culture is essential to our success. Here are a few examples of how we attempt to create a relaxing and pleasurable work environment:
                                - Team building activities: We regularly schedule team building activities and outings to help our employees bond and build stronger connections with one another.

                                - Regular company events: We host regular company events, such as Fun Fridays, Happy Hours, potlucks, and holiday parties, to help our employees socialize and have fun outside of work.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How does the company support work-life balance? </Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                We value work-life balance and provide flexible work hours to help our employees balance personal and professional commitments.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Are there any opportunities for cross-functional collaboration and learning? </Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                We value cross-functional collaboration at Venzo and believe it is critical to our success.
                                We provide regular training and development courses to our staff, both in-house and through external sources, to assist them gain new skills and expertise. Technical training, leadership development, and communication skills are all part of this.
                                Overall, we want to foster a culture of cooperation, learning, and growth for all of our employees.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What qualities or skillsets must I possess to join the Team?  </Accordion.Header>
                            <Accordion.Body className='collapseData'>
                                We continuously seek talented and passionate individuals to join our team at Venzo. We are looking for applicants who have the following qualities in particular:
                                Strong problem-solving abilities: We seek applicants who can think critically and creatively in order to find unique solutions to complicated situations.
                                Highly- Collaborative: This is essential to us, as we seek applicants that can work well in a team atmosphere and contribute to a healthy business culture.
                                Positive attitude: We want to hire people who are upbeat and have a can-do attitude, as well as those who are eager to roll up their sleeves and face obstacles head-on.
                                Grow-Mindset : We are always searching for those who are ready to learn and improve as well as those who are receptive to innovative concepts and methods.
                                We strongly encourage you to submit an application to Venzo if you meet these requirements and want to work on a creative team. Our commitment to creating a diverse and inclusive workplace stems from the idea that our staff is our greatest asset.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default frequently;