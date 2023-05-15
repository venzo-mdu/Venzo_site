import React,{useEffect} from 'react';
import About from "../component/aboutUIUX/aboutUIUX";
import Header from "../component/header/header"
import Whatwedo from '../component/whatwedo/whatwedo';
import Approach from '../component/approach/approach'
import Prototypes from "../component/prototypes/prototypes";
import Fidelity from "../component/fidelity/fidelity";
import Footer from "../component/footer/footer"
import {SEO} from "../component/seo"
const UiuxPage = () => {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='uiuxBody'>
      <head>
      <link rel="canonical" href="https://www.venzotechnologies.com/ui-ux-design-company/" />
      </head>
      <SEO title={'UI UX Company in India | Best UX / UI Resources in chennai'} description = {'Venzo provide end-to-end UX/UI services & solutions that enhance your brand, improve user satisfaction, and increase conversions. Best UI, UX Company'} />
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