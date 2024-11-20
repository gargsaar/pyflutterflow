<template>
   <h1 class="text-3xl">Hi {{ username }}</h1>
   <span class="text-surface-400">Welcome Back</span>
</template>


<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();

const username = computed(() => authStore.displayName || authStore.email);
</script>
