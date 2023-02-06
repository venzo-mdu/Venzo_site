import React from 'react'
import '../privacyVenzo/privacyVenzo.css'
import PolicyVenzo from '../policyVenzo/policyVenzo'

import privacypolicyBG from '../../../images/privacypolicyBg.png'
import fbIcon from '../../../images/ppfbIcon.png'
import TwitterIcon from '../../../images/pptwitterIcon.png'
import linkedinIcon from '../../../images/pplinkedIcon.png'
import instaIcon from '../../../images/ppinstaIcon.png'
import youtubeIcon from '../../../images/ppyoutubeIcon.png'

function privacyVenzo() {
  return (
    <>
    <div className='privacyVenzo'>
      <img className='privacyBG' src={privacypolicyBG} alt='privacypolicyBg'></img>
      <p id='privacyText'>Venzo Technologies Privacy Policy</p>
      
      <PolicyVenzo/>
      <div className='connectwithUs'>
             <p id='connectwithUsTitle'>connect with us</p>
             <div className='privacyMediaIcons'>
              <a href='https://www.facebook.com/VenzoTechnologies/'><img className='ppicons' src={fbIcon} alt='socialIcons'></img></a>
              <a href='https://twitter.com/Venzo_Tech/'><img className='ppicons' src={TwitterIcon} alt='socialIcons'></img></a>
              <a href='https://www.linkedin.com/company/venzo-technologies/'><img className='ppicons' src={linkedinIcon} alt='socialIcons'></img></a>
              <a href='https://www.instagram.com/venzo_tech/'><img className='ppicons' src={instaIcon} alt='socialIcons'></img></a>
              <a href='https://www.youtube.com/channel/UCebtP01QSLIIRNrye8Zl4HQ'><img className='ppicons' src={youtubeIcon} alt='socialIcons'></img></a>
              </div>
           </div>
    </div>
    </>
  )
}

export default privacyVenzo