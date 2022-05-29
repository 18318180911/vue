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
// 封装用户信息
export function userInfo(id) {
    return request({
        url: '/user/' + id,
        method: 'get',
        // headers: {
        //     Authorization: localStorage.getItem('75-token')
        // }
    })
}
// 封装文件上传
export function Uploader(data) {
    return request({
        url: '/upload',
        method:'post',
        data
    })
}
// 封装编辑用户信息
export function user_update(id, data) {
    return request({
        url: '/user_update/' + id,
        method: 'post',
        data
    })
}
