import React, { useEffect } from 'react'
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
      <Header flag='header2' />
      <Privacy />
      <Footer />
    </div>
  )
}

export default Privacypolicy