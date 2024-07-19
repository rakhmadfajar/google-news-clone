
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9Ho30SPpivEuh95yXy_Yx6nuFSIk23yM",
  authDomain: "news-clone-67de8.firebaseapp.com",
  projectId: "news-clone-67de8",
  storageBucket: "news-clone-67de8.appspot.com",
  messagingSenderId: "1016092843404",
  appId: "1:1016092843404:web:9958a9b8024bd607818aa9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();