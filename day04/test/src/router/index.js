// 配置路由
// 引入
import VueRouter from 'vue-router'
import Vue from 'vue'
// 注册
Vue.use(VueRouter)
// 创建路由规则:组件的映射和路径
const routes = [
    {
        path: '/',
        // 重定向：表示强制跳转到该页面
        redirect: '/login'
    },
    {
        path: '/login',
        component: ()=>import('@/views/login')
    }
]
// 配置路由对象
const router = new VueRouter({
    // 键名不能修改，键值可以修改
    // routes:routes
    routes
})
// 导出路由对象
export default router