import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

 const firebaseConfig = {
    apiKey: "AIzaSyAztlWdAcfegg9-iaBxtTNm1S5WYIpuigI",
    authDomain: "city-restaurant-app.firebaseapp.com",
    databaseURL: "https://city-restaurant-app-default-rtdb.firebaseio.com",
    projectId: "city-restaurant-app",
    storageBucket: "city-restaurant-app.appspot.com",
    messagingSenderId: "662779310984",
    appId: "1:662779310984:web:d5527bba66d90e74b7003d"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};