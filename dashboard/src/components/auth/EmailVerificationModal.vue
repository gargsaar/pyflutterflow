<template>
  <div class="flex justify-center">
    <Dialog :blockScroll="true" :close-on-escape="false" :closable="false" v-model:visible="visible" modal
      class="w-full p-3 max-w-3xl bg-primary-900">

      <template #header>
        <div class="flex justify-between w-full">
          <div class="flex items-center  gap-5">
            <i class="fa-solid fa-envelope text-xl text-surface-500"></i>
            <h1 class="text-xl font-bold">Please verify your email address</h1>
          </div>
          <Button @click="handleLogout" label="Logout" text />
        </div>
      </template>

      <div class="space-y-8">
        <p v-if="authStore.user">
          We've sent an email to {{ authStore.user.email }}. Please click the link in this email to gain
          access to your dashboard.
        </p>

        <div class="flex gap-10">
          <Button label="Resend Email" @click="resendVerificationEmail" size="small" icon="fa-solid fa-inbox" />
          <Button severity="info" label="Done" @click="recheckEmailVerified" size="small"
            :icon="loading ? 'fa-solid fa-spin fa-cog' : 'fa-solid fa-check'" />
        </div>
      </div>

    </Dialog>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

import { useAuthStore } from '@/stores/auth.store';


const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const visible = computed(() => authStore.showEmailVerificationModal);
const loading = computed(() => authStore.checkingAuth);  // is this getter needed?

const resendVerificationEmail = async () => {
  const toastResponse = await authStore.emailVerificationSend();
  toast.add(toastResponse);
}

const recheckEmailVerified = async () => {
  await authStore.checkForAuthenticatedUser();
  if (authStore.user && !authStore.user.emailVerified) {
    console.log('Email not verified yet');
    toast.add({ severity: 'info', summary: "Email not verified", detail: "It appears that you have not yet verified your email address. Please check your inbox.", life: 5000 })
  }
  else {
    router.push({ name: 'HomeView' })
  }
}

const handleLogout = async () => {
  await authStore.signOut();
  router.push({ name: 'LoginView' });
}


</script>
