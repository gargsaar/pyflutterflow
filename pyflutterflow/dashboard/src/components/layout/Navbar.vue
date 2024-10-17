<template>
  <div>
    <Menubar>
      <template #end>
        <div class="flex items-center gap-2">
          <div @click="toggle" v-if="authStore.user" class="card flex justify-center items-center gap-3 hover:cursor-pointer">
            <span class="text-xs">{{ authStore.user.displayName || authStore.user.email }}</span>
            <Avatar v-bind="avatarImage" :image="authStore.user.photoURL" shape="circle" />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import { useAuthStore } from '@/stores/auth.store';

const router = useRouter();
const authStore = useAuthStore();
const menu = ref();

const toggle = (event) => menu.value.toggle(event);

const avatarImage = computed(() => {
  return authStore.user.photoURL ? { image: authStore.user.photoURL } : { icon: 'fa-solid fa-user' }
});

const items = ref([
  {
    label: 'My Account',
    icon: 'fa-solid fa-user',
    command: async () => {
      router.push({ name: 'ProfileView' });
    }
  },
  {
    label: 'Logout',
    icon: 'fa-solid fa-right-to-bracket',
    command: async () => {
      console.log('Logging out...')
      await authStore.signOut();
      router.push({ name: 'LoginView' });
    }
  },
]);
</script>
