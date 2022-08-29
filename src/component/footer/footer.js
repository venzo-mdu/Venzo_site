import React from 'react'
import "../footer/footer.css"
import footerIcon from "../../images/Footericon.svg"
// import footerData from "../../content/footerData.json"
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
                <p> Product Development<br></br>
                  Blockchain Development<br></br>
                  Data Engineering<br></br>
                  Banking Solutions<br></br>
                  Staff Augmentation<br></br>
                  Data Engineering<br></br>
                  Banking Solutions<br></br>
                  Staff Augmentation<br></br></p>
              </div>
            </div>
            <div className='laptopResponsive1'>
              <div className='aboutUs'>
                <div className='company'>
                  <h5>Company</h5>
                  <hr  className='titleHr'></hr>
                  About us<br></br>
                  Careers<br></br>
                  Blogs<br></br>
                  Reach Us<br></br>
                  Privacy Policy<br></br>

                </div>
                <div className='careers'>

                  <h5>Careers</h5>
                  <hr  className='titleHr'></hr>
                  <p>hrteam@venzotechnologies.com</p>
                </div>
                <div className='business'>
                  <h5>Business</h5>
                  <hr  className='titleHr'></hr>
                  <p>bd@venzotechnologies.com</p>
                </div>
              </div>
              <div className='contactUs'>
                <div className='contact'>

                  <h5><Link to="/contactus">Contact Us</Link></h5>
                  <hr  className='titleHr'></hr>
                  <p>India:</p>
                  <p><img src={phone} alt='phone'/> &nbsp;+91 9840594865</p>
                  <p>USA:</p>
                  <p><img src={phone} alt='phone' />&nbsp;+1 325 271 4695</p>

                </div>
              
              </div>
            </div>
          </div>
          <div className='copyRight'>
            <hr className='copyRightHr'></hr>
            <p>Copyright 2022 Venzo.All Rights Reserved</p>

          </div>
          <img className='logoIcon' src={footerIcon} alt="footerIcon"></img>
        </div>
      </footer>
    </>
  )
}

export default Footer;
