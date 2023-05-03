import React,{useEffect} from 'react'
import Playwrightesting from '../../component/Blogs/playwrighttesting'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
import { SEO } from '../../component/seo'

const Playwright = () => {
    useEffect(()=>{
        document.documentElement.scrollTo({
          top: 0,
          left: 0
        })
      },[])
  return (
    <>
    <Header flag='header2'/>
    <SEO title={'End to End Test Automation Testing with PLAYWRIGHT | Venzo Blog'} description={'Unlocking the Benefits of Playwright & it is a powerful open-source tool for browser automation that offers the following capabilities:Read More'}/>
    <Playwrightesting/>
    <Footer/>
    </>
    
  )
}

export default Playwright




