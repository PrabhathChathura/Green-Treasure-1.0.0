
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyD1JDxm4Q5dOOEdg2QL4tLL0epZYi946Ng",
  authDomain: "green-treasure-8fe17.firebaseapp.com",
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


const analytics = getAnalytics(app);

export default app;