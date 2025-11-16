import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv3Dxh8fGeGNruMMWAMp8oGtNfYUQwzd8",
  authDomain: "zap-shifet.firebaseapp.com",
  projectId: "zap-shifet",
  storageBucket: "zap-shifet.firebasestorage.app",
  messagingSenderId: "1015183170666",
  appId: "1:1015183170666:web:f5b9060affcf488016be13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// npm install firebase
