import React from 'react'
import '../offering/offering.css'
function offering() {
  return (
    <div className='offering'>
    <p id='offeringTilte'>Offering World-class Services in all Techs !</p>
    
    <div className='cardsinOffering'>
      <div className='offerCards1'>
      <p id='offerCardsTitle'>Front-end development Services</p>
      <p id='offerCardsText'>Our front-end application development competence encompasses both web and mobile platforms, accommodating the strategic goals and user-centric initiatives. As a result, customer can expect unequaled performance, scalability, and speed, all of which are underpinned by a solid architecture and design.</p>
      <button className='offerButton border-gradient-purple'>Get Quote</button>
      </div>
      <div className='offerCards1'>
      <p id='offerCardsTitle'>Back-End Application Development Services</p>
      <p id='offerCardsText'>In order to assist businesses to succeed in the digital age, we offer a full spectrum of back-end development services, from custom back-end layers to cloud integration. We integrate seamlessly with third party APIs and provide reliable and secured data.</p>
      <button className='offerButton border-gradient-purple'>Get Quote</button>
      </div>
      <div className='offerCards1'>
      <p id='offerCardsTitle'>Comprehensive DevOps Solutions</p>
      <p id='offerCardsText'>DevOps enables you to get new features and products to market faster, with fewer bugs, improved customer experience and greater cost saving. We offer DevOps assesment, architecture, integration, deployments and analytics.</p>
      <button className='offerButton border-gradient-purple'>Get Quote</button>

      </div>
    </div>
    


    </div>
  )
}

export default offering