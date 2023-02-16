import React,{useEffect} from 'react'
import Blogs1 from '../component/Blogs/blogs1'
import Footer from '../component/footer/footer'
function Blogs() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
      <Blogs1 />
      <Footer />
    </div>
  )
}

export default Blogs