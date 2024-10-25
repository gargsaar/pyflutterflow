import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store'; // Adjust the path according to your file structure

// Create an instance of axios
const api = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_API_URL : ''
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
