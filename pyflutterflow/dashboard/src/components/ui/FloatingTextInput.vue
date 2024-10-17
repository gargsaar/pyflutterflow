<template>
  <div class="relative z-0 mb-6 w-full group">
    <input  v-model="formValue" :type="inputType" :name="identifier" :id="identifier"
      class="block py-2.5 px-0 w-full text-sm text-surface-900 bg-transparent border-0 border-b-2 border-surface-300 appearance-none dark:text-white dark:border-surface-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
      placeholder="" required />
    <label :for="identifier"
      class="absolute text-sm text-surface-500 dark:text-surface-0 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{{ label }}</label>
  </div>
</template>


<script setup>
import { computed } from 'vue';


const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  inputType: {
    type: String,
    default: 'text'
  },
  identifier: {
    type: String,
    default: 'floating_input',
  }
});

const formValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});


</script>
