import React from 'react'
import '../endtoend/endtoend.css'

function endtoend() {
  return (
      <section>
          <div className='endtoendSolutions'>
          <div className='section5'>
                    <p className='sect5_title'> End to End Banking solutions</p> 
                </div>

                <div className='cardList'>
                    <ul className='DM_cardTitle'>
                        <li className='cardtitle1' onClick={() => dated('brand')}>Business consulting</li>
                        <li className='cardtitle2' onClick={() => dated('sales')}>Production Designing</li>
                        <li className='cardtitle3' onClick={() => dated('lead')}>Product Development</li>
                        <li className='cardtitle4' onClick={() => dated('se')}>Tools Development</li>
                        <li className='cardtitle5' onClick={() => dated('online')}>QA Engineering</li>
                        <li className='cardtitle6' onClick={() => dated('social')}>Support Services</li>
                    </ul>
                    <div className='card1'>

                    </div>
                </div>
          </div>
      </section>
  )
  function dated(va) {
    { console.log(va) }
    let container = document.querySelector('.card1')
    if (va == 'brand') {
        container.innerHTML = 'brand1111'
    }
    else if (va === 'sales') {
        container.innerHTML = 'brand2222'
    }
    else if (va === 'lead') {
        container.innerHTML = 'brand3333'
    }
    else if (va === 'se') {
        container.innerHTML = 'brand4444'
    }
    else if (va === 'online') {
        container.innerHTML = 'brand5555'
    }
    else if (va === 'social') {
        container.innerHTML = 'brand6666'
    }
}
}

export default endtoend