// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA8l7wpgEymifCdNerX1XNVNCR9I57clYw",
    authDomain: "kaytanet.firebaseapp.com",
    projectId: "kaytanet",
    storageBucket: "kaytanet.appspot.com",
    messagingSenderId: "792426451718",
    appId: "1:792426451718:web:00015dad8ff4d6ae3a4487",
    measurementId: "G-WBWM9BPYK1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
