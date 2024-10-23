import api from '@/services/api';
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    userIndex: [],
    loading: false,
  }),

  getters: {
    isLoading: (state) => state.loading,
  },

  actions: {
    async getUsers() {
      this.loading = true
      const { data } = await api.get('/admin/users')
      this.userIndex = data
      this.loading = false
      return data
    }
  }
})


export default useUserStore;
