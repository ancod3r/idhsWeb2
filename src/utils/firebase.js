import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0KWeZox6qb7r0NcjvOKYPMZSGVEtuNcE",
  authDomain: "testauth-11d72.firebaseapp.com",
  projectId: "testauth-11d72",
  storageBucket: "testauth-11d72.appspot.com",
  messagingSenderId: "649786751949",
  appId: "1:649786751949:web:a46fad15936486c1e6a284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
