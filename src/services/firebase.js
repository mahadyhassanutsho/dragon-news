import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2TLn7qlr4x_G5vXCHJkFmaU4Xecfns00",
  authDomain: "dragon-news-7c850.firebaseapp.com",
  projectId: "dragon-news-7c850",
  storageBucket: "dragon-news-7c850.firebasestorage.app",
  messagingSenderId: "990933066407",
  appId: "1:990933066407:web:010b3f11698a3592857182",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (displayName, photoURL, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await updateProfile(user, {
    displayName,
    photoURL,
  });

  return user;
};

export const logoutUser = () => signOut(auth);

export const subscribeToAuth = (observerFunction) => {
  const unsubscribe = onAuthStateChanged(auth, observerFunction);
  return unsubscribe;
};
