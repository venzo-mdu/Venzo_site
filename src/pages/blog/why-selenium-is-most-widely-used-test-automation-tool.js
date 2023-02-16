import React,{useEffect} from 'react'
import Selenium from '../../component/Blogs/selenium'
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
        <Header flag='header2'/>
        <Selenium/>
        <Footer/>
    </div>
  )
}

export default SeleniumPage