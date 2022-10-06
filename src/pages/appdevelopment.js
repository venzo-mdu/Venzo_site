import React from 'react'

import Header from '../component/header/header'
import Customized from  '../component/appdevelopment/customized/customized'
import Cando from '../component/appdevelopment/cando/cando'
import Agile from '../component/appdevelopment/agile/agile'
import Dprocess from '../component/appdevelopment/dprocess/dprocess'
import Offering from '../component/appdevelopment/offering/offering'
import Techs from '../component/appdevelopment/techs/techs'
import Footer from '../component/footer/footer'
function appdevelopment() {
  return (
      <>
      <Header flag='header2'/>
      <Customized/>
      <Cando/>
      <Agile/>
      {/* <Dprocess/>
      <Offering/>
      <Techs/> */}
      {/* <Footer/> */}
      </>
  )
}

export default appdevelopment