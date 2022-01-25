import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCRsWvRDSSXJKiDjHVS1wt7oZmKFm93ISY",
    authDomain: "eventtracker-1bbe2.firebaseapp.com",
    databaseURL: "https://eventtracker-1bbe2-default-rtdb.firebaseio.com",
    projectId: "eventtracker-1bbe2",
    storageBucket: "eventtracker-1bbe2.appspot.com",
    messagingSenderId: "420985177549",
    appId: "1:420985177549:web:ea0dbd53d11678babcb084",
    measurementId: "G-82FB9HK55T"

  
};
 
export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   
   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
    
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;