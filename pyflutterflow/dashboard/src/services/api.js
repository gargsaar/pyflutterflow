import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store'; // Adjust the path according to your file structure

const api = axios.create({
  baseURL: ``
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore();
    const token = authStore.accessToken;
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
