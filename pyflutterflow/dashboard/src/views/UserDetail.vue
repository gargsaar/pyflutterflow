<template>


  <div v-if="userStore.loading" class="flex justify-center items-center md:h-64">
      <ProgressSpinner style="width: 60px; height: 60px" strokeWidth="5" />
    </div>

  <div v-else-if="user" class="w-full ">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-xl">{{ user.display_name }}</span>
        <span class="text-xs text-surface-400">{{ user.uid }}</span>
      </div>
      <img :src="user.photo_url" alt="user photo" class="rounded-full w-24 h-24" />
    </div>

    <span class="text">{{ user.email }}</span>
    <Badge v-if="currentRole == 'admin'" class="ml-3">Admin</Badge>

    <div class="flex flex-col md:flex-row justify-between mt-32">
      <div class="flex flex-col justify-end">
        <span class="text-xs text-surface-600">Last login was  </span> <span class="text-sm text-surface-800">{{ formatDate(user.last_login_at) }}</span>
        <br>
        <span class="text-xs text-surface-600">Joined  </span> <span class="text-sm text-surface-800">{{ formatDate(user.created_at) }}</span>
      </div>
      <div v-if="!!roles" class="flex flex-col justify-end">
        <Select v-model="selectedRole" :options="roles" optionLabel="label" placeholder="Select a Role" class="w-full md:w-56" />
        <Button size="small" icon="fas fa-user-shield text-surface-0" @click="handleSetRole(user.uid)" :label="isLoading ? 'Setting role...' : 'Set Role'" :loading="isLoading" class="mt-4" />
      </div>
    </div>
    <div class="flex justify-start mt-16">
      <Button size="small" @click="handleDeleteUser(user.uid)" severity="error" icon="fas fa-user-slash text-surface-0" label="Delete User" class="mt-4 !border-none !bg-red-500" />
    </div>

  </div>


</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user.store'
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Badge from 'primevue/badge';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from "primevue/useconfirm";
import { useRoute, useRouter } from 'vue-router';
import { format } from 'date-fns';
import { useAuthStore } from '@/stores/auth.store';
import Select from 'primevue/select';


const authStore = useAuthStore();
const roles = ref({})
const route = useRoute();
const router = useRouter();
const confirm = useConfirm();
const toast = useToast();
const selectedRole = ref(null);
const isLoading = ref(false);

const userStore = useUserStore();
userStore.getUserByUid(route.params.uid)

onMounted(async() => {
  await loadData();
});

const defaultRoles = [
  {
    name: 'admin',
    label: 'Admin'
  },
  {
    name: 'authenticated',
    label: 'User'
  }
]

const loadData = async() => {
  roles.value = authStore.dashboardConfig.roles || defaultRoles
}


const handleSetRole = async (userId) => {
  confirm.require({
    header: `Set this user's role to ${selectedRole.value.label}?`,
    message: 'Be careful when setting roles, only grant this to trusted users.',
    icon: 'fa-solid fa-exclamation-circle',
    rejectLabel: 'Cancel',
    confirmLabel: 'Confirm',
    accept: async () => {
      isLoading.value = true
      const toastResponse = await userStore.setUserRole(userId, selectedRole.value.name)
      isLoading.value = false
      toast.add(toastResponse);
      await userStore.getUserByUid(route.params.uid)
    }
  });
}


const handleDeleteUser = async (userId) => {
  confirm.require({
    header: `Delete this user?`,
    message: `User '${userId}' will be permanently deleted from both Firebase and Supabase. This may have unintended consequences and is not reversible.`,
    icon: 'fa-solid fa-exclamation-circle',
    rejectLabel: 'Cancel',
    confirmLabel: 'Delete user',
    accept: async () => {
      const toastResponse = await userStore.deleteUser(userId, 'admin')
      toast.add(toastResponse);
      await router.push('/firebase-users')
    }
  });
}

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  return format(new Date(+timestamp), 'EEEE, d MMMM yyyy');
}

const user = computed(() => userStore.currentUser)

const currentRole = computed(() => {
  if (userStore.currentUser.custom_attributes) {
    return JSON.parse(userStore.currentUser.custom_attributes).role
  }
})


</script>
