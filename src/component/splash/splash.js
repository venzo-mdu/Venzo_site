import React, { useEffect, useState } from 'react'
import '../splash/splash.css'
import Venzologogif from '../../images/Venzo7th/01_Logo-opening-animation_337x110.gif'
import Sevenyears from '../../images/Venzo7th/PNG/Venzo 7th Anniversary white.png'
import Qiztologo from '../../images/Venzo7th/Products/SVG/Qizto.svg'
import Krediqlogo from '../../images/Venzo7th/Products/SVG/Krediq.svg'
import Tfmasterslogo from '../../images/Venzo7th/Products/SVG/TF Master.svg'
import { SEO } from "../../component/seo"


const Splash = () => {

  const [isLogo, setisLogo] = useState(false);
  const [qiztoClassname, setQiztoClassname] = useState('qizto-logo-inactive');
  const [krediqClassname, setkrediqClassname] = useState('krediq-logo-inactive');
  const [tfmastersClassname, settfmastersClassname] = useState('tfmasters-logo-inactive');




  useEffect(() => {
    setTimeout(() => {
      setisLogo(true)
    }, 2000)

    setInterval(() => {
      setQiztoClassname('qizto-logo')
    }, 3000)
    setInterval(() => {
      setkrediqClassname('krediq-logo')
    }, 4000)
    setInterval(() => {
      settfmastersClassname('tfmasters-logo')
    }, 5000)
  }, [])


  console.log(isLogo)
  return (
    <div>
      <SEO title={'Custom Software Development Company - Venzo Technologies'} description={'Venzo offers integrated software solutions for startups, SMEs, and large enterprises. With expertise in Mobile App, Website Development, Cloud, etc.'} />

      {
        isLogo ?
          <div className='celebration'>
            <div className='splash-one'>
              <img className='venzo-sevenyears' alt='seven-years' src={Sevenyears}></img>
            </div>
            <div className='products-images'>
              <img className={qiztoClassname} alt='product-logo' src={Qiztologo}></img>
              <img className={krediqClassname} alt='product-logo' src={Krediqlogo}></img>
              <img className={tfmastersClassname} alt='product-logo' src={Tfmasterslogo}></img>
            </div>
          </div>
          :
          <div className='splash'>
            <img className='venzo-gif' alt='gif' src={Venzologogif}></img>
          </div>

      }
    </div>


  )
}

export default Splash