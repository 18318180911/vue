import request from '@/utils/request'
// 封装接口函数，导致提供页面使用
// 获取购物车数据
export function getCart() {
    return request({
        // 会自动拼接上baseURL配置
        url: '/api/cart'
    })
}