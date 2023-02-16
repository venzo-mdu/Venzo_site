import React,{useEffect} from 'react'
import Reactnativeandionic from '../../component/Blogs/reactnativeandionic'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'

function ReactnativeandionicPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
        <Header flag='header2'/>
        <Reactnativeandionic/>
        <Footer/>
    </div>
  )
}

export default ReactnativeandionicPage