import React from 'react'
import "../header/header.css"
import Venzologo1 from "../../images/venzoWhite.svg"
import HeaderData from "../../content/headerData.json"

function header() {
  return (
      
   <header>
       <div className='header'>
       <div className='logo'>
           <img src={Venzologo1} alt='logoIcon'></img>
       </div>
           <div className='links'>
           {/* <ul>
               <li>Home</li>
               <li>Product Development</li>
               <li>BlockChain Development</li>
               <li>Data Engineering</li>
           </ul> */}
             <ul>
           {
               HeaderData.map(item=>{
                console.log(HeaderData);
                return <li>{item.navLink}</li>
               })
           }
                  </ul>
       </div>
     

       </div>
   </header>
  )
}

export default header