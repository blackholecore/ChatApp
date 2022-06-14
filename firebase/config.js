import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from '@firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDmGtZyoeOoyPs3Snt5cj3m3q20qrmFd7M',
    authDomain: 'messenger-3eba2.firebaseapp.com',
    projectId: 'messenger-3eba2',
    storageBucket: 'messenger-3eba2.appspot.com',
    messagingSenderId: '466557802374',
    appId: '1:466557802374:web:ff0c9d5468509603773e07',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider(app);
const facebookProvider = new FacebookAuthProvider(app);

export { auth, googleProvider, facebookProvider, storage };
export default db;
