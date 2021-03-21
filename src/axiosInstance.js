import axios from 'axios';
import route from './router';

const errorHandler = (error) => {
  if (error.response && error.response.status) {
    const statusCode = error.response.status;
    if (statusCode === 401) {
      route.push('/401');
    }
    if (statusCode === 403) {
      route.push('/403');
    }
    return Promise.reject(error.response.data);
  }
};

const axiosInstance = axios.create({
  baseURL: '/api/',
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use((response) => {
  return response;
}, errorHandler);

export default axiosInstance;
