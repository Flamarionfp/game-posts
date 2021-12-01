import axios from 'axios';

const port = 3333
const ip = '10.0.2.2'

const api = axios.create({
  baseURL: `http://${ip}:${port}/`,
});

export default api;
