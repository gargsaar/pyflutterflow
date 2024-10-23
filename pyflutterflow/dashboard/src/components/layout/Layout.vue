<template>

  <div class="flex h-screen antialiased">

    <div class="md:hidden w-full ">
      <Drawer v-model:visible="visible">
        <template #header>
          <img src="@/assets/images/logo.png" alt="logo image" class="w-12 dark:invert rounded" />
        </template>
        <Sidenav v-model="visible" />
      </Drawer>
      <div class="flex justify-between items-center">
        <Button icon="fa-solid fa-bars" class="m-3 " text size="large" @click="visible = true" severity="secondary" rounded
        aria-label="menu" />
        <Navbar class="md:hidden w-full" />
      </div>
      <div class="flex flex-1 overflow-auto ">

        <main class="p-3 md:p-5 w-full ">
          <slot />
        </main>
      </div>
    </div>

    <div class="fixed inset-0 z-50 hidden md:flex">
      <div class="flex flex-col lg:w-72 xl:w-80 text-surface-0 bg-surface-800 dark:bg-surface-800">
        <div class="flex h-full flex-col overflow-y-auto border-r md:p-5">
          <div class="mb-10 flex items-center rounded-lg">
            <router-link to="/">
              <div class="flex justify-between items-center">
                <img src="@/assets/images/logo.png" alt="logo image" class="dark:invert w-12 rounded" />
                <div class="flex flex-col p-3">
                  <span class="font-bold">Flutterflow </span>
                  <span class="text-sm"> Admin</span>
                </div>
              </div>
            </router-link>
          </div>
          <Sidenav />
        </div>
      </div>
      <div class="flex flex-col flex-1 overflow-auto">
        <Navbar class="hidden md:block w-full" />
        <main class="p-5 md:px-16 lg:px-32">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>


<script setup>
import Sidenav from '@/components/layout/Sidenav.vue';
import Drawer from 'primevue/drawer';

import Button from 'primevue/button';
import Navbar from '@/components/layout/Navbar.vue';
import { ref } from 'vue';

const visible = ref(false);
</script>
