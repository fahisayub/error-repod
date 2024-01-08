// Import the functions you need from the SDKs you need
//  import firebase from "firebase/compat/app";
//  import  "firebase/compat/storage";
import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
//  export const firebaseApp = firebase.initializeApp(firebaseConfig);
//  export const storage = firebase.storage();
export const firebaseApp =initializeApp(firebaseConfig);
export const storage=getStorage(firebaseApp)

// export const analytics = getAnalytics(firebaseApp);
// export const storage = getStorage(firebaseApp);

