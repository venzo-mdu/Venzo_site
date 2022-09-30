import React from 'react'
import Header from '../component/header/header'
import Unleashing from '../component/aboutus/unleashing/unleashing'
import Community from '../component/aboutus/community/community'
import Life from '../component/life/life'
import Culture from '../component/aboutus/culture/culture'
import Leadership from '../component/aboutus/leadership/leadership'
import Mobility from '../component/aboutus/mobility/mobility'
import Footer from '../component/footer/footer'

function aboutus() {
  return (
      <>
      <Header flag='header2'/>
      <Unleashing/>
      <Community/>
      <Life/>
      {/* <Culture/> */}
      <Leadership/>
      <Mobility/>
      <Footer/>
      </>
  )

}

export default aboutus