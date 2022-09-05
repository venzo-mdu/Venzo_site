import React from 'react'
import Header from '../component/header/header'
import Colleagues from '../component/colleagues/colleagues';
import Life from '../component/life/life'
import Perks from  '../component/perks/perks'
import Positions from '../component/positions/positions';
import Pahtway from '../component/pathway/pathway'
import Footer from '../component/footer/footer'

const careers=()=>{
 return(
     <>
     <Header flag="header2"/>
     <Colleagues/>
     <Life/>
     <Perks/>
     <Positions/>
     <Pahtway/>
     <Footer/>
     </>
 );
}

export default careers