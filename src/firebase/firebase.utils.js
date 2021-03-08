import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCElmvwn0I-IrxBEavHFz7X5m2suT7WOgI",
  authDomain: "fits-47edf.firebaseapp.com",
  projectId: "fits-47edf",
  storageBucket: "fits-47edf.appspot.com",
  messagingSenderId: "605985667393",
  appId: "1:605985667393:web:0e3004d4e42f07ccba89c0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,createdAt,...additionalData
      })
    } catch (error) {
      console.log('error creating user',error.message)
    }
  }

  return userRef;

}

  // Initialize Firebase
firebase.initializeApp(config);
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;