import React from 'react'
import '../offering/offering.css'
function offering() {
  return (
    <div className='offering'>
      <p id='offeringTilte'>Partner with us for Full-stack App development.</p>

      <div className='cardsinOffering'>
        <div className='offerCards1'>
          <p id='offerCardsTitle'>Front-end development Services</p>
          <p id='offerCardsText'>Leading businesses and startups bolster their development teams with Venzo front-end developers for software development projects that increase usability, including web development, UI/UX, and mobile app development. We use a wide variety of low-code languages.</p>
          <button className='offerButton border-gradient-purple'>Get Quote</button>
        </div>
        <div className='offerCards1'>
          <p id='offerCardsTitle'>Back-End Application Development Services</p>
          <p id='offerCardsText'>We provide backend web development services that include but are not limited to, creating scalable, complicated applications and IoT infrastructure. Our team creates scalable backend solutions that automatically expand to meet your business needs.</p>
          <button className='offerButton border-gradient-purple'>Get Quote</button>
        </div>
        <div className='offerCards1' id='offerCardsRes'>
          <p id='offerCardsTitle'>Comprehensive DevOps Solutions</p>
          <p id='offerCardsText'>Eliminate the tradeoff between quick release and quality assurance. We enable companies to accelerate innovation without taking any risks. By removing friction, our solutions can increase developer productivity, shorten the time it takes to launch products and boost customer happiness.</p>
          <button className='offerButton border-gradient-purple'>Get Quote</button>

        </div>
      </div>



    </div>
  )
}

export default offering