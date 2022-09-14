import React from 'react'
import '../discussion/discussion.css'
import lineImg from '../../../images/horizLinecareers2.png'

function discussion() {
  return (
    <>
    <section>
      <div className='discussion'>
       <div className='gotanIdea'>
       <p id='gotanIdeaTitle'>Got an idea?<br></br>Let's get in touch!</p>
      <img src={lineImg} alt='horizantalLine'></img>
      <p id='gotanIdeaText'>Let’s discuss your project & find out what we can do to provide value.</p>
       </div>
       <div className='enquiryinDiscussion'>
       <div className='contactformCareers'>
                    <p className='formTitle'>Let’s catch the initial spark!</p>
                    <input className='Fname' type="text" placeholder='Name*'></input>
                    <input className='Femail' type="text" placeholder='Email*'></input>
                    <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
                    <textarea className='Fmessage' placeholder='Message*'></textarea>
                    <button className='Fbutton'>Submit</button>

                </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default discussion