<template>
  <div v-if="!!users">
      <h1 class="text-xl my-6">Users</h1>
      <div>
          <ul v-if="users && users.length > 0" >
              <li v-for="user in users" :key="user.uid">
                  <router-link class="w-full outline" :to="`/users`">
                      <div class="flex flex-col outline outline-1 outline-surface-200 rounded-lg shadow p-3 my-3 hover:shadow-lg">
                          <span>{{ user.display_name || 'Unnamed' }}</span>
                          <span class="text-xs text-surface-600">{{ user.email }}</span>
                      </div>
                  </router-link>
              </li>
          </ul>

          <div v-else-if="userStore.isLoading">
            <ProgressSpinner style="width: 60px; height: 60px" strokeWidth="5"  />
          </div>

          <div class="text-surface-500" v-else>
              <p>No items</p>
          </div>

      </div>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user.store'
import ProgressSpinner from 'primevue/progressspinner';


const userStore = useUserStore();

userStore.getUsers()


const users = computed(() => userStore.userIndex)

</script>
