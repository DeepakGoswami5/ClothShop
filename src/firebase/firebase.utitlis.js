import firebase from '../../node_modules/firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAQeBw_MOlkAOnC2l4iwHeJgRB-RKUSjlI",
    authDomain: "shopping-db-69b86.firebaseapp.com",
    projectId: "shopping-db-69b86",
    storageBucket: "shopping-db-69b86.appspot.com",
    messagingSenderId: "664500372863",
    appId: "1:664500372863:web:a30d947fca240a0a32c64a",
    measurementId: "G-LEJR8HX9BR"
  };

export const createUserProfileDocument = async(userAuth,additionalData ) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName,email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;