import request from '@/utils/request'
// 获取
export function getBooks(params) {
    return request({
        url: '/getbooks',
        method: 'get',
        params,
        data:{
            a: 888
        }
    })
}
// 添加
export function addBook(data) {
    return request({
        method: 'POST',
        url: '/addbook',
        data
    })
}