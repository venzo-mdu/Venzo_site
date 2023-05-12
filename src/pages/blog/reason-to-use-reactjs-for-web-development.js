import React,{useEffect} from 'react'
import {SEO} from "../../component/seo"
import Reactjsuse from '../../component/Blogs/reactjsUse'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'

function ReactjsusePage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
        <Header flag='header2'/>
        <SEO title={'Why You Should Use React.js For Web Development'} description ={'ReactJS Framework Working Wonders For Modern Web Development Businesses. Read blog here'}/>
        <Reactjsuse/>
        <Footer/>

    </div>
  )
}

export default ReactjsusePage