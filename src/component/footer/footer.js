import React from 'react'
import "../footer/footer.css"
import footerIcon from "../../images/Footericon.svg"
import footerData from "../../content/footerData.json"
import phone from '../../images/phone.png'
import { Link } from 'gatsby'

function Footer() {
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
                  No.236, Old Mahabalipuram Rd, &nbsp;<br></br>
                  Thoraipakkam – 600097.

                </div>
                <div className='branchOffice'>
                  <h5>Madurai</h5>
                  <hr  className='titleHr'></hr>
                  Plot No 15,5/244,<br></br>
                  Maruthupandiar 1st Cross Street,&nbsp;<br></br>
                  JJ Nagar, Madurai – 625020


                </div>
              </div>
              <div className='services'>

                <h5>Services</h5>
                <hr  className='titleHr'></hr>
                <p>
                  <Link to="/bankingQA">Banking QA</Link><br></br>
                  <Link to="/">Quality Assurance</Link><br></br>
                  <Link to="/">Banking Solutions</Link><br></br>
                  <Link to="/staffaugmentation">Staff Augmentation</Link><br></br>
                  <Link to="/appdevelopment"> App Development</Link><br></br>
                  <Link to="/webDevelopment">Website Development</Link><br></br>
                  <Link to="/productdevelopment">Product Development</Link><br></br>
                  <Link to="/blockchaindevelopment">Blockchain Development</Link><br></br>
                  </p>
              </div>
            </div>
            <div className='laptopResponsive1'>
              <div className='aboutUs'>
                <div className='company'>
                  <h5>Company</h5>
                  <hr  className='titleHr'></hr>
                  <Link to="/aboutus">About us</Link>
                  <br></br>
                  <Link to="/careers">Careers</Link><br></br>
                  <Link to="/blogs">Blogs</Link><br></br>
                  Reach Us<br></br>
                  <Link to="/privacypolicy">Privacy Policy</Link><br></br>

                </div>
                <div className='careers'>

                <h5>Careers</h5>
                  <hr  className='titleHr'></hr>
                  <p>hrteam@venzotechnologies.com</p>
                </div>
              
              </div>
              <div className='contactUs'>
                <div className='contact'>

                  <h5><Link to="/contactus">Contact Us</Link></h5>
                  <hr  className='titleHr'></hr>
                  <p>India :</p>
                  <p><img src={phone} alt='phoneIcon'></img> +91 9840594865</p>
                  <p>USA :</p>
                  <p><img src={phone} alt='phoneIcon'></img> +1 325 271 4695</p>

                </div>
                <div className='business'>
                  <h5>Business</h5>
                  <hr  className='titleHr'></hr>
                  <p>bd@venzotechnologies.com</p>
                </div>
              
              </div>
            </div>
          </div>
          <div className='copyRight'>
            <hr id='paraHR'></hr>
            <p >Copyright 2022 Venzo.All Rights Reserved</p>

          </div>
          <img className='logoIcon' src={footerIcon} alt="footerIcon"></img>
        </div>
      </footer>


   
    </>
  )
}

export default Footer;
