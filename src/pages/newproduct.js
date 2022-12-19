import React from 'react'
import Newproduct from '../component/Blogs/newproduct'
import Footer from '../component/footer/footer'
import Header from '../component/header/header'

function newproduct() {
  return (
   <div> 
        <Header flag='header2'/>
        <Newproduct />
        <Footer/>

   </div>
  )
}

export default newproduct