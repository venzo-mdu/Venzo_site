import React from 'react'
import '../hamburger/hamburger.css'
import { Link } from 'gatsby'
import VenzoHam from '../../images/hamburger/venzoLogoham.png'
import Closebtn from '../../images/closeBtn.svg'
function hamburger({ closemodal }) {
   const onClickclose = () => {
      console.log('clickedclose', closemodal)
      closemodal(false)
   }
   return (
            <div className='hamburger closeHamburger'>
               <span onClick={onClickclose} className='closeBtn'><img src={Closebtn} alt='closeicon'></img></span>

               <div id='hamburger closeBtn'>
               <div className='menu'>
                  <div className='hamLogo'>
                  <a href='/'><img className='venzoLogoham' src={VenzoHam} alt='images-Logo'></img></a>
                  </div>
                 
                 <div className='routeLinks'>
                  <div className='routes1'>
                 <p id='cardText'><a className="nav-link"  activeClassName="active-link"  href="/banking-application-testing-qa-services">Banking QA</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/quality-engineering-assurance">Quality Assurance</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/product-development-company">Banking Solutions</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/hire-our-developers">Staff Augumentation</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/app-development-company">App Development</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/website-development-company">Website Development</a></p>
                     </div>
                     <div className='routes2'>
                    
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/product-development-company">Product Development</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/blockchain-development-company">Blockchain  Development</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/about-us">About Us</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/careers">Careers</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/blog">Blogs</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/contact-us">Reach Us</a></p>

                     </div>
                 </div>
                
               </div>
               </div>
             </div>
      )

}

export default hamburger




