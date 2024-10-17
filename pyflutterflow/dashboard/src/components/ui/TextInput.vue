<template>
  <div class="flex flex-col gap-1">
    <div class="flex gap-2 items-center">
      <i v-if="icon" :class="icon" class="text-surface-400"  ></i>
      <label class="text-surface-500 dark:text-surface-100 text-sm" :for="identifier">{{ label }}</label>
    </div>
    <InputText :placeholder="placeholder" :type="inputType" v-model="formField" :aria-describedby="identifier" :disabled="disabled" :required="required" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import InputText from 'primevue/inputtext';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  identifier: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputType: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  }
});

const emit = defineEmits(["update:modelValue"]);

const formField = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});


</script>
