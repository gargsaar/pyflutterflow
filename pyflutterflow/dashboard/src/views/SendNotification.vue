<template>
  <div class=" my-6 w-full flex justify-between ">
    <div class="text-xl">
      <h1 class="text-2xl">Send a push notification </h1>
      <span class="text-sm text-surface-500">To all users</span>
    </div>
  </div>

  <form @submit.prevent="handleSendNotification" class="flex flex-col gap-6 mt-10 w-full mr-auto max-w-xl">
    <TextInput icon="fa-solid fa-heading" v-model="formData.title" identifier="titleField" inputType="title"
      label="Header" />

    <div class="flex flex-col gap-1">
      <label class="text-surface-500 dark:text-surface-100 text-sm" for="body">Body</label>
      <TextArea type="text" v-model="formData.body" aria-describedby="body" required />
    </div>

    <div>
      <Button type="submit" :icon="sending ? 'fa-solid fa-spin fa-cog' : 'fa-solid fa-location-arrow'"
        label="Send Notification" size="small" class=" w-full flex gap-2 px-6 mt-6" />
    </div>

  </form>

</template>


<script setup>
import { ref, reactive } from 'vue';
import Button from 'primevue/button';
import TextInput from '@/components/ui/TextInput.vue';
import TextArea from 'primevue/textarea';
import { useToast } from 'primevue/usetoast';
import { useAuthStore } from '@/stores/auth.store';
import { useConfirm } from "primevue/useconfirm";
import api from '@/services/api';

const authStore = useAuthStore();
const toast = useToast();
const sending = ref(false);
const confirm = useConfirm();

const formData = reactive({
  email: authStore.user.email,
  name: authStore.user.displayName,
});

const handleSendNotification = async () => {
  confirm.require({
    header: 'Confirm Send',
    message: 'Send this push notification to all users?',
    icon: 'fa-solid fa-exclamation-circle',
    rejectLabel: 'Cancel',
    confirmLabel: 'Confirm',
    accept: async () => {
      sending.value = true
      try {
        await api.post(`/notifications/send`, {
          title: formData.title,
          body: formData.body,
          deeplink_page_name: 'HomePage',
          recipient_ids: 'all'
        });
        toast.add({ severity: 'success', summary: 'Success', detail: 'Notification sent successfully', life: 3000 });
      }
      catch (error) {
        sending.value = false;
        console.log(error);
        toast.add({ severity: 'error', summary: 'Error', detail: error.message || 'Failed to send notification', life: 3000 });
        return;
      }
      sending.value = false;
    }
  });
}
</script>
