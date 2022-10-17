import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import blogsList from '../../content/BlogsContent.json'
import { Card } from 'react-bootstrap'
import tweet1 from '../../images/blogsPic/tweet1.png'
import tweet2 from '../../images/blogsPic/tweet2.png'
function BlogsDetail() {
  return (
    <div>
            <Header flag='header1' />
            <Header flag='header2' />
            <div className='blogs_section1'>
                <p className='Blogs_title'>Blogs</p>
                <p className='Blogs_desc'>Explore our vast library of fascinating IT technology resources. Subject matter experts create our blogs to help you learn about and understand essential digital innovations.</p>
            </div>
            <div className='blogs_section2'>
                <p className='categories'>All Categories</p>
                <input placeholder='search' className='searchBox'></input>
            </div>
            <hr className='sect2_hr'></hr>
            <div className='blogs_section3'>
                <div className='blogs_cardlist'>
                    {blogsList.map(item => {
                        return (
                            <Card style={{ width: '23rem' }} className="card12">
                                <Card.Title className='blogsTitile'>{item.title1}</Card.Title>
                                <Card.Subtitle className='blogsubtitile'>{item.subTitle}</Card.Subtitle>
                                <Card.Img variant="top" src={item.images} />
                                <Card.Body>
                                    <p>Introduction</p>
                                    <Card.Text className='blogsdesc'>{item.content2}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })
                    }
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