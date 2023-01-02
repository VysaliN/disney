import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAO4S5-J1DY9iGxgwZ0S24EiClBphiMVi0",
  authDomain: "disney-3b205.firebaseapp.com",
  projectId: "disney-3b205",
  storageBucket: "disney-3b205.appspot.com",
  messagingSenderId: "596755552826",
  appId: "1:596755552826:web:e95c3ba77bb1fb2b76f303"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;

