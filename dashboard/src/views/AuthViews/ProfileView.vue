<template>
  <div class="flex flex-col gap-6 mt-10 max-w-lg justify-center mx-auto">

    <div class="flex justify-between">
      <Avatar v-bind="avatarImage" :image="authStore.user.photoURL" size="larger" shape="circle" />
      <div>
        <h1 class="text-3xl text-right">My Account</h1>
        <small class="text-surface-400">Member since: {{ readableValidSince }}</small>
      </div>
    </div>

    <form @submit.prevent="updateUserProfile" class="flex flex-col gap-6 mt-10">
      <TextInput disabled icon="fa-solid fa-at" v-model="formData.email" identifier="emailField" inputType="email"
        label="Email" />
      <TextInput v-model="formData.name" icon="fa-solid fa-signature" identifier="nameField" inputType="text"
        label="Full Name" />

      <div>
        <Button type="submit" :icon="loading ? 'fa-solid fa-spin fa-cog' : 'fa-solid fa-user-check'" label="Update Profile"
          size="small" class="flex gap-2 px-6" />
      </div>

    </form>

  </div>
</template>


<script setup>
import { reactive, ref, computed } from 'vue';
import TextInput from '@/components/ui/TextInput.vue';
import Button from 'primevue/button';
import Avatar from "primevue/avatar";
import { useAuthStore } from '@/stores/auth.store';
import { useToast } from "primevue/usetoast";



const toast = useToast();
const authStore = useAuthStore();
const loading = ref(false);

const avatarImage = computed(() => {
  return authStore.user.photoURL ? { image: authStore.user.photoURL } : { icon: 'fa pi-user' }
});

const formData = reactive({
  email: authStore.user.email,
  name: authStore.user.displayName,
});

const updateUserProfile = async () => {
  loading.value = true;
  const payload = {
    displayName: formData.name,
  }
  const toastResponse = await authStore.updateUserProfile(payload)
  toast.add(toastResponse);
  loading.value = false;
};

const readableValidSince = computed(() => {
  return authStore.dateCreated.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

</script>
