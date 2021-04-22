import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCZGFEMW43DS8al-a59twGYJu0DdEneHFY",
    authDomain: "crwn-db-3619b.firebaseapp.com",
    projectId: "crwn-db-3619b",
    storageBucket: "crwn-db-3619b.appspot.com",
    messagingSenderId: "615518766992",
    appId: "1:615518766992:web:3d1d439fb273b94ed01515",
    measurementId: "G-HRDJK8J3KC"
  }
firebase.initializeApp(config);

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
    });
    } catch (error) {
    console.log('error creating user', error.message);
    }
}

return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;