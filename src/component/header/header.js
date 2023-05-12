import React, { useState, useEffect } from 'react'
import "../header/header.css"
import Hamburger from '../hamburger/hamburger'
import Venzologo1 from "../../images/venzoWhite.png"
import Venzologo2 from "../../images/Venzo Color logo.svg"
import HeaderData from "../../content/headerData.json"
import ToggleIcon from "../../images/toggleIcon.png"
import { Link } from 'gatsby'

function Header(props) {
  // console.log("props", props.flag)
  const [open, setOpen] = useState(false);
  const [navbarLogo, setnavbarLogo] = useState(Venzologo1);

  

  const changeLogo = () => {
    if (window.scrollY >= 790) {
      setnavbarLogo(Venzologo2)
    } else {
      setnavbarLogo(Venzologo1)
    }
  }

  useEffect(() => {
    if (props.flag !== 'header2') {
      changeLogo()
      window.addEventListener("scroll", changeLogo)
    } else {
      setnavbarLogo(Venzologo2)
    }

  })

  const openmodal = () => {
    setOpen(true)
  }
  const closemodal = (data) => {
    // console.log("data", data)
    setOpen(data)
  }
  return (

    <header>
      <div id={props.flag == 'header2' ? 'headerSection' : ' '} className='header'>
        <div className='logo'>
          <a href='/'><img className='venzohome' src={navbarLogo} alt='logoIcon'></img></a>
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
              HeaderData.map((item,index) => {
                return <li><Link key={index} to={item.routeLink} activeClassName="active-link" className={item ? item.activeLink : " "}>{item.navLink}</Link></li>
              })
            }
          </ul>
          <img className='toggleIcon' onClick={openmodal} src={ToggleIcon} alt="toggleicon"></img>

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