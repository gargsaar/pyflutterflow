<template>
  <Menu v-if="authStore.user" :model="menuItems" :pt="sideNavStyles">
    <template #item="{ item, props }">
      <router-link  @click="sideBarVisible = false" :to="`/${item.collection_name}`" v-bind="props.action" class="!my-0 !py-4 flex gap-4"
        :class="`/${item.collection_name}` == route.path ? 'bg-surface-700' : ''">
        <i class="fa-solid fa-database"></i>
        <span v-bind="props.label">{{ item.display_name }} </span>
      </router-link>
    </template>
  </Menu>

  <router-link @click="sideBarVisible = false" :to="`/users`" class="!m-1 !px-3 !my-12 !py-3 flex gap-4 items-center" :class="`/users` == route.path ? 'bg-surface-700' : ''">
    <i class="fa-solid text-surface-0 fa-users"></i>
    <span class="text-surface-0" v-bind="props.label">Users</span>
  </router-link>

  <LoadingIndicators />
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
