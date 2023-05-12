import React,{useEffect} from 'react'
import {SEO} from '../component/seo'
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
            <SEO title={'Website Development Company - Web Design Service In India'} description = {'Venzo is a leading website development company and web design service provider in India. We use the latest web technologies and design trends.'}/>
            <Development />
        </div>
    )
}

export default WebDevelopment

