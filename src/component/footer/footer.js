import React, { useState, useEffect } from 'react'

import "../footer/footer.css"
import footerIcon from "../../images/Footericon.svg"
import footerData from "../../content/footerData.json"
import phone from '../../images/phone.png'
import { Link } from 'gatsby'
import { useLocation } from 'react-router-dom'


function Footer() {
  const scrolltoTop =()=>{
    
  }
  return (
    <>
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"></link>
      </head>

      <footer>
        <div className='footerDetails'>
          <div className='footer'>
            <div className='laptopResponsive'>
              <div className='address'>
                <div className='headOffice'>
                  <h5>Chennai</h5>
                  <hr className='titleHr'></hr>
                  8th Floor, Purva Primus,<br></br>
                  No.236, Old Mahabalipuram Rd, &nbsp;<br id='addressBr'></br>
                  Thoraipakkam – 600097.

                </div>
                <div className='branchOffice'>
                  <h5>Madurai</h5>
                  <hr className='titleHr'></hr>
                  Plot No 15,5/244,<br></br>
                  Maruthupandiar 1st Cross Street,&nbsp;<br></br>
                  JJ Nagar, Madurai – 625020


                </div>
              </div>
              <div className='services'>

                <h5>Services</h5>
                <hr className='titleHr'></hr>
                <p>
                  <a href="/banking-application-testing-qa-services">Banking QA</a><br></br>
                  <a href="/quality-engineering-assurance">Quality Assurance</a><br></br>
                  <a href="/hire-our-developers">Staff Augmentation</a><br></br>
                  <a href="/app-development-company"> App Development</a><br></br>
                  <a href="/website-development-company">Website Development</a><br></br>
                  <a href="/product-development-company">Product Development</a><br></br>
                  <a href="/blockchain-development-company">Blockchain Development</a><br></br>
                </p>
              </div>
            </div>
            <div className='laptopResponsive1'>
              <div className='aboutUs'>
                <div className='company'>
                  <h5>Company</h5>
                  <hr className='titleHr'></hr>
                  <a href="/about-us">About us</a>
                  <br></br>
                  <a href="/careers">Careers</a><br></br>
                  <a href="/blog">Blogs</a><br></br>
                  <a href="/contact-us">Reach Us</a><br></br>
                  <a  href="/privacy-policy">Privacy Policy</a><br></br>
                 

                </div>
                <div className='careers'>

                  <h5>Careers</h5>
                  <hr className='titleHr'></hr>
                  <p>hrteam@venzotechnologies.com</p>
                </div>

              </div>
              <div className='contactUs'>
                <div className='contact'>

                  <h5><a href="/contact-us">Contact Us</a></h5>
                  <hr className='titleHr'></hr>
                  <div id='contactIND'>
                  <p>India</p>
                  <p><img  src={phone} alt='phoneIcon'></img> +91 9840594865</p>
                  </div>
                  <div id='contactUSA'>
                  <p>USA</p>
                  <p><img src={phone} alt='phoneIcon'></img> +1 325 271 4695</p>
                  </div>
                </div>
                <div className='business'>
                  <h5>Business</h5>
                  <hr className='titleHr'></hr>
                  <p>bd@venzotechnologies.com</p>
                </div>

              </div>
            </div>
          </div>
          <div className='copyRight'>
            <hr id='paraHR'></hr>
            <p >Copyright 2022 Venzo. All Rights Reserved</p>

          </div>
          <img className='logoIcon' src={footerIcon} alt="footerIcon"></img>
        </div>
      </footer>



    </>
  )
}

export default Footer;
