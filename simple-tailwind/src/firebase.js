import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   //firebase database
//   apiKey: "AIzaSyBLxI4c7O1WavN_kqfpFDU1jprX5kFsINY",
//   authDomain: "devs-app-c565b.firebaseapp.com",
//   databaseURL: "https://devs-app-c565b-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "devs-app-c565b",
//   storageBucket: "devs-app-c565b.appspot.com",
//   messagingSenderId: "62409952015",
//   appId: "1:62409952015:web:3b6a02129d64dbf46a0c7a"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA-tyxMXL5-GoK6rfA0fFVvAaDsZldIo9A",
	authDomain: "my-app-6756c.firebaseapp.com",
	projectId: "my-app-6756c",
	storageBucket: "my-app-6756c.appspot.com",
	messagingSenderId: "1056665821434",
	appId: "1:1056665821434:web:aebe33920c472d31662943",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db inside app
export const db = getFirestore(app);

// Authentication
export const auth = getAuth();

// Initialize storage
export const storage = getStorage(app);
