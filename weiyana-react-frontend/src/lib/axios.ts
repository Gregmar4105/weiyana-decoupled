import axios from 'axios';

const api = axios.create({
  baseURL: '/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Crucial for stateful cookie auth with Sanctum
});

export default api;
