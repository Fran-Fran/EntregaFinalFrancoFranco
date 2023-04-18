import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP_dkjgPs5dfQvVYhvCFwC3H8vVpeJNj0",
  authDomain: "curso-react-49126.firebaseapp.com",
  projectId: "curso-react-49126",
  storageBucket: "curso-react-49126.appspot.com",
  messagingSenderId: "490275834689",
  appId: "1:490275834689:web:de74c9eae3ebae45b26fc0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;