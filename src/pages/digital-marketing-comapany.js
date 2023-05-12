import React,{useEffect} from 'react'
import DM_Page from '../component/DmPage/DM_Page'
import {SEO} from "../component/seo"
function Dm_page() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='blockchainbody'>
      <SEO title={'Digital marketing company in Chennai, India | Venzo'} description = {'From SEO, PPC,SEM to social media & content marketing, we use the unique strategy and techniques to drive traffic, generate leads, and boost your online presence'}/>
      <DM_Page />
    </div>
  )
}

export default Dm_page

