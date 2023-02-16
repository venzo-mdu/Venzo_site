import React,{useEffect} from 'react'
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
        <Reactjsuse/>
        <Footer/>

    </div>
  )
}

export default ReactjsusePage