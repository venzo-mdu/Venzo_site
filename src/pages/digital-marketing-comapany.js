import React,{useEffect} from 'react'
import DM_Page from '../component/DmPage/DM_Page'
function Dm_page() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='blockchainbody'>
      <title>Venzo Technologies</title>
      <DM_Page />
    </div>
  )
}

export default Dm_page

