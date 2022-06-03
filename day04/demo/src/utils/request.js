// 封装接口基础路径
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
import router from "@/router/index"
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
// 添加响应式拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log(25,response);
    // 验证用户是否登录，未登录，则跳转到登录页面
    // 未登录的情况下，后端会返回statusCode属性，当这个属性的值为401说用户信息验证失败
    // 也就是没有登录
    if(response.data.statusCode === 401) {
        // 获取当前的url地址
        console.log(32,location.hash);
        console.log(33,location.href);
        // 没有登录跳转到登录页面
        router.push({
            path: '/login',
            query: {
                redirectUrl: location.href
            }
        })
    }
    return response;
},function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})
// 导出
export default axios