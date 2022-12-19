import React, {Component, useState} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import blogsList from '../../content/BlogsContent.json'
import { Card } from 'react-bootstrap'
import tweet1 from '../../images/blogsPic/tweet1.png'
import tweet2 from '../../images/blogsPic/tweet2.png'
import { Link, navigate } from 'gatsby'

const BlogsDetail=() =>{
    const [blogsData, setblogsdata] =useState(window ? window.history.state:{})

    console.log(window.history.state)
    return (
       <div>
        
        {console.log(blogsData.data)}
        {console.log(blogsData.data.content1)}

            <Header flag='header1' />
            <Header flag='header2' />
            <div className='blogs_section1'>
                <Link to='/blogs'> <p className='Blogs_title'>Blogs</p></Link>
                <p className='Blogs_desc'>Explore our vast library of fascinating IT technology resources. Subject matter experts create our blogs to help you learn about and understand essential digital innovations.</p>
            </div>
            <div className='blogs_section2'>
                <p className='categories'>All Categories</p>
                <input placeholder='search' className='searchBox'></input>
            </div>
            <hr className='sect2_hr'></hr>
            <div className='blogs_section3'>
                <div className='blogs_cardlist'>
                    {/* {blogsData.data.map((item,index )=> {
                        return ( */}
                            <Card  style={{ width: '23rem' }} className="card12">
                                <Card.Title className='blogsTitile'>{blogsData.data.title1}</Card.Title>
                                <Card.Subtitle className='blogsubtitile'>{blogsData.data.subTitle}</Card.Subtitle>
                                <Card.Img variant="top" src={blogsData.data.images} />
                                <Card.Body>
                                    <p>Introduction</p>
                                    <Card.Text className='blogsdesc'>{blogsData.data.content1}</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* );
                    })
                    } */}
                </div>
                <div className='blogsRight'>
                    <div className='slide1'>
                        <p>All Categories</p> <hr />
                        <p>Automated Testing</p><hr />
                        <p>Mobile App Development</p><hr />
                        <p>Mobile App Development</p><hr />
                        <p>Staff Augmentation</p><hr />
                        <p>Technology</p><hr />
                        <p>Web App Development</p>
                    </div>
                    <div className='slide2'>
                        <p>Tweets</p>
                        <img src={tweet1} />
                        <img src={tweet2} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default BlogsDetail