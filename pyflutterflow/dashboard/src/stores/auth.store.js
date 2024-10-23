import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirebaseErrorMessage,
  signInWithFirebase,
  signInWithGoogle,
  signOutWithFirebase,
  passwordResetEmail,
  updateProfileWithFirebase,
  firebaseEmailSignup,
} from "@/services/firebase";
import { getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import api from '@/services/api';

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    firebaseApp: null,
    firebaseAuth: null,
    user: null,
    accessToken: null,
    isCheckingAuth: false,
    authErrorMessage: null,
    showEmailVerificationModal: false,
    dashboardConfig: {},
    role: null
  }),

  getters: {
    displayName: (state) => {
      return state.user?.displayName;
    },
    email: (state) => {
      return state.user?.email;
    },
    checkingAuth: (state) => {
      return state.isCheckingAuth;
    },
    dateCreated: (state) => {
      return new Date(state.user.metadata.creationTime);
    },
    isAdmin: (state) => {
      return state.role === 'admin';
    }
  },

  actions: {

    async initializeFirebase() {
      if (!this.firebaseApp) {
        const { data } = await api.get('/configure');
        this.firebaseApp = initializeApp(data.firebase_config);
        this.firebaseAuth = getAuth(this.firebaseApp);
      }
    },

    async signIn(email, password) {
      try {
        const userCredential = await signInWithFirebase(email, password);
        await this.setUser(userCredential.user);
        await this.setRole();
        if (!this.isAdmin)
          throw new Error("You are not an admin.");
      }
      catch (error) {
        await this.signOut();
        this.authErrorMessage = 'You are not an admin.';
      }
    },

    async setRole() {
      const idTokenResult = await this.user.getIdTokenResult();
      this.role = idTokenResult?.claims?.role;
    },

    async emailSignUp(email, password) {
      try {
        const userCredential = await firebaseEmailSignup(email, password);
        await this.setUser(userCredential.user);
        this.emailVerificationSend();
      }
      catch (error) {
        console.log('Email signup error:', error.message);
        this.authErrorMessage = getFirebaseErrorMessage(error.code);
      }
    },

    async emailVerificationSend() {
      if (!this.user) {
        console.error('No user to send email verification to');
        return;
      }
      try {
        console.log('Sending Verification Email...');
        await sendEmailVerification(this.user);
        return { severity: 'success', summary: "We've sent you an email", detail: `We've resent a verification email to ${email}.`, life: 3000 }
      }
      catch (error) {
        console.error('Error sending verification email: ', error.message);
        const firebaseErrorMessage = getFirebaseErrorMessage(error.code);
        return { severity: 'error', summary: "Problem sending the verification email", detail: firebaseErrorMessage, life: 5000 }
      }
    },

    async googleSignIn() {
      try {
        const response = await signInWithGoogle();
        console.log("Login via Google was successful  😃");
        await this.setUser(response.user);
        await this.setRole();
        if (!this.isAdmin) {
          const error = new Error("You are not an admin.");
          error.code = 'auth/not-admin';
          throw error;
        }
      }
      catch (error) {
        this.authErrorMessage = getFirebaseErrorMessage(error.code);
        await this.signOut();
      }
    },


    async passwordReset(email) {
      try {
        await passwordResetEmail(email);
        return { severity: 'success', summary: "We've sent you an email", detail: `If the email ${email} exists in our database, you'll recieve an email with password reset instructions.`, life: 5000 }
      }
      catch (error) {
        console.log('Password reset error', error.message)
        return { severity: 'error', summary: 'Password', detail: `There was a problem resetting your password. Please try again.`, life: 3000 }
      }
    },

    async checkForAuthenticatedUser() {
      if (!this.firebaseAuth)
        await this.initializeFirebase()
      const auth = getAuth();
      this.isCheckingAuth = true;
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          await this.setUser(user);
          this.isCheckingAuth = false;
          unsubscribe();
          resolve();
        });
      });
    },

    async setUser(user) {
      this.user = user;
      if (user) {
        await user.reload();
        this.setEmailVerificationModal(!user.emailVerified);
        const token = await user.getIdToken();
        this.accessToken = token;
      }
    },

    async setEmailVerificationModal(value) {
      this.showEmailVerificationModal = value;
    },

    async updateUserProfile(payload) {
      try {
        await updateProfileWithFirebase(this.user, payload);
        return { severity: 'success', summary: 'Profile Updated', detail: `Your user profile was updated successfully.`, life: 3000 }
      }
      catch (error) {
        console.error('Profile update error:', error.message);
        return { severity: 'error', summary: 'Profile Update Failed', detail: `Something went wrong when trying to update your user profile. Please try again.`, life: 3000 }
      }
    },

    async getToken() {
      if (!this.user)
        return null;
      return await this.user.getIdToken();
    },

    async signOut() {
      await signOutWithFirebase();
      this.user = null;
    },

    async getDashboardConfig() {
      const { data } = await api.get('/configure');
      this.dashboardConfig = data;
      return data;
    }
  }

});


export default useAuthStore;
