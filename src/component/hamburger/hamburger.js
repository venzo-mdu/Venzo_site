import React from 'react'
import '../hamburger/hamburger.css'
import { Link } from 'gatsby'
import Closebtn from '../../images/closeBtn.svg'
function hamburger({closemodal}) {
        const onClickclose=()=>{
          console.log('clickedclose',closemodal)
             closemodal(false)
        }
        return (
      typeof window !== 'undefined'? 
          window.innerWidth<=768?
          <div className='hamburger'>
             <span onClick={onClickclose} className='closeBtn'><img  src={Closebtn} alt='closeicon'></img></span>
          <div className='menu'>
                 <p id='cardText'><Link className="nav-link" activeClassName="active-link" to="/">Home</Link></p>
                 <hr id='hrincard'></hr>
                 <p id='cardText'><Link className="nav-link" activeClassName="active-link" to="/productdevelopment">Product Development</Link></p>
                 <hr id='hrincard'></hr>
                 <p id='cardText'><Link className="nav-link" activeClassName="active-link" to="/blockchaindevelopment">Blockchain Development</Link></p>
                 <hr id='hrincard'></hr>
                 <p id='cardText'><Link className="nav-link" activeClassName="active-link" to="/webDevelopment">Data Engineering</Link></p>
                
          </div>
        
      
       </div>:''
          
        :'')
        
}

export default hamburger




