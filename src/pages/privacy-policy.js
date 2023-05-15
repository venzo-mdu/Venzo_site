import React, { useEffect } from 'react'
import { SEO } from '../component/seo'
import Header from '../component/header/header'
import Privacy from '../component/privacypolicy/privacyVenzo/privacyVenzo'
import Footer from '../component/footer/footer'
// import { useLocation } from 'react-router-dom'

function Privacypolicy() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='blockchainbody'>
      <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/privacy-policy/" />
          </head>
      <SEO title={'Venzo Technologies Privacy Policy'} description={'Venzo Technologies Privacy Policy is incorporated into and forms part of our terms and conditions of use of any website.'}/>
      <Header flag='header2' />
      <Privacy />
      <Footer />
    </div>
  )
}

export default Privacypolicy