import React,{useEffect} from 'react'
import Header from '../../component/header/header'
import JobDetails from '../../component/careersPage2/jobDetails/jobDetails'
import ApplyJob from '../../component/careersPage2/applyJob7/applyJob'
import Discussion from '../../component/careersPage2/discussion/discussion'
import Footer from '../../component/footer/footer'
import {SEO} from "../../component/seo"

function Projectaccountmanager() {
    useEffect(()=>{
        document.documentElement.scrollTo({
          top: 0,
          left: 0
        })
      },[])
  return (
    <div className='blockchainbody'>
    <Header flag='header2'/>
    <SEO title={'Job Openings - Project & Account Manager'} description ={'A  minimum  of 3years  of  experience  in  managing  multiple  projects  either  in  aWebsite development or Design agency or similar environment (Domestic & International clients)..'} />
    <JobDetails/>
    <ApplyJob/>
    <Discussion/>
    <Footer/>
    </div>
  )
}

export default Projectaccountmanager