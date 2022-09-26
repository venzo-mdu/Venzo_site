import React from 'react'
import Header from '../component/header/header'
import VenzoSA from '../component/staffAugmentation/venzostaff/venzostaff'
import Expert from '../component/staffAugmentation/expert/expert'
import Footer from '../component/footer/footer'

function staffaugmentation() {
  return (
    <>
    <Header flag='header2'/>
    <VenzoSA/>
    <Expert/>
    <Footer/>
    </>
  )
}

export default staffaugmentation