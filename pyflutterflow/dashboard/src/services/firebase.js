import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { useAuthStore } from '@/stores/auth.store';


const signInWithFirebase = async (email, password) => {
  const authStore = useAuthStore();
  return await signInWithEmailAndPassword(authStore.firebaseAuth, email, password);
};

const firebaseEmailSignup = async (email, password) => {
  const authStore = useAuthStore();
  return await createUserWithEmailAndPassword(authStore.firebaseAuth, email, password);
};

const signOutWithFirebase = async () => {
  const authStore = useAuthStore();
  return await signOut(authStore.firebaseAuth)
};

const signInWithGoogle =  async() => {
  const authStore = useAuthStore();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  return await signInWithPopup(authStore.firebaseAuth, provider);
};

const passwordResetEmail = async (email) => {
  const authStore = useAuthStore();
  return await sendPasswordResetEmail(authStore.firebaseAuth, email);
}

const updateProfileWithFirebase = async (user, payload) => {
  const authStore = useAuthStore();
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
    case "auth/not-admin":
      return "You are not an admin";
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
