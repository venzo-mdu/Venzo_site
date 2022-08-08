import React from 'react';
import About from "../component/aboutUIUX/aboutUIUX";
import Header from "../component/header/header"
import Whatwedo  from '../component/whatwedo/whatwedo';
import Prototypes from "../component/prototypes/prototypes";
import Fidelity from "../component/fidelity/fidelity";
import Footer from "../component/footer/footer"

const uiuxPage=()=>{
  return(
    <>
          <Header flag="header1"/>
          <Header flag="header2"/>
          <About/>
          <Whatwedo/>
          <Prototypes/>
          <Fidelity/>
          <Footer/>
    </>
  );
}

export default uiuxPage