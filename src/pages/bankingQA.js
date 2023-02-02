import React from 'react'
import Header from "../component/header/header"
import Improve from '../component/improve/improve.js';
import Services from '../component/services/services.js'
import Tools from '../component/tools/tools.js'
import ApproachQA from '../component/approachQA/approachQA.js'
import Testing from '../component/testing/testing.js'
import Endtoend from '../component/endtoend/endtoend.js'
import Customerexp from '../component/customerexp/customerexp.js';
import Footer from '../component/footer/footer.js'


const bankingQAPage=()=>{
    return(
      <div className='bankbody'>
          <title>Venzo Technologies</title>
          <Header flag="header1"/>
          <Header flag="header2"/>
          <Improve/>
          <Services/>
          <Tools/>
          <ApproachQA/>
          <Testing/>
          <Endtoend/>
          <Customerexp/>
          <Footer/>
        </div>
    );
}

export default bankingQAPage;