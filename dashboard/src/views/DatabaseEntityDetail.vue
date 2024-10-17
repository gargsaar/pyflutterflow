<template>
    <div class=" my-6 flex justify-between ">
        <div class="text-xl">
            <h1 class="text-xl">{{ schema.display_name }} document </h1>
            <span class="text-xs text-surface-500">{{ route.params.id }}</span>
        </div>
        <Button @click="handleDelete" icon="fa-solid fa-trash text-red-600"  />
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
import config from '@/configure.json';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

const data = ref(null);
const route = useRoute();
const router = useRouter();
const schema = computed(() => config.models[route.params.entity])
const databaseEntityStore = useDatabaseEntityStore();

onMounted(async() => {
    data.value = await databaseEntityStore.getDatabaseEntityDetail(route.params.entity, route.params.id)
})

const handleSave = async() => {
    await databaseEntityStore.updateDatabaseEntity(route.params.entity, route.params.id, data.value)
    toast.add({ severity: 'success', summary: "Document updated", detail: `The database entry was saved successfully`, life: 3000 });
}

const handleDelete = async() => {
    await databaseEntityStore.deleteDatabaseEntity(route.params.entity, route.params.id)
    toast.add({ severity: 'success', summary: "Document removed", detail: `The database entry was deleted successfully`, life: 3000 });
    router.push(`/${route.params.entity}`)
}




</script>
