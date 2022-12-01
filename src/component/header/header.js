import React from 'react'
import "../header/header.css"
import Venzologo1 from "../../images/venzoWhite.png"
import HeaderData from "../../content/headerData.json"
import ToggleIcon from "../../images/toggleIcon.png"
import { Link } from 'gatsby'

function header(props) {
    console.log("props",props.flag)
  return (
      
   <header>
        <div id={props.flag == 'header2'?'headerSection':' '} className='header'>
       <div className='logo'>
           <img className='venzohome' src={Venzologo1} alt='logoIcon'></img>
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
                return <li><Link to={item.routeLink} activeClassName="active-link" className={item?item.activeLink:" "}>{item.navLink}</Link></li>
               })
           }
                  </ul>
                  <img className='toggleIcon'  src={ToggleIcon} alt="toggleicon"></img>
       </div>
     

       </div>
   </header>
  )
}

export default header