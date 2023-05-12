import React,{useEffect} from 'react'
import {SEO} from '../component/seo'
import Header from '../component/header/header'
import Colleagues from '../component/colleagues/colleagues';
import Life from '../component/life/life'
import Perks from '../component/perks/perks'
import Positions from '../component/positions/positions';
import Join from "../component/join/join"
import Frequently from '../component/frequently/frequently'
import Pathway from '../component/pathway/pathway'
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
        <SEO title={'Careers at Venzo Technologies | Join the Venzo team'} description = {'Join the Venzo team and advance your career in the exciting world of software development and technology. '}/>
            <Colleagues />
            <Life />
            <Perks />
            <Positions />
            <Join />
            <Frequently />
            <Pathway />
            <Footer />
        </div>
    );
}

export default Careers