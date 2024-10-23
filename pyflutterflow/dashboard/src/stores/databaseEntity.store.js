import api from '@/services/api';
import { defineStore } from 'pinia'

export const useDatabaseEntityStore = defineStore({
  id: 'database-entity',
  state: () => ({
    databaseEntityIndex: null,
    isLoading: false,
    isError: false,
    errorsList: []
  }),
  actions: {
    async getDatabaseEntityIndex(collectionName, page, size) {
      const { data } = await api.get(`/admin${collectionName}?page=${page}&size=${size}`)
      this.databaseEntityIndex = data
      return data
    },

    async getDatabaseEntityDetail(collectionName, key) {
      const { data } = await api.get(`/admin/${collectionName}/${key}`)
      return data
    },

    async upsertDatabaseEntity(collectionName, key, payload) {
      Object.keys(payload).forEach(key => {
        if (payload[key] instanceof Date)
            payload[key] = payload[key].toISOString().split('T')[0];
      });
      if (key === 'create') {
        return this.createDatabaseEntity(collectionName, payload)
      } else {
        return this.updateDatabaseEntity(collectionName, key, payload)
      }
    },

    async createDatabaseEntity(collectionName, payload) {
      try {
        await api.post(`/admin/${collectionName}`, payload)
        return { severity: 'success', summary: "Document created", detail: `The database entry was created successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not created", detail: error.response.data.detail, life: 3000 }
      }
    },

    async updateDatabaseEntity(collectionName, key, payload) {
      try {
        await api.patch(`/admin/${collectionName}/${key}`, payload)
        return { severity: 'success', summary: "Document updated", detail: `The database entry was saved successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not updated", detail: error.response.data.detail, life: 3000 }
      }
    },

    async deleteDatabaseEntity(collectionName, key) {
      try {
        await api.delete(`/admin/${collectionName}/${key}`)
        return { severity: 'success', summary: "Document removed", detail: `The database entry was deleted successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not removed", detail: error.response.data.detail, life: 3000 }
      }
    },
  },
})
