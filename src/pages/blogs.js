import React from 'react'
import Blogs1 from '../component/Blogs/blogs1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../component/footer/footer'
function Blogs() {
  return (
    <div>
      {/* <Router basepath='/blogs'>
        <Routes>
          <Route path='newproduct' component={`../pages/blogs/newproduct`} />
          <Route path='autotesting' component={`../pages/blogs/autotesting`} />
          <Route path='reactjsuse' component={`../pages/blogs/reactjsuse`} />
          <Route path='selenium' component={`../pages/blogs/selenium`} />
          <Route path='reactnativeandionic' component={`../pages/blogs/reactnativeandionic`} />
          <Route path='staffblog' component={`../pages/blogs/staffblog`} />
          <Route path='topmobile' component={`../pages/blogs/topmobile`} />
          <Route path='angularvsreact' component={`../pages/blogs/angularvsreact`} />

        </Routes>
      </Router> */}
      <Blogs1 />
      <Footer />
    </div>
  )
}

export default Blogs