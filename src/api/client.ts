import axios from 'axios';

const baseURL = process.env.REACT_APP_API_SERVER;

const client = axios.create({
  // baseURL: '/api',
  baseURL: `https://${baseURL}/api`,
  headers: {
    'Content-Type': 'application/json',

    // 추가
    // 'Access-Control-Allow-Origin': `http://localhost:3000`,
    // 'Access-Control-Allow-Credentials': 'true',
  },
});

export default client;
