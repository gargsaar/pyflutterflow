<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import Layout from '@/components/layout/Layout.vue'
import Toast from 'primevue/toast';
import { useAuthStore } from '@/stores/auth.store';
import EmailVerificationModal from '@/components/auth/EmailVerificationModal.vue';
import api from '@/services/api';

onBeforeMount(async () => {
  const authStore = useAuthStore();
  // const { data } = await api.get('/getconf');
  await authStore.initializeFirebase();
})


</script>

<template>

  <Toast />
  <EmailVerificationModal />
  <Layout>
    <RouterView :key="$route.fullPath" />
  </Layout>

</template>
