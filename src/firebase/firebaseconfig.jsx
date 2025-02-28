import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEptTdB3vbsaPxjp2ItN1pF7qzzzR3MOM",  // 👈 Paste the correct API Key
  authDomain: "linkup-38303.firebaseapp.com",  // 👈 Replace with your project ID
  projectId: "linkup-38303",
  storageBucket: "linkup-38303.appspot.com",
  messagingSenderId: "650150162965",
  appId: "1:650150162965:web:0c40afc3b47a70ab88541c",  // 🔹 Find this in Firebase under "Firebase SDK snippet"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
