<template>

  <span class="text-right text-surface-600 dark:text-surface-50 text-xs hover:cursor-pointer hover:text-primary-700 hover:dark:text-surface-200"
    @click="visible = true">Reset password</span>

  <Dialog v-model:visible="visible" modal header="Reset Password" :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <form @submit.prevent="handlePasswordReset">
      <span class="text-sm text-surface-500 dark:text-surface-200">Enter your email to reset your
        password</span>
      <InputGroup class="">
        <InputText type="email" v-model="email" placeholder="joe@example.com" required />
        <Button type="submit" :icon="sending ? 'fa-solid fa-spin fa-cog' : 'fa-solid fa-key'" severity="warning" />
      </InputGroup>
    </form>
  </Dialog>

</template>


<script setup>
import { useAuthStore } from '@/stores/auth.store';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const authStore = useAuthStore();
const visible = ref(false);
const email = ref('');
const sending = ref(false);
const toast = useToast();


const handlePasswordReset = async () => {

  sending.value = true;
  const toastResponse = await authStore.passwordReset(email.value)
  toast.add(toastResponse);

  sending.value = false;
  visible.value = false;
}

</script>
