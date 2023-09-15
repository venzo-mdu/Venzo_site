import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob9/applyJob'
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
    <SEO title={'Job Openings - Web Developer'} description ={'At Least 2 -3  years of IT experience in Web Developement with wordpress & PHP knowledge.'}/>
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
   </div>
  )
}

export default CareersPage;