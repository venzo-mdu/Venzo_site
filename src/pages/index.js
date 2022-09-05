import * as React from "react"
import Build from '../component/Build/build'
import {Link } from "gatsby";

import Customer from "../component/customer/customer"
import Blog from "../component/Blog/blog"
import Idea from "../component/idea/idea"
import Footer from '../component/footer/footer';
import DevServices from "../component/devServices/devServices"
import ImageCarousel from "../component/imageCarousel/imageCarousel";
import UIUXPage from "../pages/UIUX"
import bankingQAPage from "./bankingQA";
import careers from "./careers";

const IndexPage = () => {
  return (
    <div>
      <title>Venzo Technologies</title>

      <ImageCarousel />
      <DevServices />
      <Build />
      {/* <hr className="hr_line"/>
      <Innovate />
      <hr className="hr_line"/>
      <Grow /> */}
      <Customer />
      <Blog />
      <Idea />
      <Footer />
      <Link to="/UIUX"></Link>
      <Link to="/banking-QAPage"></Link>
      <Link to="/careers"></Link>
    </div>
   
  )
}
export default IndexPage

