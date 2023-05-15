import React,{useEffect} from 'react'
import {SEO} from '../component/seo'
import Blogs1 from '../component/Blogs/blogs1'
import Footer from '../component/footer/footer'
function Blogs() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
       <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/" />
          </head>
      <SEO title={'Venzo Technologies Blog - Explore the latest trends, insights.'} description = {'Explore the latest trends, insights, and best practices in software development, technology, and business on the Venzo blog.'}/>
      <Blogs1 />
      <Footer />
    </div>
  )
}

export default Blogs