import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob2/applyJob'
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
          <link rel="canonical" href="https://www.venzotechnologies.com/careers/react-developers/" />
          </head>
    <Header flag='header2'/>
    <SEO title={'Job Openings - React Developers'} description ={'At Least 4 years of IT experience in Javascript / UI frameworks.'}/>
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
   </div>
  )
}

export default CareersPage;