import React,{useState} from 'react'
import {Link,navigate} from 'gatsby'

import blog3 from '../../images/blogsPic/blog3.png'
import tweet1 from '../../images/blogsPic/tweet1.png'
import tweet2 from '../../images/blogsPic/tweet2.png'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import {slideData1} from './slideData1'

function Topmobile() {
 
    return (
        <div className='productflex'>
            <div className='reactuseLeft'>
                <p className='reactuseTitle'>Top-15 Mobile App Ideas that Will Drive Your Start-Up Ahead</p>
                <p className='reactusesubtitle'> Mobile APP Development   | November 29th, 2021 | Elamparithi</p>
                <img className='reactuseimg' src={blog3} alt="topmobile"/>
                <p className='reactuseIntro'>Introduction</p>
                <p className='reactuseIntroDesc'>A terrific app idea is what drives your start-up business ahead and enables you to spin money. It is an online world out there. Earning profits through business is directly connected with touching as many hearts as possible using the best mobile application. Attractive and useful mobile applications help entrepreneurs to leverage mobile technology to its fullest and reach great heights. Here’s where the need for landing the distinctively unique mobile app idea becomes crucial.</p>
                <p className='reactuseIntro'>Top-Mobile Application Ideas that can Positively Change the Course of Your Start-Up</p>
                <p className='reactuseIntroDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <p className='reactuseIntro'>1. Online education app is the current trend</p>
                <p className='reactuseIntroDesc'>Online education has already been gaining momentum. Now, with the global pandemic and the inevitable need for contactless learning solutions, an online education app is a sure bet to succeed in the current scenario.</p>
                <p className='reactuseIntro'>2. Shopping apps are here to stay</p>
                <p className='reactuseIntroDesc'>Shopping is not only as old as anything in the world, but it is also a basic requirement that needs to be performed safely these days. Be it food, beverages, consumer products, or any other human necessity, an ecommerce app is one of the most sought-after technologies today.</p>
                <p className='reactuseIntro'>3. Social networking app is one of the best bets</p>
                <p className='reactuseIntroDesc'>Customer engagement is the mantra among most modern businesses now. Online presence and reputation building have now become of paramount importance. In this scenario, creating a fabulous social networking app that is capable of connecting people effortlessly is a sound business idea.</p>
                <p className='reactuseIntro'>4. Health tracking (fitness) app</p>
                <p className='reactuseIntroDesc'>Keeping fit and managing health is very close to the heart of most of the modern population. An exclusive health tracker—in the form of a mobile app—that enables users to monitor and check their health through multiple features will gain great popularity.</p>
                <p className='reactuseIntro'>5. An app for homemade medical remedies</p>
                <p className='reactuseIntroDesc'>Not just granny’s home remedies anymore. Homemade medical remedies have become an unbeatable trend among the modern generation. Approach a reliable mobile app development company and create your unique homemade medical remedies app.</p>
                <p className='reactuseIntro'>6. Food delivery app</p>
                <p className='reactuseIntroDesc'>Get an exclusive online food order app that facilitates delivery at doorsteps. Considered one of the best app ideas for 2021, food ordering app can be custom-built according to users’ specific needs.</p>
                <p className='reactuseIntro'>7. Mobile language tutor</p>
                <p className='reactuseIntroDesc'>Learning a new language—be it a foreign language or an Indian language, acquiring a new skill in the language domain through a mobile app is a concept that youngsters would love.</p>
                <p className='reactuseIntro'>8. Personal cooking assistant app</p>
                <p className='reactuseIntroDesc'>Cooking is not a drudgery anymore. With the young generation taking cooking and eating as not a routine task but as something they relish, a cooking assistant app would take you places.</p>
                <p className='reactuseIntro'>9. Restaurant booking app</p>
                <p className='reactuseIntroDesc'>The concept of eating out has been gathering importance globally since the last few decades. Serving a dietary as well as business purpose, eating out has several benefits that may be tapped through a robust reservation app. Your mobile app development company can handle it the way you want.</p>
                <p className='reactuseIntro'>10. An app for buying and selling stuff</p>
                <p className='reactuseIntroDesc'>In addition to helping people to interact effortlessly and joyfully, mobile apps can enable them to get connected for selling, buying, or renting stuff online.</p>
                <p className='reactuseIntro'>11. Home workout specialist</p>
                <p className='reactuseIntroDesc'>Workout and physical fitness are among the main courses of young as well as elderly people’s palate. Especially after the pandemic hit the world in unprecedented ways, home workouts have been scaling newer heights. Craft your own home workout app through the best mobile app development company in town.</p>
                <p className='reactuseIntro'>12. The book lending app for book lovers</p>
                <p className='reactuseIntroDesc'>Avid readers have always been looking for comfortable ways to read, store, and cherish the books of their taste. A book lending app helps them to lend or exchange books.</p>
                <p className='reactuseIntro'>13. Dating apps are a part of life</p>
                <p className='reactuseIntroDesc'>Enabling one to find their soul mate safely and effortlessly, dating apps help people to identify and befriend like-minded persons.</p>
                <p className='reactuseIntro'>14. An app exclusively for smartphone deaddiction</p>
                <p className='reactuseIntroDesc'>Sounds a bit contradictory, right? But then we are living in a world filled with geeks who spend too much time on their mobile devices. To avoid excessive dilly-dallying on mobiles, an anti-smartphone addiction app would come in handy.</p>
                <p className='reactuseIntro'>15. Meditation app</p>
                <p className='reactuseIntroDesc'>An original app idea that will help not only business purposes but also the promotion of mental health of people, meditation apps are a boon for those who seek inner peace. Now, are we not all searching for that?</p>
                <p className='reactuseIntro'>Conclusion</p>
                <p className='reactuseIntroDesc'>As we have seen in several modern global businesses, the success of a modern start-up relies largely on a unique idea. It is the innovative, useful mobile app idea that can resolve people’s needs while attracting the masses that propels your business ahead of the competition today.</p>
            </div>
            <div className='blogsRight blogsRight1'>
            <div className='slide1'>
            {
                        slideData1.map((obj,index)=>{
                            return(
                                <>
                              <Link to={obj.routeValue} key={index} state={{data:obj.stateValue}}> <p className='blogText'>{obj.value}</p> </Link><hr />
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
                                options={{height: 300}}
                                />
                </div>
            </div>
        </div>
    )
}

export default Topmobile