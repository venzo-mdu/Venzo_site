import React,{useEffect} from 'react'
import {SEO} from "../../component/seo"
import Staffblog from '../../component/Blogs/staffblog'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
function StaffblogPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
        <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/significant-benefits-and-why-your-company-requires-it-staff-augmentation-services/" />
          </head>
        <Header flag='header2'/>
        <SEO title={'IT Staff Augmentation Services: A Must-Have for Modern Companies'} description={'Discover the significant benefits of IT staff augmentation services for your company with Venzo Technologies expert insights.'} />
        <Staffblog />
        <Footer/>
    </div>

  )
}

export default StaffblogPage