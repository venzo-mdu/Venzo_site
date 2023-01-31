import React from 'react'
import Login from '../component/Login/login'
import { UserAuthContextProvider } from '../context/UserAuthContext';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const Logincontainer =() =>{
    return (
        <div>
            <BrowserRouter>
                {/* <UserAuthContextProvider> */}
                    <Routes>
                        <Route exact path='/login' element={<Login />}></Route>
                    </Routes>
                {/* </UserAuthContextProvider> */}
            </BrowserRouter>
        </div>
    )
}

export default Logincontainer