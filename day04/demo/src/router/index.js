// 配置路由
// 1.引入
import VueRouter from "vue-router";
import Vue from "vue"
// 2.注册两个全局组件，router-linke和router-view
Vue.use(VueRouter)
// 3.创建路由规则
const routes = [
    {
        path: '/',
        // 重定向：表示当用户之间访问到login.vue
        redirect: '/login'
    },
    {
        path: "/login",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/login.vue")
    },
    {
        path: "/register",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/register.vue")
    },
    {
        path: "/personal",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/personal.vue")
    }
]
// 4.配置路由对象
const router = new VueRouter({
    routes
})
// 5.导出路由对象、
export default router