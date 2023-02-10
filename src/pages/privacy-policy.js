import React from 'react'
import Header from '../component/header/header'
import Privacy from '../component/privacypolicy/privacyVenzo/privacyVenzo'
import Footer from '../component/footer/footer'

function privacypolicy() {
  return (
    <div className='blockchainbody'>
      <Header flag='header2' />
      <Privacy />
      <Footer />
    </div>
  )
}

export default privacypolicy