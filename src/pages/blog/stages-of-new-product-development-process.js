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
          <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/stages-of-new-product-development-process/" />
          </head>
        <Header flag='header2'/>
        <SEO title={'New Product Development; Winner’s Guide'} description={'Discover the key strategies and best practices for successful new product development. Read More the blog'}/>
        <Newproduct />
        <Footer/>

   </div>
  )
}

export default NewproductPage