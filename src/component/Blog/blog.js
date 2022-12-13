import React from 'react'
// import arrow from '../../images/Read more arrow-gradient.svg'
import './blog.css'
import blogContent from '../../content/CustomerContent.json'


function Blog() {
  return (
    // <div className=' container2'>
    //     <div className='Blogs'>
    //       <h2 className='blurTitle'> Our Latest Blogs</h2>
    //         <p className='bloghead'> New Product Development; Winner's Guild <br/> <span className='date'>May04,2022</span>   </p><img className='arrows' src={arrow} alt ='arrows'/> 
    //         <hr className='blogHr'/><p className='bloghead'> How To Choose Betwen React Native And Ionic For Your App <br/> <span className='date'>May04,2022</span>  </p><img className='arrows2' src={arrow} alt ='arrows'/> 
    //         <hr className='blogHr'/><p className='bloghead'> Selenium the Most Popular Test Automation Tool <br/> <span className='date'>May04,2022</span>  </p><img className='arrows2' src={arrow} alt ='arrows'/> 
    //     </div>
    //     <div className='Careers'>
    //       <h2 className='blurTitle1'> Careers</h2>
    //       <div className='box'>
    //       <h2 className='careershead'> Want to be a Venzoian?</h2>
    //       <p className='careersdec'> Interested in working with us? <br/>Explore career oppourtunities below.</p>
    //       <p className='btn jobs'> View Jobs</p>
    //       </div>

    //     </div> 
    // </div>
    <div>
          {blogContent.blog.map((item) => {
 return <div className=' container2'>
        <div className='Blogs'>
           <h2 className='blurTitle'> {item.title1}</h2>
             <p className='bloghead'> {item.decs1} <br/> <span className='date'>{item.date1}</span>   </p><img className='arrows' src={item.arrow} alt ='arrows'/> 
             <hr className='blogHr'/><p className='bloghead'> {item.decs2} <br/> <span className='date'>{item.date1}</span>  </p><img className='arrows' src={item.arrow} alt ='arrows'/> 
            <hr className='blogHr'/><p className='bloghead'> {item.decs3} <br/> <span className='date'>{item.date1}</span>  </p><img className='arrows' src={item.arrow} alt ='arrows'/> 
        </div>
        <div className='Careers'>
          <h2 className='blurTitle1'> {item.title2}</h2>
          <div className='box'>
            <h2 className='careershead'> {item.subTitle}</h2>
            <p className='careersdec'> {item.careersDecs} <br/>{item.careersDecs1}</p>
            <p className='btn jobs'> {item.job}</p>
          </div>
        </div> 
   </div>
          })}
    </div>
  )
}

export default Blog;

