import  React,{useEffect} from "react"
import { Helmet } from "react-helmet"
import Build from '../component/Build/build'
import { SEO } from "../component/seo"
import Customer from "../component/customer/customer"
import Blog from "../component/Blog/blog"
import Idea from "../component/idea/idea"
import Footer from '../component/footer/footer';
import DevServices from "../component/devServices/devServices"
import ImageCarousel from "../component/imageCarousel/imageCarousel";
import OgImage from "../../src/images/venzoog.png"

const IndexPage = () => {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    
    <div>
      {/* <Helmet>
     
     </Helmet> */}
      <head>
      <link rel="canonical" href="https://www.venzotechnologies.com/" />
      <meta property="og:image" content={OgImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:width" content="50" />
      </head>
       
      <SEO title={'Custom Software Development Company - Venzo Technologies'} description={'Venzo offers integrated software solutions for startups, SMEs, and large enterprises. With expertise in Mobile App, Website Development, Cloud, etc.'}/>
      <ImageCarousel />
      <DevServices />
      <Build />
      <Customer />
      <Blog />
      <Idea />
      <Footer />

    </div>

  )
}
export default IndexPage




