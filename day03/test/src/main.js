import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@/assets/fonts/iconfont.css'
// 引入库
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 3. 创建一个实例
// 3.1 创建路由配置表是个数组, 里面的每个元素都是对象
// 配置路由方式
// 1 引入组件对象 2 指定对应路径
import Find from '@/components/test7/Find.vue'
import My from '@/components/test7/My.vue'
import Part from '@/components/test7/Part.vue'
import Path404 from '@/components/test7/404.vue'
import Ranking from '@/components/test7/second/Ranking.vue'
import Recommend from '@/components/test7/second/Recommend.vue'
import SongList from '@/components/test7/second/SongList.vue'
import Login from '@/components/test7/Login.vue'
Vue.config.productionTip = false
const routes = [
  {
    // 默认
    path: '/',
    // 重定向哪个路径
    redirect: '/find'
  },
  {   
     // 1. path 路径 / 开头
    path: '/find',
    // 2. component 组件
    component: Find,
    redirect: '/find/ranking',
    children: [
      // 依旧是 path 跟 component 的配对
      // 不要加斜杠, 因为需要改上一层拼接在一起
      // 如果加了, 就需要在根路径进行访问
      {
        path: 'ranking',
        component: Ranking
      },
      {
        path: 'recommend',
        component: Recommend
      },
      {
        path: 'songlist',
        component: SongList
      },
    ]
  },
  {
    path: '/my',
    component: My,
    name: 'MyPage'
  },
  {
    path: '/part/:id',
    component: Part,
    name: 'partPage',
  },
  {
    path: '*',
    component: Path404
  },
  {
    path:'/login',
    redirect: '/find'
  }
]
// 3.2 创建路由实例, 放入配置表
const router = new VueRouter({
  // 这里可以有配置对象
  // 有个属性叫routes是路由配置表,指定 url=>组件的配对
  routes,
  // 修改路由在地址为拼接模式，history减少一个#号，优点好看一些
  mode: "history"
})
// 
router.beforeEach((to, from, next) => {
  console.log('到达');
  console.log(to);
  console.log(from);
  next();
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
