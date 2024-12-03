<template>
  <div class="flex flex-col gap-1 md:gap-3 mt-2 md:mt-4">
    <img src="@/assets/images/logo.png" alt="logo image" class="mx-auto w-20 dark:invert" />
    <form @submit.prevent="handleLoginSubmit" class="flex flex-col gap-2 md:gap-3 mt-2">
      <div class="flex items-center gap-2 text-surface-400 justify-center">
        <i class="fa-solid fa-user text-sm"></i>
        <h2 class="text-surface-400 text-center text-xs md:text-sm font-display">Please login to continue</h2>
      </div>

      <TextInput placeholder="john@example.com" v-model="formData.email" identifier="emailField" inputType="email" label="Email" class="text-sm" />
      <TextInput placeholder="Enter your password..." v-model="formData.password" identifier="passwordField" inputType="password" label="Password" class="text-sm" />

      <PasswordResetModal />

      <div>
        <Button :label="authenticating ? 'Authenticating...' : 'Log in'" type="submit" class="w-full !py-2"
          :icon="`fa-solid ${authenticating ? 'fa-solid fa-spin fa-cog' : 'fa-user'}`" size="small" />
        <div v-if="loginError" class="flex items-center gap-2 text-xs m-1 text-error">
          <i class="fa-solid fa-exclamation-circle"></i>
          <span>{{ loginError }}</span>
        </div>
      </div>

    </form>

    <Divider type="dotted" align="center" class="!my-2">
      <span class="text-xs mx-2">or</span>
    </Divider>

    <Button @click="handleGoogleLogin" label="Continue with Google" type="button" severity="secondary" size="small"
      outlined class="!py-2" :icon="`${authenticating ? 'fa-solid fa-spin fa-cog' : 'fa-brands fa-google'}`" />
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth.store';
import TextInput from '@/components/ui/TextInput.vue';
import { useRoute, useRouter } from 'vue-router';
import Divider from 'primevue/divider';
import PasswordResetModal from '@/components/auth/PasswordResetModal.vue';

const authenticating = ref(false);
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const loginError = computed(() => authStore.authErrorMessage);

const formData = ref({
  email: '',
  password: ''
});

onMounted(async () => {
  route.query.redirect ? router.push(route.query.redirect) : router.push("/");
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

const handleLoginSubmit = async () => {
  console.log('logging in...')
  authenticating.value = true;
  await authStore.signIn(formData.value.email, formData.value.password);
  await checkAuthToken();
  authenticating.value = false;
}

const handleGoogleLogin = async () => {
  authenticating.value = true;
  await authStore.googleSignIn();
  await checkAuthToken();
  authenticating.value = false;
}


</script>
