import React from 'react'
import Closebtn from '../../images/algohome32.svg'

function editpopup(props) {
    return (props.trigger) ?
    (<>
    
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
            <img onClick={() => props.setTrigger(false)}  className='close-btn' alt='close' src={Closebtn}></img>
        </div>
    </div>
    </>
    )
   :""
}

export default editpopup


