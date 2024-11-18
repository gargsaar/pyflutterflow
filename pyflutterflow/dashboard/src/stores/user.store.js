import api from '@/services/api';
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    userIndex: [],
    currentUser: {},
    loading: false,
  }),

  getters: {
    isLoading: (state) => state.loading,
  },

  actions: {
    async getUsers() {
      this.loading = true
      const { data } = await api.get('/admin/auth/users')
      this.userIndex = data
      this.loading = false
      return data
    },

    async getUserByUid(userID) {
      this.loading = true
      const { data } = await api.get(`/admin/auth/users/${userID}`)
      this.currentUser = data
      this.loading = false
      return data
    },

    async setUserRole(userID, role) {
      try {
        await api.post(`/admin/auth/set-role`, { uid: userID, role: role });
        return { severity: 'success', summary: 'Role Updated', detail: `The user with ID ${userID} has changed role.`, life: 3000 }
      }
      catch (error) {
        console.error('Admin privileges error:', error.message);
        return { severity: 'error', summary: 'Role update Failed', detail: `Something went wrong when trying change the user role. Please try again.`, life: 3000 }
      }
    },
  }
})


export default useUserStore;
