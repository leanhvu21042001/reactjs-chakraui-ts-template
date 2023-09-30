import axios from 'axios';

import { ENV } from 'src/constants';

const request = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default request;
