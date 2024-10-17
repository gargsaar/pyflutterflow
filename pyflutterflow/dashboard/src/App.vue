<script setup>
import { RouterView } from 'vue-router'
import Layout from '@/components/layout/Layout.vue'
import Toast from 'primevue/toast';
import EmailVerificationModal from '@/components/auth/EmailVerificationModal.vue';
</script>

<template>

  <Toast />
  <EmailVerificationModal />
  <Layout>
    <RouterView />
  </Layout>

</template>
