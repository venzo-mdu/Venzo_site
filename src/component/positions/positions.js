import React from 'react'
import "../positions/positions.css"
import { Link, navigate } from 'gatsby'
import careerArrow from '../../images/CareerArrow.png'

import { getDoc, doc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';
import { db, auth, storage } from '../firebase'

import { v4 } from "uuid";
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/UserAuthContext';
import Popup from './editpopup'

function Positions() {
  const [transactionsList, setTransactionsList] = useState([])
  const { login, currentUser, logout } = useAuth()
  const docref = doc(db, 'Venzo_site', 'Open_Positions');
  const [buttonPopup, setButtonPopup] = useState(false);

  const onClickLogin = () => {
    navigate('/login')
  }

  const onClickLogout = () => {
    auth.signOut();
  }
  const [descInput, setDescInput] = useState("")
  const [titleInput, setTitleInput] = useState("")
  const [jobInput, setjobInput] = useState("")

  const onChangedescInput = event => {
    setDescInput(event.target.value)
  }
  const onChangejobInput = event => {
    setjobInput(event.target.value)
  }
  const onChangeTitleInput = event => {
    setTitleInput(event.target.value)
  }
  const createData = async () => {
    const docref = doc(db, 'Venzo_site', 'Open_Positions');
    const datalist = {
      title: titleInput,
      description: descInput,
      job: jobInput
    }
    let details = await getDoc(docref)
    if (details.data() !== undefined) {
      await updateDoc(docref, {
        position: arrayUnion(datalist)
      })
    }
    getTransactions()
    setTitleInput('')
    setDescInput('')
    setjobInput('')
  }

  useEffect(() => {
    getTransactions()
  }, [])
  const getTransactions = async () => {
    const docref = doc(db, 'Venzo_site', 'Open_Positions');
    const querySnapshot = await getDoc(docref);
    const list = querySnapshot.data().position
    setTransactionsList(list)
  };
  return (
    <>
      {/* <section>
        <div className='positions'>
          <p id="positionsText">Open Positions</p>
          <div className='posCard'>
            <div className='cards'>
              <p id="cardTitle">Automater Tester</p>
              <p id="cardText">Read and understand the requirements given. Think as a business user and come up with Test scenarios.
              </p>
              <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>  
            </div>
            <div className='cards'>
              <p id="cardTitle">Full Stack Developer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
             <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>    
            </div>
            <div className='cards'>
              <p id="cardTitle">Java Developer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>    
            </div>
            <div className='cards'>
              <p id="cardTitle">BDE-International Sales</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>    
            </div>
            <div className='cards'>
              <p id="cardTitle">DevOps Engineer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>    
            </div>
            <div className='cards'>
              <p id="cardTitle">.Net Developer</p>
              <p id="cardText">Read and understand the requirements given.
                Think as a business user and come up with Test scenarios.
              </p>
              <Link to='/careers/careersdetails'><p id="viewJob" >view Job <img src={careerArrow} alt='careerArrow'></img></p></Link>    
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className='positions'>
          <p id="positionsText">Open Positions</p>
          {console.log(currentUser)}
          {currentUser !== null && currentUser.email !== undefined ? <div >
            <div style={{ display: 'flex', marginLeft:"10%" }}>
              <p className='btn ' style={{ backgroundColor: 'gray', color: "black" }} onClick={() => setButtonPopup(true)} >Add Job</p> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <p className='btn ' style={{ backgroundColor: 'gray', color: "black" }} onClick={onClickLogout} >logout</p>
            </div>
            <div className='posCard' >
              {transactionsList.map(item => {
                return <div className='cards'>
                  <p id="cardTitle">{item.title}</p>
                  <p id="cardText">{item.description}</p>
                  <Link to='/careers/careersdetails'><p id="viewJob" >{item.job}<img src={careerArrow} alt='careerArrow'></img></p></Link>
                </div>
              })}
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <label className="input-label" htmlFor="title">
                TITLE
              </label> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={onChangeTitleInput}
                className="input"
                placeholder="TITLE"
              /> <br /><br />
              <label className="input-label" htmlFor="amount">
                Description
              </label> &nbsp;
              <input
                type="string"
                id="desc"
                className="input"
                value={descInput}
                onChange={onChangedescInput}
                placeholder="description"
              /> <br /><br />
              <label className="input-label" htmlFor="amount">
                Job
              </label> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <input
                type="string"
                id="job"
                className="input"
                value={jobInput}
                onChange={onChangejobInput}
                placeholder="description"
              />
              <button className='Fbutton' onClick={createData}>Submit</button>
            </Popup>

          </div> : <div>
            <p onClick={onClickLogin} className='btn ' style={{ backgroundColor: 'gray', color: "black",marginLeft:'10%' }}>login</p>
            <div className='posCard'>
              {transactionsList.map(item => {
                return <div className='cards'>
                  <p id="cardTitle">{item.title}</p>
                  <p id="cardText">{item.description}</p>
                  <Link to='/careers/careersdetails'><p id="viewJob" >{item.job}<img src={careerArrow} alt='careerArrow'></img></p></Link>
                </div>
              })}
            </div>
          </div>
          }
        </div>
      </section>
    </>
  )
}

export default Positions