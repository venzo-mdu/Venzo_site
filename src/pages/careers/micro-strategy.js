import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob5/applyJob'
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
          <link rel="canonical" href="https://www.venzotechnologies.com/careers/micro-strategy/" />
          </head>
    <Header flag='header2'/>
    <SEO title={'Job Openings - Micro Strategy '} description = {'Ability to create and manage complex cubes from various sources.'} />
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
    </div>
  )
}

export default CareersPage;