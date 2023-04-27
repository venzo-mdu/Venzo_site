import React,{useEffect} from 'react';
import About from "../component/aboutUIUX/aboutUIUX";
import Header from "../component/header/header"
import Whatwedo from '../component/whatwedo/whatwedo';
import Approach from '../component/approach/approach'
import Prototypes from "../component/prototypes/prototypes";
import Fidelity from "../component/fidelity/fidelity";
import Footer from "../component/footer/footer"

const UiuxPage = () => {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='uiuxBody'>
      <title>Venzo Technologies</title>
      <Header flag="header2" />
      <About />
      <Whatwedo />
      <Approach />
      <Prototypes />
      <Fidelity />
      <Footer />
    </div>
  );
}

export default UiuxPage