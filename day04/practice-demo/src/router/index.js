// 配置路由
// 1.引用
import Vue from "vue";
import VueRouter from "vue-router";

// 2.z注册
Vue.use(VueRouter)

// 3.创建路由规则
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: ()=>import('../views/login.vue')
    },
    {
        path: '/register',
        component: ()=>import('../views/register.vue')
    },
    {
        path: '/personal',
        component: ()=>import('../views/personal.vue')
    }
]

// 4.配置
const router = new VueRouter({
    routes
})

// 5.导出
export default router