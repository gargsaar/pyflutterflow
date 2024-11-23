<template>

  <div v-if="authStore.user">


    <!-- Database tables -->
    <Menu class="!bg-surface-800 !border-surface-800" :model="menuItems">
      <template #item="{ item, props }">
        <router-link @click="sideBarVisible = false" :to="`/${item.collection_name}`" v-bind="props.action"
          class="!text-surface-0  !my-0 !py-3 flex gap-4 hover:!bg-surface-700" :class="`/${item.collection_name}` == route.path ? '!bg-surface-700' : ''">
          <i class="fa-solid fa-database"></i>
          <span v-bind="props.label">{{ item.display_name }} </span>
        </router-link>
      </template>
    </Menu>

    <!-- Firebase Users -->
    <router-link @click="sideBarVisible = false" :to="`/users`" class="!m-1 !px-3 !my-12 !py-3 flex gap-4 items-center"
      :class="`/users` == route.path ? 'bg-surface-700' : ''">
      <i class="fa-solid text-surface-0 fa-users"></i>
      <span class="text-surface-0" v-bind="props.label">Users</span>
    </router-link>

    <!-- App compliance -->
    <div>
      <router-link @click="sideBarVisible = false" :to="`/app-compliance/terms-and-conditions`"
        class="!m-1 !px-3 !mt-12 !py-3 flex gap-4 items-center"
        :class="`/app-compliance/terms-and-conditions` == route.path ? 'bg-surface-700' : ''">
        <i class="fa-solid text-surface-0 fa-file-signature"></i>
        <span class="text-surface-0" v-bind="props.label">Terms & Conditions</span>
      </router-link>
      <router-link @click="sideBarVisible = false" :to="`/app-compliance/privacy-policy`"
        class="!m-1 !px-3 !py-3 flex gap-4 items-center"
        :class="`/app-compliance/privacy-policy` == route.path ? 'bg-surface-700' : ''">
        <i class="fa-solid text-surface-0 fa-file-shield"></i>
        <span class="text-surface-0" v-bind="props.label">Privacy Policy</span>
      </router-link>
    </div>

    <LoadingIndicators />

  </div>
</template>


<script setup>

import { computed, onMounted } from 'vue';
import Menu from 'primevue/menu';
import { useRoute } from "vue-router";
import sideNavStyles from '@/presets/Aura/sidenavmenu'
import { useAuthStore } from '@/stores/auth.store';
import LoadingIndicators from '@/components/LoadingIndicators.vue';

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const authStore = useAuthStore();
const route = useRoute();

onMounted(async () => {
  await authStore.getDashboardConfig()
})

const sideBarVisible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const menuItems = computed(() => authStore.dashboardConfig.models)


</script>
