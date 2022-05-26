// 封装用户相关的接口
// @表示src的别名
import request from '@/urils/request'
// 登录接口函数
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
// 注册接口函数
export function register(data) {
    return request({
        url: '/register',
        method: 'post',
        data
    })
}
