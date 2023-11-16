import axios from "axios";

const httpAxios = axios.create({
    baseURL: 'http://localhost/nguyenvankiet_2121110318_laravel/public/api/',
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default httpAxios;