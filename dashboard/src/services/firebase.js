import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCe0IOaSV1xAph_B5dvDgQ2LMn7BoBTDEg",
  authDomain: "appify-d2d36.firebaseapp.com",
  projectId: "appify-d2d36",
  storageBucket: "appify-d2d36.appspot.com",
  messagingSenderId: "641323310392",
  appId: "1:641323310392:web:09274031a1e2606838f5cd"
};

const firebaseInit = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseInit);

const signInWithFirebase = async (email, password) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

const firebaseEmailSignup = async (email, password) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

const signOutWithFirebase = async () => {
  return await signOut(firebaseAuth)
};

const signInWithGoogle =  async() => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  return await signInWithPopup(firebaseAuth, provider);
};

const passwordResetEmail = async (email) => {
  return await sendPasswordResetEmail(firebaseAuth, email);
}

const updateProfileWithFirebase = async (user, payload) => {
  return await updateProfile(user, {
    displayName: payload.displayName
  });
}

const getFirebaseErrorMessage = (firebaseMessage) => {
  switch (firebaseMessage) {
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/invalid-credential":
      return "These credentials are not valid";
    case "auth/user-not-found":
      return "User account not found";
    case "auth/invalid-email":
      return "Invalid email address";
    case "auth/missing-password":
      return "Please insert your password";
    case "auth/invalid-login-credentials":
      return "Invalid credentials";
    case "auth/email-already-in-use":
      return "This email address already in use";
    case "auth/too-many-requests":
      return "You have attempted this too many times in a short period of time. Please try again later.";
    default:
      return "There was a problem processing the request";
  }
};

export {
  signInWithFirebase,
  getFirebaseErrorMessage,
  signInWithGoogle,
  signOutWithFirebase,
  passwordResetEmail,
  updateProfileWithFirebase,
  firebaseEmailSignup
}
