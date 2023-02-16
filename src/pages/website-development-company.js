import React,{useEffect} from 'react'
import Development from '../component/web_development/development'
function WebDevelopment() {
    useEffect(()=>{
        document.documentElement.scrollTo({
          top: 0,
          left: 0
        })
      },[])
    return (
        <div>
            <Development />
        </div>
    )
}

export default WebDevelopment

