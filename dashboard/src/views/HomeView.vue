<script setup>
import Button from 'primevue/button';
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
// import { useContentStore } from "@/stores/content.store";

// const contentStore = useContentStore();
// const contentData = computed(() => contentStore.content)
// contentStore.getContent()
const authStore = useAuthStore();

const username = computed(() => authStore.displayName || authStore.email);
</script>

<template>
   <h1 class="text-3xl">Hi {{ username }}</h1>
   <span class="text-surface-400">Welcome Back</span>
</template>
