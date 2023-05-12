import React,{useEffect} from 'react'
import {SEO} from '../component/seo'
import ContactUs from '../component/contactUs/contactUs'
function Contactus() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
      <SEO title={'Contact Venzo Technologies | Software Development Company'} description={'We have the expertise and experience to drive your success. Contact us today for a free consultation and lets start building your future together.'}/>
      <ContactUs />
      </div>
  )
}

export default Contactus