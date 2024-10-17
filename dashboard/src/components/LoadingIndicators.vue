<template>

  <div v-if="authStore.isCheckingAuth" class="bg-gradient-to-r to-surface-100 from-primary-300 items-center my-20 p-3 rounded ring-1 ring-surface-300 flex gap-4 text-lg justify-center">
    <i class="fa-solid fa-spin fa-gear text-xl"></i>
    <span>Logging in...</span>
  </div>

</template>


<script setup>
import { useAuthStore } from '@/stores/auth.store';
const authStore = useAuthStore();
</script>
