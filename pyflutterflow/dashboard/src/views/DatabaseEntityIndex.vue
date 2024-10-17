
<template>
    <h1 class="text-xl my-6">{{ schema.display_name }} collection</h1>
    <div>
        <ul v-if="databaseEntityIndex">
            <li v-for="databaseEntity in databaseEntityIndex.items" :key="databaseEntity.id">
                <router-link class="w-full outline" :to="`/entities/${databaseEntity.id}`">
                    <div  class="outline outline-1 outline-surface-200 rounded-lg shadow p-3 my-3 hover:shadow-lg">
                        {{ databaseEntity[schema.fields[0].fieldName] }}
                    </div>
                </router-link>
            </li>
        </ul>

        <div class="text-surface-500" v-else>
            <p>No items</p>
        </div>

    </div>
</template>


<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from 'vue';
import { useDatabaseEntityStore } from '@/stores/databaseEntity.store';
import config from '@/configure.json';

const route = useRoute();
const databaseEntityStore = useDatabaseEntityStore();

const schema = ref(config.models[route.params.entity]);

databaseEntityStore.getDatabaseEntityIndex(route.path, 1, 100)

const databaseEntityIndex = computed(() => databaseEntityStore.databaseEntityIndex)



</script>
