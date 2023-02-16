import React,{useEffect} from 'react'
import Topmobile from '../../component/Blogs/topmobile'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
function TopmobilePage() {
    useEffect(()=>{
        document.documentElement.scrollTo({
          top: 0,
          left: 0
        })
      },[])
    return (
        <div>
            <Header flag='header2' />
            <Topmobile />
            <Footer />
        </div>
    )

}

export default TopmobilePage