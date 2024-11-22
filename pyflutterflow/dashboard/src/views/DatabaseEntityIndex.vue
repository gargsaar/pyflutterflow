<template>
    <div v-if="!!schema && !!databaseEntityIndex">
        <h1 class="text-xl flex items-center my-6">
            {{ schema.display_name }} collection
            <span class="px-2 text-surface-400">
                ({{ databaseEntityIndex.length }})
            </span>
            <router-link v-if="!schema.read_only" :to="`/${route.params.entity}/create`">
                <Button icon="fa-solid fa-plus text-green-600" text />
            </router-link>
        </h1>
        <div>
            <ul v-if="databaseEntityIndex && schema.fields && databaseEntityIndex.length > 0">
                <li v-for="databaseEntity in databaseEntityIndex" :key="databaseEntity.id">
                    <router-link class="w-full outline" :to="`/${route.params.entity}/${databaseEntity.id}`">
                        <div class="outline outline-1 outline-surface-200 rounded-lg shadow p-3 my-3 hover:shadow-lg">
                            <span v-if="schema.fields[0].type === 'Date'">
                                {{ formatDate(databaseEntity[schema.fields[0].fieldName]) }}
                            </span>
                            <span v-else>
                                {{ databaseEntity[schema.fields[0].fieldName] }}
                            </span>
                        </div>
                        <div v-if="schema.fields[0].type === 'Date' && formatDate(databaseEntity[schema.fields[0].fieldName]).includes('Friday')"
                            class="mb-20" />
                    </router-link>
                </li>
            </ul>

            <div class="text-surface-500" v-else>
                <p>No items</p>
            </div>

        </div>
    </div>
    <div v-else-if="databaseEntityStore.isLoading" class="md:p-16">
        <ProgressSpinner style="width: 60px; height: 60px" strokeWidth="5" />
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
    await databaseEntityStore.getDatabaseEntityIndex(route.path, 1, 100)
})

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return format(new Date(dateStr), 'EEEE, d MMMM yyyy');
}

databaseEntityStore.getDatabaseEntityIndex(route.path, 1, 100)

const databaseEntityIndex = computed(() => databaseEntityStore.databaseEntityIndex)



</script>
