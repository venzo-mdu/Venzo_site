import React from 'react'
import Header from '../header/header'
import line from '../../images/Vector 76.svg'
import line1 from '../../DMpage/Vector 82.png'
import DevType from './DevType'
import DevCarousel from './devCarousel'
import colorArrow from '../../images/Read more arrow-gradient.svg'
import './development.css'
import './laptopL.css'
import './laptop.css'
import './tablet.css'
import './mobile.css'
import Footer from '../footer/footer'
function Development() {
    return (
        <div>
            <Header flag='header1' />
            <Header flag='header2' />
            <div className='component'>
                <div className='sect1'>
                    <p className='web_Title'>Expand your digtial <br className='mobilBr'/>territory</p>
                    <p className="webDesc">We build sites that build your business</p>
                    <p className="knowmore">KNOW MORE <img src={colorArrow} className='whiteArrow' alt="black-arrow"></img></p>
                </div>
            </div>
            <div className="sect2" >
                <p className='sect2_title'> What we do? </p>
                <div className='sect2-desc'>
                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Wordpress Development</p>
                        <p className='Webdesc-detail'>We offer refined customized applications that streamline your.</p>
                        <img className="lineM" src={line1} />
                    </div>

                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Ecommerce Development</p>
                        <p className='Webdesc-detail'>We offer refined customized applications that streamline your.</p>
                        <img className='Vline' src={line} ></img>
                        <img className="lineM" src={line1} />

                    </div>
                    <div className='devdesc-p'>
                        <p className='Webdesc-titlte'>Website Development</p>
                        <p className='Webdesc-detail'>We offer refined customized applications that streamline your.</p>
                        <img className='Vline' src={line} ></img>

                    </div>
                </div>
            </div>
            <DevType />
            <p className='sect2_title'> We  worked with </p>
            <DevCarousel />
            <div>
                <div className='containor12'>
                    <p className='anyIdea12'>Build your website <br /><span className=' textColor'>to grow your business
                    </span> </p>
                    <button className=' btn talk12'>Let's Talk</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Development