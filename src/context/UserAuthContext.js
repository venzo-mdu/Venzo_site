// import React from "react"; 
// import { createContext,useEffect,useState, useContext } from "react";
// import { onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../firebase";

// const AuthContext = createContext();
// export function AuthProvider({ children }){
//     const[currentUser,setCurrentUser] = useState("")
//     const [loading, setLoading] = useState(true)

//     function signup(email,password,passwordConfirm){
//         console.log(email)
//         return createUserWithEmailAndPassword(auth,email,password,passwordConfirm)
//     }
//     function login(email,password){
//         return signInWithEmailAndPassword(auth,email,password)

//     }
//     const value ={ currentUser, signup, login }


//     useEffect(() => {
//         const unsubcribe = onAuthStateChanged(auth,(User) =>{
//             setCurrentUser(User);
//             setLoading(false)

//         });
//         return () => {
//             unsubcribe();
//         }
//     },[]);

//     return <AuthContext.Provider value={value} >
//         {!loading && children}
//         {/* { children} */}

//      </AuthContext.Provider>
// }

// export function useAuth(){
//     return useContext(AuthContext);
// }



import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../component/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const defaultContext = {
  currentUser: null,
}

export const AuthContext = createContext(defaultContext);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)

  function login(email, password) {
    console.log(email, "email login")
    localStorage.setItem("email", email)
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false)
      });
    
    
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export function useAuthValue(){
//   return useContext(AuthContext)
// }

export default AuthProvider;