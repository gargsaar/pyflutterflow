<template>
    <div class=" my-6 flex justify-between ">
        <div class="text-xl">
            <h1 class="text-xl">{{ schema.display_name }} document </h1>
            <span class="text-xs text-surface-500">{{ route.params.id }}</span>
        </div>
        <Button v-if="!schema.read_only" @click="handleDelete" icon="fa-solid fa-trash text-red-600" text />
    </div>
    <div class="flex flex-col gap-4">
        <div v-for="field in schema.fields">
            <div v-if="!!field && !!data">
                <div v-if="field.type === 'String'" class="flex flex-col">
                    <label class="text-surface-600">{{ field.fieldName.replace(/_/g, ' ') }}</label>
                    <InputText v-model="data[field.fieldName]" />
                </div>
                <div v-else-if="field.type === 'Date'" class="flex flex-col">
                    <label class="text-surface-600">{{ field.fieldName.replace(/_/g, ' ') }}</label>
                    <DatePicker v-model="data[field.fieldName]" dateFormat="yy-mm-dd" />
                </div>
                <div v-else-if="field.type === 'Integer'" class="flex flex-col">
                    <label class="text-surface-600">{{ field.fieldName.replace(/_/g, ' ') }}</label>
                    <InputNumber v-model="data[field.fieldName]" inputId="integeronly" fluid />
                </div>
                <div v-else-if="field.type === 'Raw'" class="flex flex-col">
                    <label class="text-surface-600">{{ field.fieldName.replace(/_/g, ' ') }}</label>
                    {{ data[field.fieldName] }}
                </div>
                <div v-else-if="field.type === 'Image'" class="flex flex-col">
                    <label class="text-surface-600">{{ field.fieldName.replace(/_/g, ' ') }}</label>
                    <!-- <img class="w-20 h-20 rounded-full" :src="data[field.photo_url]" alt=""> -->
                    <InputText v-model="data[field.fieldName]" />
                </div>
                <div v-else-if="field.type === 'FirebaseUserList'" class="flex flex-col">
                    <label class="text-surface-600">{{ field.fieldName.replace(/_/g, ' ') }}</label>
                    <div class="text-xs text-surface-600" v-if="data[field.fieldName] && data[field.fieldName].length == 0">None</div>
                    <div v-for="user in data[field.fieldName]" :key="user.id" class="grid grid-cols-2 md:grid-cols-3">
                        <div class="flex flex-col items-center justify-center shadow rounded-lg p-2">
                            <img class="w-12 h-12 rounded-full" :src="user.photo_url" alt="">
                            <span>{{ user.display_name }}</span>
                            <span class="text-[0.6rem] text-surface-400">{{ user.id }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Button :disabled="schema.read_only" severity="contrast" @click="handleSave" label="Save" />
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';
import { useRoute, useRouter } from "vue-router";
import { useDatabaseEntityStore } from '@/stores/databaseEntity.store';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import { useAuthStore } from '@/stores/auth.store';
import { useConfirm } from "primevue/useconfirm";

const authStore = useAuthStore();
const toast = useToast();
const data = ref({});
const route = useRoute();
const router = useRouter();
const databaseEntityStore = useDatabaseEntityStore();
const schema = ref({})
const confirm = useConfirm();

onMounted(() => {
    loadData();
});

const loadData = async() => {
    schema.value = authStore.dashboardConfig.models.find(obj => obj.collection_name === route.params.entity);
    data.value = await databaseEntityStore.getDatabaseEntityDetail(route.params.entity, route.params.id)
}


const handleSave = async () => {
    const toastResponse = await databaseEntityStore.upsertDatabaseEntity(route.params.entity, route.params.id, data.value)
    if (route.params.id === 'create')
        router.push(`/${route.params.entity}`)
    toast.add(toastResponse);
}


const handleDelete = async () => {
    confirm.require({
        header: 'Confirm Delete',
        message: 'Are you sure you want to delete this database entry?',
        icon: 'fa-solid fa-exclamation-circle',
        rejectLabel: 'Cancel',
        confirmLabel: 'Confirm',
        accept: async () => {
            const toastResponse = await databaseEntityStore.deleteDatabaseEntity(route.params.entity, route.params.id)
            toast.add(toastResponse);
            router.push(`/${route.params.entity}`)
        }
    });
}


</script>
