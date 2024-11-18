<template>


  <div v-if="user" class="">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-xl">{{ user.display_name }}</span>
        <span class="text-xs text-surface-400">{{ user.uid }}</span>
      </div>
      <img :src="user.photo_url" alt="user photo" class="rounded-full w-24 h-24" />
    </div>

    <span class="text">{{ user.email }}</span>

    <div class="flex justify-between mt-32">
      <div class="flex flex-col">
        <span>Last login was {{ formatDate(user.last_login_at) }}</span>
        <span>User registered on {{ formatDate(user.created_at) }}</span>
      </div>
      <div class="flex flex-col">
        <Button icon="fas fa-user-shield text-surface-600" v-if="!isAdmin" @click="handleMakeAdmin(user.uid)" label="Make Admin" class="mt-4" />
        <Button v-else  @click="handleRevokeAdmin(user.uid)" label="Revoke admin privilages" class="mt-4" />
      </div>
    </div>
  </div>

  <div v-else-if="userStore.isLoading">
    <ProgressSpinner style="width: 60px; height: 60px" strokeWidth="5" />
  </div>


</template>

<script setup>

import { computed } from 'vue'
import { useUserStore } from '@/stores/user.store'
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from "primevue/useconfirm";
import { useRoute } from 'vue-router';
import { format } from 'date-fns';


const route = useRoute();
const confirm = useConfirm();
const toast = useToast();

const userStore = useUserStore();
userStore.getUserByUid(route.params.uid)

const handleMakeAdmin = async (userId) => {
  confirm.require({
    header: 'Make this user an administator?',
    message: 'Admins can do anything, so only grant this to trusted users.',
    icon: 'fa-solid fa-exclamation-circle',
    rejectLabel: 'Cancel',
    confirmLabel: 'Confirm',
    accept: async () => {
      const toastResponse = await userStore.setUserRole(userId, 'admin')
      toast.add(toastResponse);
      await userStore.getUserByUid(route.params.uid)
    }
  });
}

const handleRevokeAdmin = async (userId) => {
  confirm.require({
    header: 'Revoke admin privilages?',
    message: 'This user will no longer have administrator rights.',
    icon: 'fa-solid fa-exclamation-circle',
    rejectLabel: 'Cancel',
    confirmLabel: 'Confirm',
    accept: async () => {
      const toastResponse = await userStore.setUserRole(userId, 'user')
      toast.add(toastResponse);
      await userStore.getUserByUid(route.params.uid)
    }
  });
}

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  return format(new Date(+timestamp), 'EEEE, d MMMM yyyy');
}

const user = computed(() => userStore.currentUser)

const isAdmin = computed(() => {
  if (userStore.currentUser.custom_attributes) {
    return JSON.parse(userStore.currentUser.custom_attributes).role == 'admin'
  }
})


</script>
