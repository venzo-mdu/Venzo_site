import React,{useEffect} from 'react'
import { SEO } from '../component/seo'
import Header from '../component/header/header'
import Unleashing from '../component/aboutus/unleashing/unleashing'
import Community from '../component/aboutus/community/community'
import Life from '../component/life/life'
import Culture from '../component/aboutus/culture/culture'
import Leadership from '../component/aboutus/leadership/leadership'
import Mobility from '../component/aboutus/mobility/mobility'
import Footer from '../component/footer/footer'

function Aboutus() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='blockchainbody'>
       <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/about-us/" />
          </head>
      <SEO title={'About Venzo Technologies'} description = {'Venzo Technologies mission is to help businesses leverage the power of technology to drive their growth and success'}/>
      <Header flag='header2' />
      <Unleashing />
      <Community />
      <Life />
      <Culture />
      <Leadership />
      <Mobility />
      <Footer />
    </div>
  )

}

export default Aboutus