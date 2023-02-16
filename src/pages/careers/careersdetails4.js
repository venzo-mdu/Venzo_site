import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob4/applyJob'
import Discussion from '../../component/careersPage2/discussion/discussion'
import Footer from '../../component/footer/footer'

const CareersPage=()=>{
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
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

export default CareersPage;