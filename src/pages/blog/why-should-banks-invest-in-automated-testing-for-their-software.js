import React,{useEffect} from 'react'
import Autotesting from '../../component/Blogs/autotesting'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import {SEO} from "../../component/seo"

function AutotestingPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div> 
       <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/why-should-banks-invest-in-automated-testing-for-their-software/" />
          </head>
        <Header flag='header2'/>
        <SEO title={'Why Financial Companies Should Embrace Automated Testing'} description ={'Why should banks invest in automated testing for their software? with Venzo Technologies expert insights.'}/>
        <Autotesting/>
        <Footer/>
    </div>
  )
}

export default AutotestingPage