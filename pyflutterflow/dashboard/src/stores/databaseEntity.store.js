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
      const { data } = await api.get(`${collectionName}/${key}`)
      return data
    },

    async upsertDatabaseEntity(collectionName, key, payload) {
      if (key === 'create') {
        return this.createDatabaseEntity(collectionName, payload)
      } else {
        return this.updateDatabaseEntity(collectionName, key, payload)
      }
    },

    async createDatabaseEntity(collectionName, payload) {
      await api.post(collectionName, payload)
    },

    async updateDatabaseEntity(collectionName, key, payload) {
      const { data } = await api.patch(`${collectionName}/${key}`, payload)
      return data
    },

    async deleteDatabaseEntity(collectionName, key) {
      await api.delete(`${collectionName}/${key}`)
    },
  },
})
