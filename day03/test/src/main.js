import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
// 引入库
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
