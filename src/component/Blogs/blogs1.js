import React, { useEffect, useState } from 'react'
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
import SearchIcon from '../../images/blogsPic/blogsearchicon.svg'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Blogs1() {
    const data =typeof window !== 'undefined'? window.history.state:''
    console.log(data.data)

    const [search, setSearch] = useState(data.data !== undefined?data.data:'All Categories')
    const [searchInput, setSearchInput] = useState('')

  

    const searchresult = () => {
        if (searchInput.length > 0) {
            return blogsList.filter(obj => obj.subTitle.toLowerCase().includes(searchInput.toLowerCase()))
        }
        if (search.length > 0) {
            return blogsList.filter(obj => obj.subTitle.toLowerCase().includes(search.toLowerCase()))
        }
     
        return blogsList
    }


    
 
    const slideData1 =[
        {
            stateValue:'All Categories',
            value:'All Categories'
        },
        {
            stateValue:'Automated Testing',
            value:'Automated Testing'
        },
        {
            stateValue:'Mobile App Development',
            value:'Mobile App Development'
        },
        {
            stateValue:'Product Development',
            value:'Product Development'
        },
        {
            stateValue:'Staff Augmentation',
            value:'Staff Augmentation'
        },
        {
            stateValue:'Technology',
            value:'Technology'
        },
        {
            stateValue:'Web App Development',
            value:'Web App Development'
        },
    ]
        
            
    


    const Blogdetail = (blog) => {
        console.log("data", blog)


    }

 

    return (
        <div className='blogbody'>
            <Header flag='header2' />
            <div className='blogs_section1'>
                <p className='Blogs_title'>Blogs</p>
                <p className='Blogs_desc'>Explore our vast library of fascinating IT technology resources. Subject matter experts create our blogs to help you learn about and understand essential digital innovations.</p>
            </div>
            <div className='blogs_section2'>
                <input placeholder='search' className='searchBox' onChange={(e) => setSearchInput(e.target.value)}></input>
                <img src={SearchIcon} alt='search' className='searchIcon'></img>
            </div>
            <p id='clickedText'>{search}</p>

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
                        {
                            slideData1.map((blogRoutes,index)=>{
                                return(
                                    <>
                                    <p className='blogText' key={index}  onClick={(e) => setSearch(blogRoutes.stateValue)}>{blogRoutes.value}</p><hr />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='slide2'>
                        <p>Tweets</p>
                       
                             <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="Venzo_Tech"
                                 options={{height:300}}
                                />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs1



