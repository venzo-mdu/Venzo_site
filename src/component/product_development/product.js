import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import './product.css';
import './laptopL.css';
import './laptopM.css';
import './productTab.css';
import './mobile.css';
import './mobileS.css';
import line from '../../images/Vector 76.svg';
import quality from '../../images/enterpise.png'
import mvp from '../../images/mvp.png'
import domin from '../../images/domin.png'
import consulting from '../../images/consulting.png'
import sme from '../../images/sme.png'
import saas1 from '../../images/saas1.png'
import saas2 from '../../images/saas2.png'
import saas3 from '../../images/saas3.png'
import saas4 from '../../images/saasDevelopmentimg.png'
import bgImageAnimation from '../../images/animationBg.png'
import bgImageAnimationRes from '../../images/animationBgRes.png'
import whyVenzoIcon1 from '../../images/whyVenzoicon1.png'
import whyVenzoIcon2 from '../../images/whyVenzoicon2.png'
import whyVenzoIcon3 from '../../images/whyVenzoicon3.png'
import whyVenzoIcon4 from '../../images/whyVenzoicon4.png'
import productImage from '../../images/productImage.png'
import borderLine from '../../images/borderLine.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
  

function Product() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>        <link href='https://fonts.googleapis.com/css?family=Manrope' rel='stylesheet'></link>

        <div>
            <Header flag='header1' />
            <Header flag='header2' />
            <div>
                <div className='product_section1'>
                    <p className='product_Title'>Developing<br /> products that<br /> provide <span className='colorname'>real value</span></p>
                </div>
            </div>
            {/* <div>
                <div className='product_section2'>
                    <p className='product_Title'>Developing<br /> products that<br /> provide <span className='colorname'>real value</span></p>
                </div>
            </div> */}
            <div className='product_experts'>
                <p className='experts_title'>We are <span className='colorname'>experts in</span></p>
                <div className='expert_flex'>
                    <div>
                        <img src={quality} />
                        <p className='titleHead'>Enterprise<br /> Application Development</p>
                    </div>
                    {/* <img className='VerticlLine' src={VerticlLine} alt ='VerticlLine' /> */}
                    <img className='linev LinevHoriz' src={line} alt='line' />

                    <div>
                        <img src={mvp} />
                        <p className='titleHead'>MVP<br /> Development</p>
                    </div>
                    
                    <img className='linev LinevHoriz' src={line} alt='line' />

                    <div>
                        <img src={domin} />
                        <p className='titleHead'>Domain<br /> Specific Development</p>
                    </div>
                    <img className='linev LinevHoriz' src={line} alt='line' />

                    <div>
                        <img src={consulting} />
                        <p className='titleHead'>Business<br /> Consulting</p>
                    </div>
                    <img className='linev LinevHoriz' src={line} alt='line' />
           
                    <div>
                        <img src={sme} />
                        <p className='titleHead'>SME<br /> Product Development</p>
                    </div>
                </div>
                <div className='helpYou'>
                    <p className='helpTitle'>How we help you</p>
                    <p className='helpDesc'>We fully understand that developing successful products is not a straight line, so we provide a flexible, scalable approach that keeps you moving forward.</p>
                </div>
                <div className='saas'>
                    <div className='saas_consulting'>
                        <img className='saasImg' src={saas1} />
                        <div className='cons_right'>
                            <p className='cons_title'>Saas Consulting</p>
                            <p className='cons_desc SaasPara'>Implementing a SaaS solution is the first step towards business digitalization. We also perform the Discovery Phase, develop the SaaS application concept, and devise a development strategy that reflects your long-term goals.</p>
                            <div className='cons_list'>
                                <img className='linev HrLine' src={line} alt='line' />
                                <div className='linevText'>
                                    <p className='cons_number'>01</p>
                                    <p className='cons_subTitle'> Technical<br className='ConsultBr'></br>consultation </p>
                                </div>
                                <img className='linev HrLine' src={line} alt='line' />

                                <div className='linevText'>
                                    <p className='cons_number'>02</p>
                                    <p className='cons_subTitle'>Ideas  &<br className='ConsultBr'></br>Conceptualization </p>
                                </div>
                                <img className='linev HrLine' src={line} alt='line' />
                                <div className='linevText'>
                                    <p className='cons_number'>03</p>
                                    <p className='cons_subTitle'>Strategy<br className='ConsultBr'></br>Development </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='saas_Development'>
                    <img className='saasImg' id='saasImgRes' src={saas4} />
                        <div className='cons_left'>
                            <p className='cons_title SaasDevTit2'>Saas Development</p>
                            <p className='cons_desc SAASDev'>We can develop a SaaS product from scratch or re-architecture existing applications for SaaS environments.</p>
                            <div className='dev_list '>
                                <div className='dev_list-Block'>

                                <img className='linev saasHr' src={line} alt='line' />
                                <div className='linevText'>
                                    <p className='cons_number'>01 </p>
                                    <p className='cons_subTitle'>  Multi-tenant<br className='ConsultBr'></br>architecture development</p>
                                </div>
                                <img className='linev saasHr' src={line} alt='line' />
                                <div  className='linevText'>
                                    <p className='cons_number'>02</p>
                                    <p className='cons_subTitle'>Service Oriented<br className='ConsultBr'></br>Architecture (SOA) development</p>
                                </div>
                                </div>
                                <div className='dev_list-Block'>
                                <img className='linev saasHr' src={line} alt='line' />
                                <div className='linevText'>
                                    <p className='cons_number'>03</p>
                                    <p className='cons_subTitle'>Cloud<br className='ConsultBr'></br>Computing Deployments </p>
                                </div>
                                <img className='linev saasHr' src={line} alt='line' />
                                <div className='linevText'>
                                    <p className='cons_number'>04</p>
                                    <p className='cons_subTitle'>API<br className='ConsultBr'></br>Development and Integration </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <img className='saasImg1' src={saas2} />

                    </div>
                    <div className='saas_consulting'>
                        <img className='saasImg' src={saas3} />
                        <div className='cons_right'>
                            <p className='cons_title ConsTitl'>Support and Maintanence</p>
                            <p className='cons_desc SupportMain'>We can add new features and maintains the product. We can develop a SaaS product from scratch or re-architecture existing applications for SaaS environments.</p>
                            <div className='cons_list SupportLine SaasConsList'>
                                <img className='linev consultHr' src={line} alt='line' />
                                <div className='linevText SaasConsList'> 
                                    <p className='cons_number'>01</p>
                                    <p className='cons_subTitle'>Flexible team<br className='ConsultBr'></br>& 24/7 Service </p>
                                </div>
                                <img className='linev consultHr' src={line} alt='line' />
                                <div className='linevText SaasConsList'>
                                    <p className='cons_number'>02</p>
                                    <p className='cons_subTitle'>Ongoing<br className='ConsultBr'></br>support & maintenance </p>
                                </div> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='CreateImpact'>
                <p className='ImpactTitle'><span className='textColor'> Creating Impact </span> by providing a wide range of services and opportunities to</p>
                <div className='cardlist'>
                    <div className='cards1'>
                        <p className='cardTitle'>Startups</p>
                        <p className='cardDesc'>Venzo is helping startups with a wide range of SaaS product and support to build their brand.</p>
                        <p className='cardDescList'>Product Discovery <br />Idea Validation <br />Prototyping<br />User Testing<br />Early Go-to-market</p>
                        <div className='ButtonTalk'><p className='Quotes'>Get Quote</p></div>
                    
                    </div>
                    <div className='cards2'>
                        <p className='cardTitle'>Medium Enterprise</p>
                        <p className='cardDesc'>Venzo is helping Medium enteprise with a wide range of SaaS product and support to build their brand.</p>
                        <p className='cardDescList'>MVP / Rapid MVP<br />Product Discovery<br />Team Augmentation<br />User Testing<br />Go-to-market</p>
                        <div className='ButtonTalk'><p className='Quotes'>Get Quote</p></div>
                    </div>
                    <div className='cards3'>
                        <p className='cardTitle'>Top Tier Companies</p>
                        <p className='cardDesc'>Venzo is helping Top brands with a wide range of SaaS product and support to maintain their market value.</p>
                        <p className='cardDescList'>Growth Design<br />Continuous Product Discovery<br />Opportunity Mapping<br />User Interviews<br />Scrum Team Augmentation</p>
                        <div className='ButtonTalk'><p className='Quotes'>Get Quote</p></div>
                    </div>
                </div>
            
            </div>
   
               <div className='animation'>
                   <img className='animationBG' src={bgImageAnimation} alt='backgroundImage'></img>
                   <img className='animationBGRes' src={bgImageAnimationRes} alt='backgroundImage'></img>
                  
                   <p id='animationText'>We’ll identify and equip you with a team of developers perfectly suited to your project, ready to work hand-in-glove with your in-house team, using shared tools and methodologies.</p>
               </div>
      

               <div className='whyVenzo'>
                     <p id='whyVenzoTitle'>Why <span id='colorVenzoText'>Venzo?</span></p>
                     <p id='whyVenzoText'>Venzo’s product engineering solutions team uses cutting-edge technologies, solid frameworks, and efficient workflows to provide stage-wise delivery for improved product control and visibility.</p>
                     <div className='venzoCards'>
                         <div className='subCards subCards1'>
                             <img src={whyVenzoIcon1} alt='whyVenzoIcon'></img>
                          <p id='subCardsText'>Product engineering experts</p>
                         </div>
                         <div className='subCards subCards2'>
                         <img src={whyVenzoIcon2} alt='whyVenzoIcon'></img>
                          <p id='subCardsText'>Quality driven</p>
                             
                         </div>
                         <div className='subCards subCards3'>
                         <img src={whyVenzoIcon3} alt='whyVenzoIcon'></img>
                          <p id='subCardsText'>Diverse technology</p>
                             
                         </div>
                         <div className='subCards subCards4'>
                         <img src={whyVenzoIcon4} alt='whyVenzoIcon'></img>
                          <p id='subCardsText'>Information Security</p>
                             
                         </div>
                     </div>
              
               </div>
           

           <div className='awesomeProducts'>
               <p className='awesomeTitle'>Awesome products from <span id='awesomeVenzo'>Venzo !</span></p>
            <Carousel>
            <Carousel.Item >
                <div className='ourProducts'>
                <div className='productDesc'>
                <p id='productTitle'>Madras Daily</p>
                <img  className='borderLine' src={borderLine} alt='borderImage'></img>
                <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
                </div>
                <img  className='productImage' src={productImage} alt='productImage'></img>
                </div>
              </Carousel.Item>
              <Carousel.Item >

                <div className='ourProducts'>
              <div className='productDesc'>
               <p id='productTitle'>Madras Daily</p>
               <img  className='borderLine' src={borderLine} alt='borderImage'></img>
               <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img  className='productImage' src={productImage} alt='productImage'></img>
            </div>
            </Carousel.Item >
            <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
               <p id='productTitle'>Madras Daily</p>
               <img  className='borderLine' src={borderLine} alt='borderImage'></img>
               <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img  className='productImage' src={productImage} alt='productImage'></img>
            </div>
            </Carousel.Item >
            <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
               <p id='productTitle'>Madras Daily</p>
               <img  className='borderLine' src={borderLine} alt='borderImage'></img>
               <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img  className='productImage' src={productImage} alt='productImage'></img>
            </div>
            </Carousel.Item >
            <Carousel.Item >
            <div className='ourProducts'>
              <div className='productDesc'>
               <p id='productTitle'>Madras Daily</p>
               <img  className='borderLine' src={borderLine} alt='borderImage'></img>
               <p id='productText'>Madras Daily is a news-reading app for on-the-go that you may tailor to your preferences. It comes with 12 pre-made subjects for individuals who don't want to go digging for information. It comprises a wide selection of topics, and the ability to log what you read is all included in this app.</p>
              </div>
              <img  className='productImage' src={productImage} alt='productImage'></img>
            </div>
            </Carousel.Item >

            </Carousel>

           </div>

            <div>
                <div className='containor3'>
                    <p className='anyIdea'>Build your product <br /><span className=' textColor'>to grow your business</span> </p>
                    <button className=' btn talk' onClick={() => setButtonPopup(true)}>Let's talk</button>
                </div>
            </div>
            <Footer />

           
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p id='joinourteamText'>Join our team</p>
        <input className='Fname' type="text" placeholder='Name*'></input>
        <input className='Femail' type="text" placeholder='Email*'></input>
        <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
        <input className='file' type="file" placeholder='choose file'></input>
        <textarea className='Fmessage' placeholder='Message*'></textarea>
        <button className='Fbutton'>Submit</button>
      </Popup>
        </>

    )
}

export default Product
