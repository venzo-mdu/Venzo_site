import React,{useEffect} from 'react'
import {SEO} from "../../component/seo"
import Newproduct from '../../component/Blogs/newproduct'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'

function NewproductPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
   <div> 
        <Header flag='header2'/>
        <SEO title={'New Product Development; Winner’s Guide'} description={'Discover the key strategies and best practices for successful new product development. Read More the blog'}/>
        <Newproduct />
        <Footer/>

   </div>
  )
}

export default NewproductPage