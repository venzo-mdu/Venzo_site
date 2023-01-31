import React from 'react'
import '../community/community.css'

import TickIcon from '../../../images/aboutus/aboutus17.png'
// import CommunityImage1 from '../../../images/aboutus/aboutus3.png'
// import CommunityImage2 from '../../../images/aboutus/aboutus7.png'
import CommunityImage1 from '../../../images/aboutus/aboutus6.png'
import CommunityImage2 from '../../../images/aboutus/aboutus3.png'


function community() {
    return (
        <>
            <div className='community'>
                <div className='communityLeft'>
                    <p id='communityLeftText'>We are trying to make a better community through...</p>
                    <div className='betterment'>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Work Life Balance</p>
                        </div>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Flat Heirarchy</p>
                        </div>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>A Friendly Culture</p>
                        </div>
                        <div className='betterCommunity'>
                            <div>
                                <img className='betterImage' src={TickIcon} alt='tick'></img>
                            </div>
                            <p id='betterText'>Satisfied Salary</p>
                        </div>
                    </div>
                    <p id='belowLeftText'>Venzo Technologies leverages the power of cognitive computing, hyper-automation.</p>
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



