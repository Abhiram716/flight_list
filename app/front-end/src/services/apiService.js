import axios from 'axios';

// Determine the base URL based on the environment
const isLocal = window.location.hostname === 'localhost';
const baseURL = isLocal
  ? 'http://localhost:8000'
  : 'https://flights-list-api.onrender.com';

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
