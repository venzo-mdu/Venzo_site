import React,{useEffect} from 'react'
import Autotesting from '../../component/Blogs/autotesting'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'

function AutotestingPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div> 
        <Header flag='header2'/>
        <Autotesting/>
        <Footer/>
    </div>
  )
}

export default AutotestingPage