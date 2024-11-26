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
    async getDatabaseEntityIndex(collectionName) {
      this.isLoading = true
      const { data } = await api.get(`/supabase/rest/v1${collectionName}`)
      this.databaseEntityIndex = data
      this.isLoading = false
      return data
    },

    async getDatabaseEntityDetail(collectionName, key) {
      this.isLoading = true
      const { data } = await api.get(`/supabase/rest/v1/${collectionName}?single=true&id=eq.${key}`)
      this.isLoading = false
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
      this.isLoading = true
      try {
        await api.post(`/supabase/rest/v1${collectionName}`, payload)
        return { severity: 'success', summary: "Document created", detail: `The database entry was created successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not created", detail: error.response.data.detail, life: 3000 }
      }
      finally {
        this.isLoading = false
      }
    },

    async updateDatabaseEntity(collectionName, key, payload) {
      this.isLoading = true
      try {
        await api.patch(`/supabase/rest/v1${collectionName}/${key}`, payload)
        return { severity: 'success', summary: "Document updated", detail: `The database entry was saved successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not updated", detail: error.response.data.detail, life: 3000 }
      }
      finally {
        this.isLoading = false
      }
    },

    async deleteDatabaseEntity(collectionName, key) {
      this.isLoading = true
      try {
        await api.delete(`/supabase/rest/v1${collectionName}/${key}`)
        return { severity: 'success', summary: "Document removed", detail: `The database entry was deleted successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not removed", detail: error.response.data.detail, life: 3000 }
      }
      finally {
        this.isLoading = false
      }
    },
  },
})
