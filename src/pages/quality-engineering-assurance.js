import React,{useEffect} from 'react'
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
      <QualityAssurance />
    </div>

  )
}

export default Qualityassurance