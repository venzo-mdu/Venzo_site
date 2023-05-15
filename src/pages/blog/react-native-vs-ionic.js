import React,{useEffect} from 'react'
import {SEO} from "../../component/seo"
import Reactnativeandionic from '../../component/Blogs/reactnativeandionic'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'

function ReactnativeandionicPage() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
       <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/react-native-vs-ionic/" />
          </head>
        <Header flag='header2'/>
        <SEO title={'React Native vs Ionic: Which Framework is best and Why?'} description = {'Discover the pros and cons of React Native and Ionic, the two leading cross-platform app development frameworks, with Venzo Technologies expert analysis.'} />
        <Reactnativeandionic/>
        <Footer/>
    </div>
  )
}

export default ReactnativeandionicPage