<template>
  <img src="@/assets/images/logo.png" alt="logo image" class="mx-auto w-32 dark:invert" />

  <form @submit.prevent="handleSignupSubmit" class="flex flex-col gap-2 md:gap-6 mt-3 md:mt-10">
    <div class="flex items-center gap-3 text-surface-400 justify-center">
      <i class="fa-solid fa-user-plus"></i>
      <h2 class="text-surface-400 text-center text-xs md:text-base font-display">Sign up for a new account</h2>
    </div>

    <div class="flex flex-col gap-3 md:gap-6 mt-2 md:mt-10">
      <TextInput placeholder="john@example.com" v-model="formData.email" identifier="emailFieldsu" inputType="email"
        label="Email" required />
      <TextInput placeholder="Choose a password..." v-model="formData.password" identifier="passwordFieldsu"
        inputType="password" label="Password" required />

      <Button label="Register" :icon="`fa-solid ${authenticating ? 'fa-solid fa-spin fa-cog' : 'fa-user'}`"
        type="submit" size="small" />
      <div v-if="loginError" class="flex items-center gap-3 text-xs m-1 text-error">
        <i class="fa-solid fa-exclamation-circle"></i>
        <span>{{ loginError }}</span>
      </div>

      <div v-if="authStore.authErrorMessage" class="flex items-center gap-3 text-sm text-error">
        <i class="fa-solid fa-exclamation-circle"></i>
        <span>{{ authStore.authErrorMessage }}</span>
      </div>

      <span class="text-xs text-surface-600 dark:text-surface-50">Already have an account?
        <router-link :to="{ name: 'LoginView' }"
          class="font-bold hover:text-primary-700 dark:hover:text-primary-200">Log in</router-link>
      </span>

      <Divider type="dotted" align="center">
        <span class="text-xs mx-2">or</span>
      </Divider>

      <Button @click="handleGoogleSignup" label="Continue with Google" type="button" severity="secondary" size="small"
        outlined icon="fa-brands fa-google" />
    </div>
  </form>
</template>


<script setup>
import { reactive, ref } from 'vue';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth.store';
import TextInput from '@/components/ui/TextInput.vue';
import { useRoute, useRouter } from 'vue-router';
import Divider from 'primevue/divider';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const authenticating = ref(false);
const loginError = ref(null);

const formData = reactive({
  email: '',
  password: ''
});


const checkAuthToken = async () => {
  if (authStore.checkForAuthenticatedUser) {
    console.log("Login successful  😃");
    route.query.redirect ? router.push(route.query.redirect) : router.push("/");
  }
  else {
    let authToken = await authStore.getToken();
    if (authToken)
      route.query.redirect ? router.push(route.query.redirect) : router.push("/");
  }
}

const handleSignupSubmit = async () => {
  console.log(`Attempting to registering new user ${formData.email}...`)
  authenticating.value = true;
  loginError.value = await authStore.emailSignUp(formData.email, formData.password);
  await checkAuthToken();
  authenticating.value = false;
}

const handleGoogleSignup = async () => {
  authenticating.value = true;
  await authStore.googleSignIn();
  await checkAuthToken();
  authenticating.value = false;
}



</script>
