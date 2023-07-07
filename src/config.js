import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import {initializeApp} from "firebase/app"

const firebaseConfig = {

    apiKey: "AIzaSyCBV4gO-ykPcsoLpM1TwAF58KwHGeODV-8",
  
    authDomain: "myapp-4747c.firebaseapp.com",
  
    projectId: "myapp-4747c",
  
    storageBucket: "myapp-4747c.appspot.com",
  
    messagingSenderId: "960439113177",
  
    appId: "1:960439113177:web:c498c46b59231c24b175c8"
  
  };

  const app = initializeApp(firebaseConfig)

