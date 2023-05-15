import React from 'react'
import Angularvsreact from '../../component/Blogs/angularvsreact'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import {SEO} from "../../component/seo"

function AngularvsreactPage() {
  return (
    <div>
          <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/blog/angular-js-vs-react-js/" />
          </head>
        <Header flag='header2'/>
        <SEO title={'Angular JS vs React Js 2023: Which is Better for You?'} description={'Discover the benefits and limitations of AngularJS and ReactJS and learn how to choose the right one for your web application development needs.'}/>
        <Angularvsreact/>
        <Footer/>
    </div>
  )
}

export default AngularvsreactPage