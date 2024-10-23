<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import Layout from '@/components/layout/Layout.vue'
import Toast from 'primevue/toast';
import { useAuthStore } from '@/stores/auth.store';
import EmailVerificationModal from '@/components/auth/EmailVerificationModal.vue';
import ConfirmModal from '@/components/ui/ConfirmationModal.vue';

onBeforeMount(async () => {
  const authStore = useAuthStore();
  await authStore.initializeFirebase();
})

</script>

<template>

  <Toast />
  <EmailVerificationModal />
  <ConfirmModal />
  <Layout>
    <RouterView :key="$route.fullPath" />
  </Layout>

</template>
