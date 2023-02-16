import React,{useEffect} from 'react'
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