import axios from 'axios';
// import {useSelector} from 'react-redux';

// const {ip} = useSelector(state => state.user);
const port = 3333;

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/', // local emulator
  // baseURL: `http://${ip}:${port}/`,
});

export default api;
