import React,{useEffect} from 'react'
import Staffblog from '../../component/Blogs/staffblog'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
function StaffblogPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
        <Header flag='header2'/>
        <Staffblog />
        <Footer/>
    </div>

  )
}

export default StaffblogPage