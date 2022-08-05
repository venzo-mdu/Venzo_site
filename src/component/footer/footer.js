import React from 'react'
import "../footer/footer.css"
import footerIcon from "../../images/Footericon.svg"
import footerData from "../../content/footerData.json"

function Footer() {
  return (
    <>
    <footer>
      <div className='footerDetails'>
        <div className='footer'>
         <div className='laptopResponsive'>
         <div className='address'>
             <div className='headOffice'>
                 {/* 8th Floor, Purva Primus,<br></br>
              No.236, Old Mahabalipuram Rd, &nbsp;<br></br>
              Thoraipakkam – 600097.	 */}
             {
               footerData.map(item=>{
                 console.log(footerData);
                 return(
                   <>
                   <h5>{item.headOffice}</h5>
                   <p>{item.address1?item.address1.plotNo1:""}</p>
                   <p>{item.address1?item.address1.doorNo1:""}</p>
                   <p>{item.address1?item.address1.place1:""}</p>

                   </>
                 );
               })
             }		 
             </div>
             <div className='branchOffice'>
               {/* <h5>Madurai</h5>
               <hr></hr>
               Plot No 15,5/244,<br></br>
               Maruthupandiar 1st Cross Street,&nbsp;<br></br>
               JJ Nagar, Madurai – 625020 */}

               {
               footerData.map(item=>{
                 return(
                   <>
                   <h5>{item.branchOffice}</h5>
                   <p>{item.address2?item.address2.plotNo2:""}</p>
                   <p>{item.address2?item.address2.doorNo2:""}</p>
                   <p>{item.address2?item.address2.place2:""}</p>
                   </>
                 );
               })
             }
             </div>
         </div>
         <div className='services'>
         {
               footerData.map(item=>{
                 return(
                   <>
                   <h5>{item.serviceTitle}</h5>
                   <p>{item.services}</p>
                   </>
                 );
               })
             }
         {/* <h5>Services</h5>
         <hr></hr>
           <p> Product Development<br></br>
            Blockchain Development<br></br>
            Data Engineering<br></br>
            Banking Solutions<br></br>
            Staff Augmentation<br></br>
            Data Engineering<br></br>
            Banking Solutions<br></br>
            Staff Augmentation<br></br></p> */}
         </div>
         </div>
         <div className='laptopResponsive1'>
         <div className='aboutUs'>
             <div className='company'>
               {/* <h5>Company</h5>
               <hr></hr>
               About us<br></br>
               Careers<br></br>
               Blogs<br></br>
               Reach Us<br></br>
               Privacy Policy<br></br>	 */}
               {
               footerData.map(item=>{
                 return(
                   <>
                   <h5>{item.companyTitle}</h5>
                   <p>{item.about}</p>
                   </>
                 );
               })
             }				 
             </div>
             <div className='careers'>
             {
               footerData.map(item=>{
                 return(
                   <>
                   <h5>{item.careersTitle}</h5>
                   <p>{item.emailHR}</p>
                   </>
                 );
               })
             }
             </div>
         </div>
         <div className='contactUs'>
           <div className='conatct'>
           {
               footerData.map(item=>{
                 return(
                   <>
                   <h5>{item.contactTitle}</h5>
                   <p>{item.contact1?item.contact1.country1:" "}</p>
                   <p>{item.contact1?item.contact1.phone1:" "}</p>
                   <p>{item.contact1?item.contact2.country2:" "}</p>
                   <p>{item.contact1?item.contact2.phone2:" "}</p>
                   </>
                 );
               })
             }
            </div>
            <div className='business'>
            {
               footerData.map(item=>{
                 return(
                   <>
                   <h5>{item.businessTitle}</h5>
                   <p>{item.businessEmail}</p>
           
                   </>
                 );
               })
             }
            </div>
         </div>
         </div>
        </div>
        <div className='copyRight'>
          {
               footerData.map(item=>{
                 return(
                   <>
                   <p>{item.copyRight}</p>
           
                   </>
                 );
               })
             }
         </div>
         <img className='logoIcon' src={footerIcon} alt="footerIcon"></img>
 </div>
    </footer>
    </>
  )
}

export default Footer
