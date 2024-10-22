<template>
    <div v-if="!!schema && !!databaseEntityIndex">
        <h1 class="text-xl my-6">{{ schema.display_name }} collection
            <router-link :to="`/${route.params.entity}/create`">
                <Button icon="fa-solid fa-plus text-green-600" text />
            </router-link>
        </h1>
        <div>
            <ul v-if="databaseEntityIndex && schema.fields && databaseEntityIndex.length > 0" >
                <li v-for="databaseEntity in databaseEntityIndex.items" :key="databaseEntity.id">
                    <router-link class="w-full outline" :to="`/${route.params.entity}/${databaseEntity.id}`">
                        <div class="outline outline-1 outline-surface-200 rounded-lg shadow p-3 my-3 hover:shadow-lg">
                            {{ databaseEntity[schema.fields[0].fieldName] }}
                        </div>
                    </router-link>
                </li>
            </ul>

            <div class="text-surface-500" v-else>
                <p>No items</p>
            </div>

        </div>
    </div>
</template>


<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from 'vue';
import { useDatabaseEntityStore } from '@/stores/databaseEntity.store';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
const route = useRoute();
const databaseEntityStore = useDatabaseEntityStore();

authStore.getDashboardConfig()

const schema = ref({})

onMounted(async () => {
    schema.value = authStore.dashboardConfig.models.find(obj => obj.collection_name === route.params.entity);
    await databaseEntityStore.getDatabaseEntityIndex(route.path, 1, 100)
})


databaseEntityStore.getDatabaseEntityIndex(route.path, 1, 100)

const databaseEntityIndex = computed(() => databaseEntityStore.databaseEntityIndex)



</script>
