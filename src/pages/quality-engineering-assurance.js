import React,{useEffect} from 'react'
import {SEO} from '../component/seo'
import QualityAssurance from '../component/qualityAssurance/qualityAssurance'

function Qualityassurance() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div>
      <head>
      <link rel="canonical" href="https://www.venzotechnologies.com/quality-engineering-assurance/" />
      </head>
      <SEO title={'Quality Assurance (QA) Services | Software Testing Company|Venzo'} description={'Venzo is a leading Quality Assurance (QA) services and software testing company that provides end-to-end testing solutions for startups, SMEs, and large enterprises. '}/>
      <QualityAssurance />
    </div>

  )
}

export default Qualityassurance