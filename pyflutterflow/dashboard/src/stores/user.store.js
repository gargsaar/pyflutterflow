import api from '@/services/api';
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    userIndex: []
  }),
  actions: {
    async getUsers() {
      const { data } = await api.get('/admin/users')
      this.userIndex = data
      return data
    }
  }
})


export default useUserStore;
