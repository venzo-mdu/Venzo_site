import React, { useState } from 'react'
import "../header/header.css"
import Hamburger from '../hamburger/hamburger'
import Venzologo1 from "../../images/venzoWhite.png"
import HeaderData from "../../content/headerData.json"
import ToggleIcon from "../../images/toggleIcon.png"
import { Link } from 'gatsby'

function Header(props) {
    console.log("props",props.flag)
    const[open,setOpen]=useState(false);
    const openmodal=()=>{
        setOpen(true)
    }
    const closemodal = (data) => {
        console.log("data", data)
        setOpen(data)
      }
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
                  <img className='toggleIcon' onClick={openmodal}  src={ToggleIcon} alt="toggleicon"></img>

          {
            open === true ? <Hamburger closemodal={closemodal} />
              : ""
          }
       </div>
     

       </div>
   </header>
  )
}

export default Header