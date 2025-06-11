import axios from 'axios';

const ServerURL = `https://${process.env.REACT_APP_API_SERVER}/api`;

const client = axios.create({
  // baseURL: '/api',
  baseURL: ServerURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default client;
