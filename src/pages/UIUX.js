import React from 'react';
import About from "../component/aboutUIUX/aboutUIUX";
import Header from "../component/header/header"
import Whatwedo  from '../component/whatwedo/whatwedo';
import Prototypes from "../component/prototypes/prototypes";

const uiuxPage=()=>{
  return(
    <>
          <Header flag="header1"/>
          <Header flag="header2"/>
          <About/>
          <Whatwedo/>
          <Prototypes/>
    </>
  );
}

export default uiuxPage