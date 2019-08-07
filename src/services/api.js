import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/daniel-leal/spotify-api', // genymotion
});

export default api;
