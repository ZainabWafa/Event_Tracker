import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCRsWvRDSSXJKiDjHVS1wt7oZmKFm93ISY",
  authDomain: "eventtracker-1bbe2.firebaseapp.com",
  projectId: "eventtracker-1bbe2",
  storageBucket: "eventtracker-1bbe2.appspot.com",
  messagingSenderId: "420985177549",
  appId: "1:420985177549:web:ea0dbd53d11678babcb084",
  measurementId: "G-82FB9HK55T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export default app;
// export default fireDb.database().ref();

