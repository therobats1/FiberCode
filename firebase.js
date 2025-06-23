
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs8xVAa5BxCedXCQHOvarq2RzxM4Zrn9Q",
  authDomain: "database-83393.firebaseapp.com",
  projectId: "database-83393",
  storageBucket: "database-83393.appspot.com",
  messagingSenderId: "884254030425",
  appId: "1:884254030425:ios:929af828a1a2f07c2a0f48"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
