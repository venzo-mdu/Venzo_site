// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyC6XJ9TTMi-Q2ea3cAynGr9pG_YZQMheP4",
//     authDomain: "devtraining-2ec83.firebaseapp.com",
//     projectId: "devtraining-2ec83",
//     storageBucket: "devtraining-2ec83.appspot.com",
//     messagingSenderId: "642377465042",
//     appId: "1:642377465042:web:1d406a78a39f30d5a8c10b",
//     measurementId: "G-7W7TK0VXJN"
  
// };

// const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app);
// export default app;
// export const db =getFirestore(app);
// export const storage = getStorage(app);



import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC6XJ9TTMi-Q2ea3cAynGr9pG_YZQMheP4",
    authDomain: "devtraining-2ec83.firebaseapp.com",
    projectId: "devtraining-2ec83",
    storageBucket: "devtraining-2ec83.appspot.com",
    messagingSenderId: "642377465042",
    appId: "1:642377465042:web:1d406a78a39f30d5a8c10b",
    measurementId: "G-7W7TK0VXJN"
  
};


let app
let auth
let db
// const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app);
// export default app;
// export const db =getFirestore(app);
// export const storage = getStorage(app);
if (typeof window !== "undefined") {
  app = app || initializeApp(firebaseConfig);
  auth = getAuth(app);
  db =getFirestore(app);
}

export { auth, onAuthStateChanged,db };