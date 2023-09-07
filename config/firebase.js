import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Constants } from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCmW28otrj3kPtRsQEkzho7hOLVeVMAgQE",
  authDomain: "testexp-809e1.firebaseapp.com",
  projectId: "testexp-809e1",
  storageBucket: "testexp-809e1.appspot.com",
  messagingSenderId: "983281095718",
  appId: "1:983281095718:web:4683dff6919cd67df082e7",
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
