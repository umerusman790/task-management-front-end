import axios from 'axios';

export const axio = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});
