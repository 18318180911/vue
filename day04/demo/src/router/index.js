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
    },
    {
        path: "/edit_profile",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/edit_profile.vue")
    },
    {
        path: "/index",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/index.vue")
    },
    {
        path: "/articleDetail",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/articleDetail.vue")
    },
    {
        path: "/commentList",
        // 按需引入:  表示当用户之间访问到login.vue
        component: ()=>import("../views/commentList.vue")
    }
]
// 4.配置路由对象
const router = new VueRouter({
    routes
})
// 个人中心必须登录后才能访问，所以时导航守卫功能来实现
// 条件1：用户访问的是个人中心页面：to.path
// 条件2：用户是否登录，token--->localstorage
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("75-token")
    if(to.path == '/personal' && !token) {
        next('/login')
    } else {
        next()
    }
})

let writeArr = ['/personal', '/edit_profile']
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('75-token')
    if(writeArr.indexOf(to.path) != -1 && !token){
        next('/login')
    } else {
        next()
    }
})

// 5.导出路由对象、
export default router