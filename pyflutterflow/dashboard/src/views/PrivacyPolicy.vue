<template>

  <div class="flex justify-between mb-6">
    <h1 class="text-2xl">Privacy Policy</h1>
    <Button @click="saveChanges" label="Save" type="button" severity="info" icon="fas fa-save" />
  </div>

  <div id="app">
    <quill-editor v-model:content="complianceStore.privacyPolicyHTML" contentType="html" theme="snow"></quill-editor>
  </div>
</template>


<script setup>
import Button from 'primevue/button';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useComplianceStore } from '@/stores/compliance.store';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const complianceStore = useComplianceStore();


complianceStore.getPrivacyPolicyHTML()

const saveChanges = async () => {
  const toastResponse = await complianceStore.updatePrivacyPolicyHTML()
  toast.add(toastResponse)
}


</script>
