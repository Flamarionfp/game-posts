import axios from 'axios';

const api = axios.create({
  baseURL: /*'http://10.0.2.2:3333/'*/ 'http://127.0.0.1:4040',
});

export default api;
