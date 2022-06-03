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
        component: ()=>import("../views/index.vue"),
         // meta我们叫他“路由元信息”，
            // 他可以用来保存数据，且路由跳转的时候这里的数据不会被重置
        meta: {
            curIndex: localStorage.getItem('75-token') ? 1 : 0
        }
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
    },
    {
        path: "/myFollow",
        // 按需引入:  表示当用户之间访问到myFollow.vue
        component: ()=>import("../views/myFollow.vue")
    },
    {
        path: "/myStar",
        // 按需引入:  表示当用户之间访问到myStar.vue
        component: ()=>import("../views/myStar.vue")
    },
    {
        path: "/category",
        // 按需引入:  表示当用户之间访问到myStar.vue
        component: ()=>import("../views/category.vue")
    },
    {
        path: "/search",
        component: ()=>import("@/views/search.vue")
    }
]
// 4.配置路由对象
const router = new VueRouter({
    routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
}
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

let writeArr = ['/personal', '/edit_profile', '/category']
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('75-token')
    if(writeArr.indexOf(to.path) != -1 && !token){
        next('/login')
    } else {
        if(to.path == '/login'&&token) {
            next('/index')
        }else {
            // 因为首页栏目，未登录没有“关注”栏目的，登录后才有“关注”栏目
            // 因此登录后栏目的数组长度会发生变化，会导致原来访问的栏目的下标值会加1
            // 因此，我们用来控制栏目高亮效果的变量curIndex的值也要加1
            // if(localStorage.getItem('75-token')&&from.path == '/login'){
            //     to.meta.curIndex++
            // }
            if(to.path == '/login') {
                console.log(106)
                // 退出登录后 重置首页中curIndex的值
                router.options.routes[5].meta.curIndex = 1
            }
            if(to.path == '/index'&&from.path == '/login'){
                // 退出登录后 重置首页中curIndex的值
                // 设置从登录页到首页下标值初始值
                router.options.routes[5].meta.curIndex = token ? 1 : 0
            }
            next()
        }
    }
})

// 5.导出路由对象、
export default router