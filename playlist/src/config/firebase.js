import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARPhFKa86XbFCglZL-zViQPe7db7cfGt8",
  authDomain: "test-mock-352a2.firebaseapp.com",
  projectId: "test-mock-352a2",
  storageBucket: "test-mock-352a2.appspot.com",
  messagingSenderId: "271231442832",
  appId: "1:271231442832:web:38ed2557b04976f9e15d15",
  measurementId: "G-7FKEJ7ZPB0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
