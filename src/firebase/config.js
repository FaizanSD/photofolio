import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEa-VCZDBco8W5cmAg0-9xDFiBUL17Ka8",
  authDomain: "photofolio-fixa.firebaseapp.com",
  projectId: "photofolio-fixa",
  storageBucket: "photofolio-fixa.appspot.com",
  messagingSenderId: "207948596269",
  appId: "1:207948596269:web:3bcbaf49ad0879af3e64a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
