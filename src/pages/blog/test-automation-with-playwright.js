import React,{useEffect} from 'react'
import Playwrightesting from '../../component/Blogs/playwrighttesting'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'


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
    
    <Playwrightesting/>
    <Footer/>
    </>
    
  )
}

export default Playwright




