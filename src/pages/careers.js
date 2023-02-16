import React,{useEffect} from 'react'
import Header from '../component/header/header'
import Colleagues from '../component/colleagues/colleagues';
import Life from '../component/life/life'
import Perks from '../component/perks/perks'
import Positions from '../component/positions/positions';
import Join from "../component/join/join"
import Frequently from '../component/frequently/frequently'
import Pahtway from '../component/pathway/pathway'
import Footer from '../component/footer/footer'

const Careers = () => {
    useEffect(()=>{
        document.documentElement.scrollTo({
          top: 0,
          left: 0
        })
      },[])
    return (
        <div className='blockchainbody'>
        <Header flag="header2" />
            <Colleagues />
            <Life />
            <Perks />
            <Positions />
            <Join />
            <Frequently />
            <Pahtway />
            <Footer />
        </div>
    );
}

export default Careers