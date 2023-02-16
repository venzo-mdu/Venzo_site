import React,{useEffect} from 'react'
import Header from '../component/header/header'
import VenzoSA from '../component/staffAugmentation/venzostaff/venzostaff'
import Hiring from '../component/staffAugmentation/hiring/hiring'
import Hiredevelopers from '../component/staffAugmentation/hiredevelopers/hiredevelopers'
import Proven from '../component/staffAugmentation/proven/proven'
import Expert from '../component/staffAugmentation/expert/expert'
import Footer from '../component/footer/footer'

function Staffaugmentation() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='stafBody'>
      <Header flag='header2' />
      <VenzoSA />
      <Hiring />
      <Hiredevelopers />
      <Proven />
      <Expert />
      <Footer />
    </div>
  )
}

export default Staffaugmentation