<template>
    <div class=" my-6 flex justify-between ">
        <div class="text-xl">
            <h1 class="text-xl">{{ schema.display_name }} document </h1>
            <span class="text-xs text-surface-500">{{ route.params.id }}</span>
        </div>
        <Button @click="handleDelete" icon="fa-solid fa-trash text-red-600"  text />
    </div>
    <div class="flex flex-col gap-4">
        <div v-for="field in schema.fields">
            <div v-if="!!field && !!data">
                <div v-if="field.type === 'String'" class="flex flex-col">
                    <label class="text-surface-600">{{field.fieldName}}</label>
                    <InputText v-model="data[field.fieldName]" />
                </div>
            </div>
        </div>
        <Button severity="contrast" @click="handleSave" label="Save" />
    </div>
</template>


<script setup>
import { computed, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import { useRoute, useRouter } from "vue-router";
import { useDatabaseEntityStore } from '@/stores/databaseEntity.store';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
const toast = useToast();
const data = ref({});
const route = useRoute();
const router = useRouter();
const databaseEntityStore = useDatabaseEntityStore();
const schema = ref({})

onMounted(async() => {
    schema.value = authStore.dashboardConfig.models.find(obj => obj.collection_name === route.params.entity);
    data.value = await databaseEntityStore.getDatabaseEntityDetail(route.params.entity, route.params.id)
})

const handleSave = async() => {
    const toastResponse = await databaseEntityStore.upsertDatabaseEntity(route.params.entity, route.params.id, data.value)
    if (route.params.id === 'create')
        router.push(`/${route.params.entity}`)
    toast.add(toastResponse);
}

const handleDelete = async() => {
    const toastResponse = await databaseEntityStore.deleteDatabaseEntity(route.params.entity, route.params.id)
    toast.add(toastResponse);
    router.push(`/${route.params.entity}`)
}

</script>
