import Vue from 'vue'
import App from './App.vue'
// 引入重置样式，因为浏览器兼容问题
import './style/reset.less'

Vue.config.productionTip = false
// 6.引入封装的路由对象
import router from './router/index'

new Vue({
  // 
  router,
  render: h => h(App),
}).$mount('#app')
