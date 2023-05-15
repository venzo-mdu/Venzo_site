import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob8/applyJob'
import Discussion from '../../component/careersPage2/discussion/discussion'
import Footer from '../../component/footer/footer'
import {SEO} from "../../component/seo"

function Digitalmarketingexecutive() {
  return (
    <div className='blockchainbody'>
          <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/careers/digital-marketing-executive/" />
          </head>
    <Header flag='header2'/>
    <SEO title={'Job Openings - Digital Marketing Executive'} description ={'Minimum 2 to 3 years real-timeexperiencein an IT company '} />
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
    </div>
  )
}

export default Digitalmarketingexecutive