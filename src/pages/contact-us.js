import React,{useEffect} from 'react'
import ContactUs from '../component/contactUs/contactUs'
function Contactus() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div><ContactUs /></div>
  )
}

export default Contactus