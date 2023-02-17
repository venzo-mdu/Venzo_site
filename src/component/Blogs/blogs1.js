import React, { useState } from 'react'
import Header from '../header/header'
import blogsList from '../../content/BlogsContent.json'
import { Card } from 'react-bootstrap'
import tweet1 from '../../images/blogsPic/tweet1.png'
import tweet2 from '../../images/blogsPic/tweet2.png'
import { Link } from 'gatsby'
import './blogs.css'
import './laptop.css'
import './tab.css'
import './mobile.css'

function Blogs1() {

    const [search, setSearch] = useState('')

    const searchresult = () => {
        if (search.length > 0) {
            return blogsList.filter(obj => obj.subTitle.toLowerCase().includes(search.toLowerCase()))
        }
        return blogsList
    }
   



    const Blogdetail = (blog) => {
        console.log("data", blog)
        // navigate('/blog/${blog}')
        // navigate(blog)

    }

    //  const Blogdetail = ({ actions }) => {
    //     const { createPage } = actions;
    //     createPage({
    //       path: '/projects/hello-world',
    //       component: SingleProject,
    //       context: {
    //         id: 'hello-world',
    //       },
    //     });
    //   };

    return (
        <div className='blogbody'>
            <Header flag='header2' />
            <div className='blogs_section1'>
                <p className='Blogs_title'>Blogs</p>
                <p className='Blogs_desc'>Explore our vast library of fascinating IT technology resources. Subject matter experts create our blogs to help you learn about and understand essential digital innovations.</p>
            </div>
            <div className='blogs_section2'>
                <p className='categories'></p>
                <input placeholder='search' className='searchBox' onChange={(e) => setSearch(e.target.value)}></input>
            </div>
            <hr className='sect2_hr'></hr>
            <div className='blogs_section3'>
                <div className='blogs_cardlist'>
                    {searchresult().map((item, index) => {
                        return <Link href={item.route}>
                            <Card key={index} style={{ width: '23rem' }} className="card11" onClick={() => Blogdetail(item.route)}>
                                <Card.Img variant="top" src={item.images} />
                                <Card.Body>
                                    <Card.Subtitle className='blogsubtitile'> {item.subTitle}  </Card.Subtitle>
                                    <Card.Title className='blogsTitile' >{item.title1}</Card.Title>
                                    <Card.Text className='blogsdesc'>{item.content1}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    })}
                </div>
                <div className='blogsRight'>
                    <div className='slide1'>
                        <p onClick={(e) => setSearch('')}>All Categories</p> <hr />
                        <p onClick={(e) => setSearch('Automated Testing')}>Automated Testing</p><hr />
                        <p onClick={(e) => setSearch('Mobile App Development')}>Mobile App Development</p><hr />
                        <p onClick={(e) => setSearch('Product Development')}>Product Development</p><hr />
                        <p onClick={(e) => setSearch('Staff Augmentation')}>Staff Augmentation</p><hr />
                        <p onClick={(e) => setSearch('Technology')}>Technology</p><hr />
                        <p onClick={(e) => setSearch('Web App Development')}>Web App Development</p>
                    </div>
                    <div className='slide2'>
                        <p>Tweets</p>
                        <img src={tweet1} alt="tweet1" />
                        <img src={tweet2} alt="tweet2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs1



