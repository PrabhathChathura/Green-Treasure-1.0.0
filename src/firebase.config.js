//firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1JDxm4Q5dOOEdg2QL4tLL0epZYi946Ng",
  authDomain: "green-treasure-8fe17.firebaseapp.com",
  databaseURL: "https://green-treasure-8fe17-default-rtdb.asia-southeast1.firebasedatabase.app/", 
  projectId: "green-treasure-8fe17",
  storageBucket: "green-treasure-8fe17.appspot.com",
  messagingSenderId: "388247449386",
  appId: "1:388247449386:web:24f861040d8c04d93bf853",
  measurementId: "G-D58P87CNPW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);

export const checkAdminStatus = async (uid) => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data().role === 'admin';
  }
  return false;
};

const analytics = getAnalytics(app);

export default app;