import React from 'react'
import '../hamburger/hamburger.css'
import { Link } from 'gatsby'
import VenzoHam from '../../images/hamburger/venzoLogoham.png'
import Closebtn from '../../images/closeBtn.svg'
function hamburger({ closemodal }) {
   const onClickclose = () => {
      console.log('clickedclose', closemodal)
      closemodal(false)
      document.getElementsByClassName('hamburger').style.animation = 'movingup 0.5s linear'
      console.log('close',document.getElementsByClassName('hamburger').style.animation)
   }
   return (
            <div className='hamburger'>
               <span onClick={onClickclose} className='closeBtn'><img src={Closebtn} alt='closeicon'></img></span>

               <div id='hamburger'>
               <div className='menu'>
                  <div className='hamLogo'>
                  <a href='/'><img className='venzoLogoham' src={VenzoHam} alt='images-Logo'></img></a>
                  </div>
                 
                 <div className='routeLinks'>
                  <div className='routes1'>
                 <p id='cardText'><a className="nav-link" activeClassName="active-link"  href="/">Banking QA</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/app-development-company">Quality Assurance</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/product-development-company">Banking Solutions</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/about-us">Staff Augumentation</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/blog">App Development</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/about-us">Web Development</a></p>
                     </div>
                     <div className='routes2'>
                    
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/product-development-company">Product Development</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/product-development-company">Blockchain  Development</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/about-us">About Us</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/blog">Careers</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/blog">Blogs</a></p>
                  <hr id='hrincard'></hr>
                  <p id='cardText'><a className="nav-link" activeClassName="active-link" href="/app-development-company">Reach Us</a></p>

                     </div>
                 </div>
                
               </div>
               </div>
             </div>
      )

}

export default hamburger




