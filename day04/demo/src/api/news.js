// 封装新闻相关的接口
import request from '@/utils/request'
// 获取栏目列表
export function category() {
    return request({
        url: '/category',
        method: 'get'
    })
}
// 获取文章列表
export function post_news(params) {
    return request({
        url: '/post',
        method: 'get',
        params
    })
}

// 文章详情
export function articleDetail(id) {
    return request({
        url: '/post/'+id,
        method: 'get'
    })
}