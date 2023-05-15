import React,{useEffect} from 'react'
import Selenium from '../../component/Blogs/selenium'
import {SEO} from "../../component/seo"
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'

function SeleniumPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
      <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/why-selenium-is-most-widely-used-test-automation-tool/" />
          </head>
        <Header flag='header2'/>
        <SEO title={'Selenium Automation Testing: Step by Step Guide for 2023'} description = {'Learn everything you need to know about Selenium testing, the most popular test automation tool. A Superlative Guide To Selenium Testing'}/>
        <Selenium/>
        <Footer/>
    </div>
  )
}

export default SeleniumPage