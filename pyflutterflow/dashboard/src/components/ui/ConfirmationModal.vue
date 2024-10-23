<template>
  <ConfirmDialog>
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md">
        <div
          class="rounded-full bg-green-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]">
          <i class="fas fa-exclamation-circle text-5xl"></i>
        </div>
        <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
        <p class="mb-0">{{ message.message }}</p>
        <div class="flex items-center gap-2 mt-4">
          <Button :label="message.rejectLabel" outlined @click="rejectCallback" class="w-[8rem]"></Button>
          <Button severity="info" :label="message.confirmLabel" @click="acceptCallback" class="w-[8rem]"></Button>
        </div>
      </div>
    </template>
  </ConfirmDialog>
</template>

<script setup>
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';

</script>
