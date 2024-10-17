<template>
  <div class="flex items-center justify-center">
    <div class="my-10 px-4 md:p-10 rounded-lg py-2 md:rounded-md md:shadow-xl  bg-surface-50">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-primary-600 text-5xl">404</h1>
        <p class="mb-2 text-2xl font-bold text-center text-surface-800 md:text-3xl">
           Page not found
        </p>
        <p class="mb-8 text-center text-surface-500 md:text-lg">
          The page you're looking for doesn't exist.
        </p>

        <router-link to="/">
          <Button icon="pi pi-backward" label="Back to home" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';

</script>
