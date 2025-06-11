import axios from 'axios';

const ServerURL = `https://${process.env.REACT_APP_API_SERVER}/api`;

const client = axios.create({
  // baseURL: '/api',
  baseURL: ServerURL,
  headers: {
    'Content-Type': 'application/json',

    // 추가
    'Access-Control-Allow-Origin': `http://localhost:${process.env.REACT_APP_PORT}`,
    'Access-Control-Allow-Credentials': 'true',
  },
});

export default client;
