import axios from 'axios';

const Api = axios.create({ baseURL: 'https://f7ab39b7d1a3.ngrok.io/api/v1'});

export default Api;