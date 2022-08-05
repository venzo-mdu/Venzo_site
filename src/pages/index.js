import * as React from "react"
import Build from '../component/Build/build'
import Innovate from "../component/Innovate/innovate"
import Grow from '../component/Grow/grow'
import Customer from "../component/customer/customer"
import Blog from "../component/Blog/blog"
import Idea from "../component/idea/idea"
import Footer from '../component/footer/footer';
import DevServices from "../component/devServices/devServices"
import ImageCarousel from "../component/imageCarousel/imageCarousel";

const IndexPage = () => {
  return (
    <div>
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

