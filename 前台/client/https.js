import axios from 'axios'
//请求拦截 每次http请求都会走这个 
axios.interceptors.request.use(config => {
    console.log('请求拦截');
    if (localStorage.eleToken) {
        //设置统一的请求header
        config.headers.Authorization = localStorage.eleToken;
    }
    return config;
}, error => {
    return Promise.reject(error)
})

export default axios;
