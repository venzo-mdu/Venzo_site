import React from 'react'
import Staffblog from '../../component/Blogs/staffblog'
import Footer from '../../component/footer/footer'
import Header from '../../component/header/header'
function staffblog() {
  return (
    <div>
        <Header flag='header2'/>
        <Staffblog />
        <Footer/>
    </div>

  )
}

export default staffblog