import React, {useState}  from 'react'
import '../endtoend/endtoend.css'
import Accordion from 'react-bootstrap/Accordion';

function Endtoend() {
    const [active, setActive] = useState('');
    const dated = (va) => {
        let container = document.querySelector('.card1')
        setActive(va)
        if (va == 'brand') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your  1.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'sales') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 2.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'lead') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 3.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'se') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 4.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'online') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 5.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
        else if (va === 'social') {
            container.innerHTML = "<font size=4 color=black>\
            We offer refined customized applications that streamline your 6.\
            </font>\
            <br>\
            <br>\
            <font size=3 color=gray>\
            Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.\
            </font>\
    ";
        }
    }
  return (
      <section>
          <div className='endtoendSolutions'>
          <div className='section5'>
                    <p className='sect51_title'> End to End Banking solutions</p> 
                </div>

                <div className='cardList'>
                    <ul className='DM_cardTitle'>
                        <li className={active === 'brand' ? 'cardtitle01' : 'cardtitle1'} onClick={() => dated('brand')}>Brand Promotion</li>
                        <li className={active === 'sales' ? 'cardtitle01' : 'cardtitle2'} onClick={() => dated('sales')}>Increase Sales</li>
                        <li className={active === 'lead' ? 'cardtitle01' : 'cardtitle3'} onClick={() => dated('lead')}>Lead Generation</li>
                        <li className={active === 'se' ? 'cardtitle01' : 'cardtitle4'} onClick={() => dated('se')}>SE ranking</li>
                        <li className={active === 'online' ? 'cardtitle01' : 'cardtitle5'} onClick={() => dated('online')}>Online Reputation</li>
                        <li className={active === 'social' ? 'cardtitle01' : 'cardtitle6'} onClick={() => dated('social')}>Social media engagement</li>
                    </ul>
                    <div className='card1'>
                        <p> We offer refined customized applications that streamline your. </p>
                        <p className='subTitle'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                    </div>
                </div>
                <div className='section51'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Business consulting</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                            <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                            <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Production Designing</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                        <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                        <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Product Development</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                        <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                        <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Tools Developmen</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                        <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                        <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>QA Engineering</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                        <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                        <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Support Services</Accordion.Header>
                        <Accordion.Body className=' cardbox'>
                        <p className='cardtitle'>We offer refined customized applications that streamline your.</p>
                        <p className='carddesc'>Brand promotion is the way to inform, remind, persuade convincingly, and influence the consumers to drive their decision towards purchasing the product or service under a brand.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                </div>

          </div>
      </section>
  )


}

export default Endtoend