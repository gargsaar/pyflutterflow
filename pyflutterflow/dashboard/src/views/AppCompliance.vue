<template>

<Editor v-model="value" editorStyle="height: 320px" />



</template>


<script setup>
import Editor from 'primevue/editor';
import { ref } from "vue";

const value = ref('');
</script>
