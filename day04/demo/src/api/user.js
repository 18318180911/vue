// 封装用户相关的接口
// @表示src的别名
import request from '@/utils/request'
// 登录接口函数
export function login(data) {
    return request({
        url: '/login',
        method:'post',
        data
    })
}
// 注册接口函数
export function register(data) {
    return request({
        url: '/register',
        method:'post',
        data
    })
}
// 获取用户信息
// /user/:id：冒号id表示id是一个参数而不是路径名
export function userInfo(id) {
    return request({
        // 路径不需要写冒号
        url: "/user/"+id,
        method: 'get',
        // headers表示请求头信息，会把请求发送给后端
        // headers: {
        //     // 利用headers头部信息把token传递给后端，用于身份验证
        //     Authorization: localStorage.getItem("75-token")
        // }
    })
}
// 文件上传
export function upload(data){
    return request({
        url: '/upload',
        method: 'post',
        data
    })
}
// 编辑用户信息
export function user_update(id, data) {
    return request({
        url: '/user_update/'+id,
        method: 'post',
        data
    })
}