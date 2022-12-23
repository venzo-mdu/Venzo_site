import React from 'react'
import Blogs1 from '../component/Blogs/blogs1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from '../component/footer/footer'
import Newproduct from '../pages/newproduct'
function Blogs() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/blogs/newproduct' component={<Newproduct />} />

        </Routes>
      </Router>
      <Blogs1 />
      <Footer />
    </div>
  )
}

export default Blogs