import React,{useEffect} from 'react'
import { SEO } from '../../component/seo'
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
            <SEO title={'Top-15 Mobile App Ideas that Will Drive Your Start-Up Ahead | Blog'} description={'Get inspired with Venzo Technologies curated list of the top 15 mobile app ideas that can drive your start-up ahead. '}/>
            <Topmobile />
            <Footer />
        </div>
    )

}

export default TopmobilePage