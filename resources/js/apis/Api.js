import axios from "axios"

let Api = axios.create({
    // baseURL:'http://localhost:8000/api'
    baseURL:'http://localhost/laravel-8/api'
});
export default Api;
