import React from 'react'

import Header from '../component/header/header'
import BCBanner from '../component/blockchaindevelopment/bcBanner/bcBanner'
import BCNetwork from '../component/blockchaindevelopment/bcNetwork/bcNetwork'
import BCServices from '../component/blockchaindevelopment/bcServices/bcServices'
import BCExecution from '../component/blockchaindevelopment/bcExecution/bcExecution'
import Footer from '../component/footer/footer'



function blockchaindevelopment() {
  return (
      <>
         <Header flag='header2'/>
         <BCBanner/>
         <BCNetwork/>
         <BCServices/>
         {/* <BCExecution/>
         <Footer/> */}
      </>
  )
}

export default blockchaindevelopment