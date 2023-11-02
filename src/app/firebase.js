// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIjcfE4gAFPUph1XyKfI9byT87kvJ_p_M",
  authDomain: "ttvp-2eca4.firebaseapp.com",
  projectId: "ttvp-2eca4",
  storageBucket: "ttvp-2eca4.appspot.com",
  messagingSenderId: "1035540483534",
  appId: "1:1035540483534:web:3575d76a01158b9a896f9f",
  measurementId: "G-8F31P82NQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);