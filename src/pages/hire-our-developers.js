import React,{useEffect} from 'react'
import {SEO} from '../component/seo'
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
       <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/hire-our-developers/" />
          </head>
      <Header flag='header2' />
      <SEO title={'IT Staff Augmentation Company- Technical Staffing Agency'} description={'Venzo is a leading IT staff augmentation company that provides skilled and experienced IT professionals for short-term and long-term assignments.'}/>
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