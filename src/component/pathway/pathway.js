import React from 'react'
import "../pathway/pathway.css"
import Popup from '../careersPage2/popup/popup'
import { useState } from 'react'
import axios from 'axios'
import success from '../../images/successfully.png'
import toMail from '../../config/config'
import {toHREnquiryMail} from '../../config/config'

import { storage } from '../firebase'
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

function Pathway() {
  const [buttonPopup, setButtonPopup] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [imagelist, setImagelist] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [emailInput, setEmailInput] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });
    const handleChange = (e) => {
        setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
    }
    async function sendEmail(event) {
        event.preventDefault()
        setSubmit(true)

        const body = {
            to: toHREnquiryMail,
            message: " Name:" + " " + emailInput["name"] + " " + " <br> Email:" + " " + emailInput["email"] + " " + " <br> Mobile No:" + " " + emailInput["mobile"] + " " + " <br> Message:" + " " + emailInput["message"]+"<br> Resume :" +" "+ imagelist,
            subject: "Venzo Careers From"
        }

        const emailResponse = await axios.post("https://us-central1-venzoadmindev.cloudfunctions.net/sendMail", body);
        console.log(emailResponse)
        setEmailInput(
            {
                name: "",
                email: "",
                mobile: "",
                message: ""
            },
          setImagelist('')
        )

    }
    const sendFile =(e)=>{
      console.log(e)
      console.log('hihh',imagelist,'image',imageUpload);
      setImageUpload(e.target.files[0])
      console.log(e.target.files[0])
      const imageRef = ref(storage, `venzofile/${e.target.files[0].name + v4()}`)
  
      uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url)
          // setImagelist((prev) => [...prev, url]);
          setImagelist(url)
        })
      })
    }
  return (
    <>
      <section>
        <div className='pathway'>
          <p id="pathwayText">Here are some career pathways to <span id="gradientTextPathway">consider if you enjoy working with others.</span></p>
          <button className='pathwayButton' onClick={() => setButtonPopup(true)}>Lets Talk</button>
        </div>
      </section>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={sendEmail}>
          <p id='joinourteamText'>Join our team</p>
          <input className='Fname' name='name' value={emailInput["name"]} onChange={handleChange} type="text" placeholder='Name*' required/>
          <input className='Femail' name='email' value={emailInput["email"]} onChange={handleChange} type="email" placeholder='Email*' required/>
          <input className='Fphone' name='mobile' value={emailInput["mobile"]} onChange={handleChange} type="phone" placeholder='Mobile number*' required/>
          <input className='file' type="file" accept='.pdf , .doc ,. docx' onChange={sendFile} placeholder='choose file' required/>
          <textarea className='Fmessage' name='message' value={emailInput["message"]} onChange={handleChange} placeholder='Message' required></textarea>
          <button type='submit' className='Fbutton'>Submit</button>
        </form>
      </Popup>
      <Popup trigger={submit} setTrigger={setSubmit} id='thankPop'>
        <div className='thankPop'>
          <p className='subSucss'>Submitted successfully</p>
          <img src={success} alt='success' className='succImg' />
          <p className='thanksMsg'>Thank you for contacting us,<br></br> our team will reach you.</p>
        </div>
      </Popup>
    </>
  )
}

export default Pathway;