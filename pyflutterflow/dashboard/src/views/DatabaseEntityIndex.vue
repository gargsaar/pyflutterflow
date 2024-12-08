<template>
    <div v-if="!!schema && !!databaseEntityIndex" class="p-4">
        <h1 class="text-2xl font-semibold flex items-center my-6 text-surface-900 dark:text-surface-0">
            {{ schema.display_name }} collection
            <span class="px-2 text-sm font-normal text-surface-500 dark:text-surface-400">
                ({{ databaseEntityIndex.length }})
            </span>
            <router-link v-if="!schema.read_only" :to="`/${route.params.entity}/create`" class="ml-auto">
                <Button icon="fa-solid fa-plus" text class="p-button-rounded p-button-success" />
            </router-link>
        </h1>
        <div>
            <ul v-if="databaseEntityIndex && schema.fields && databaseEntityIndex.length > 0" class="space-y-4">
                <li v-for="databaseEntity in databaseEntityIndex" :key="databaseEntity.id">
                    <router-link
                        :to="`/${route.params.entity}/${databaseEntity.id}`"
                        class="block w-full transition-all duration-300 ease-in-out"
                    >
                        <div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow hover:shadow-md p-4 transition-all duration-300 ease-in-out">
                            <span v-if="schema.fields[0].type === 'Date'" class="text-lg font-medium text-surface-700 dark:text-surface-200">
                                {{ formatDate(databaseEntity[schema.fields[0].fieldName]) }}
                            </span>
                            <span v-else class="text-lg font-medium text-surface-700 dark:text-surface-200">
                                {{ databaseEntity[schema.fields[0].fieldName] }}
                            </span>
                        </div>
                    </router-link>
                    <div v-if="schema.fields[0].type === 'Date' && formatDate(databaseEntity[schema.fields[0].fieldName]).includes('Friday')"
                        class="mb-8" />
                </li>
            </ul>

            <div v-else class="text-center py-8 text-surface-500 dark:text-surface-400">
                <p class="text-lg">No items available</p>
            </div>
        </div>
    </div>
    <div v-else-if="databaseEntityStore.isLoading" class="flex justify-center items-center h-64">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" />
    </div>
</template>


<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from 'vue';
import { useDatabaseEntityStore } from '@/stores/databaseEntity.store';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth.store';
import { format } from 'date-fns';
import ProgressSpinner from 'primevue/progressspinner';

const authStore = useAuthStore();
const route = useRoute();
const databaseEntityStore = useDatabaseEntityStore();

authStore.getDashboardConfig()

const schema = ref({})

onMounted(async () => {
    schema.value = authStore.dashboardConfig.models.find(obj => obj.collection_name === route.params.entity);
})

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return format(new Date(dateStr), 'EEEE, d MMMM yyyy');
}

databaseEntityStore.getDatabaseEntityIndex(route.params.entity)

const databaseEntityIndex = computed(() => databaseEntityStore.databaseEntityIndex)



</script>
