// 封装接口基础路径
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('75-token')
    if(token) {
        config.headers.Authorization = token
    }
    return config;
    }, function (error) {
        return Promise.reject(error)
})
// 导出
export default axios