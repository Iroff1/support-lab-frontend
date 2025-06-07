import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER || 'http://localhost:3000',
});

export default client;
