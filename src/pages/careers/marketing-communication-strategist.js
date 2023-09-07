import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob11/applyJob'
import Discussion from '../../component/careersPage2/discussion/discussion'
import Footer from '../../component/footer/footer'
import {SEO} from "../../component/seo"

const CareersPage=()=>{
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='blockchainbody'>
          <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/careers/sr-javadevelopers/" />
          </head>
    <Header flag='header2'/>
    <SEO title={'Job Openings - Marketing and Communication Startegist'} description = {' 1 to 3 years of experience in marketing communication & Social media strategies.'}/>
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
    </div>
  )
}

export default CareersPage;