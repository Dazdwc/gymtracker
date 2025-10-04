import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const api = {
  login: (userData) => {
    return apiClient.post('token/', userData);
  },
};
