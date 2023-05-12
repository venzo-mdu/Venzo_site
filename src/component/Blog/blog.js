import React, { useState } from 'react'
// import arrow from '../../images/Read more arrow-gradient.svg'
import './blog.css'
import blogContent from '../../content/CustomerContent.json'
import { Link } from 'gatsby';


function Blog() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (

    <div>
      {blogContent.blog.map((item,index) => {
        return <div className=' container2' key={index}>
          <div className='Blogs'>
            <h2 className='blurTitle'> {item.title1}</h2>
            <p className='bloghead' > {item.decs1} <br /> <span className='date'>{item.date1}</span>   </p> <Link to='/blogs/newproduct'><img className='arrows' src={item.arrow} alt='arrows' /> </Link>
            <hr className='blogHr' /><p className='bloghead'> {item.decs2} <br /> <span className='date'>{item.date1}</span>  </p><Link to='/blogs/reactnativeandionic'><img className='arrows' src={item.arrow} alt='arrows' /> </Link>
            <hr className='blogHr' /><p className='bloghead'> {item.decs3} <br /> <span className='date'>{item.date1}</span>  </p><Link to='/blogs/selenium'><img className='arrows' src={item.arrow} alt='arrows' /> </Link>
          </div>
          <div className='Careers'>
            <h2 className='blurTitle1'> {item.title2}</h2>
            <div className='box'>
              <h2 className='careershead'> {item.subTitle}</h2>
              <p className='careersdec'> {item.careersDecs} <br />{item.careersDecs1}</p>
              <Link to='/careers'><p className='btn jobs'> {item.job}</p></Link>
            </div>
          </div>
        </div>
      })}
   
    </div>
  )
}

export default Blog;

