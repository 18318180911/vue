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
export function articleDetail(id){
    return request({
        url: "/post/"+id,
        method: "get"
    })
}
// 点赞文章
export function post_like(id) {
    return request({
        url: '/post_like/' + id
    })
}
// 收藏文章
export function post_star(id) {
    return request({
        url: '/post_star/'+id
    })
}
// 评论列表
export function post_comment(id) {
    return request({
        url: '/post_comment/'+id
    })
}
// 发表评论
export function sendComment(id, data) {
    return request({
        url: 'post_comment' + id,
        method: 'post',
        data
    })
}