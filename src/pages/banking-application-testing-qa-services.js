import React,{useEffect} from 'react'
import { SEO } from '../component/seo';
import Header from "../component/header/header"
import Improve from '../component/improve/improve.js';
import Services from '../component/services/services.js'
import Tools from '../component/tools/tools.js'
import ApproachQA from '../component/approachQA/approachQA.js'
import Testing from '../component/testing/testing.js'
import Endtoend from '../component/endtoend/endtoend.js'
import Customerexp from '../component/customerexp/customerexp.js';
import Footer from '../component/footer/footer.js'


const BankingQAPage = () => {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='bankbody'>
      <head>
          <link rel="canonical" href="https://www.venzotechnologies.com/banking-application-testing-qa-services/" />
          </head>
      <SEO title={'Banking Application Testing Services providers - Venzo'} description={'At Venzo, we are a trusted provider of banking application testing services for financial institutions.  We use proven methodologies and testing frameworks.'}/>
      <Header flag="header2" />
      <Improve />
      <Services />
      <Tools />
      <ApproachQA />
      <Testing />
      <Endtoend />
      <Customerexp />
      <Footer />
    </div>
  );
}

export default BankingQAPage;