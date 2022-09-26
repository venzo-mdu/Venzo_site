import React from 'react'
import Header from '../component/header/header'
import JobDetails from '../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../component/careersPage2/applyJob/applyJob'
import Discussion from '../component/careersPage2/discussion/discussion'
import Footer from '../component/footer/footer'

const careersPage=()=>{
  return (
    <>
    <Header flag='header2'/>
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
    </>
  )
}

export default careersPage;