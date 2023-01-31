import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react'
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

import AuthProvider from "./src/context/UserAuthContext";

export const wrapRootElement = ({ element }) => (
    <AuthProvider >
        {element}
    </AuthProvider>
); 

