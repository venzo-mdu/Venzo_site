import React,{useEffect} from 'react'
import Newproduct from '../../component/Blogs/newproduct'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'

function NewproductPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
   <div> 
        <Header flag='header2'/>
        <Newproduct />
        <Footer/>

   </div>
  )
}

export default NewproductPage