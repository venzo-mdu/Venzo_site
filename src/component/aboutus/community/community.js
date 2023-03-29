import React from 'react'
import '../community/community.css'

import TickIcon from '../../../images/aboutus/aboutus17.png'
// import CommunityImage1 from '../../../images/aboutus/aboutus3.png'
// import CommunityImage2 from '../../../images/aboutus/aboutus7.png'
import CommunityImage1 from '../../../images/allpageabanner/about_us/Rahul/Rahul_1x.webp'
import CommunityImage2 from '../../../images/allpageabanner/about_us/soundarya/soundarya_1x.webp'


function community() {
    return (
        <>
            <div className='community'>
                <div className='communityLeft'>
                    <p id='communityLeftText'>Venzo’s DNA </p>
                    <div className='betterment'>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Highly- Collaborative </p>
                        </div>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Positive attitude </p>
                        </div>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Grow-Mindset </p>
                        </div>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Strong problem-solving abilities</p>
                        </div>
                    </div>
                    <p id='belowLeftText'>Venzo Technologies leverages the power of cognitive computing, hyper-automation, cloud, analytics, and emerging technologies to assist our clients in adapting to and succeeding in the digital world.</p>
                </div>
                <div className='communityRight'>
                    <img className='communityImage' src={CommunityImage1} alt='community'></img>
                    <img className='communityImage' src={CommunityImage2} alt='community'></img>
                </div>
            </div>
        </>
    )
}
// import comunity from '../../../content/communityData.json'
// function community() {
//     return (

//         <>
//         <div>
//             {comunity.map((item) => 
//             { return <div className='community'>
//                 <div className='communityLeft'>
//                     <p id='communityLeftText'>{item.communityTitle}</p>
//                     <div className='betterment'>
//                         <div className='betterCommunity'>
//                             <div>
//                                 <img className='betterImage' src={TickIcon} alt='tick'></img>
//                             </div>
//                             <p id='betterText'>Work Life Balance</p>
//                         </div>
//                         <div className='betterCommunity'>
//                             <div>
//                                 <img className='betterImage' src={TickIcon} alt='tick'></img>
//                             </div>
//                             <p id='betterText'>Flat Heirarchy</p>
//                         </div>
//                         <div className='betterCommunity'>
//                             <div>
//                                 <img className='betterImage' src={TickIcon} alt='tick'></img>
//                             </div>
//                             <p id='betterText'>A Friendly Culture</p>
//                         </div>
//                         <div className='betterCommunity'>
//                             <div>
//                                 <img className='betterImage' src={TickIcon} alt='tick'></img>
//                             </div>
//                             <p id='betterText'>Satisfied Salary</p>
//                         </div>
//                     </div>
//                     <p id='belowLeftText'>{item.communityCont}</p>
//                 </div>
//                 <div className='communityRight'>
//                     <img className='communityImage' src={item.communityimg1} alt='community'></img>
//                     <img className='communityImage' src={item.communityimg2} alt='community'></img>
//                 </div>
//             </div>
//              })}
//             </div>
//         </>
//     )
// }


export default community



