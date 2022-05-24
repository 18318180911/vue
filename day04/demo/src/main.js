import Vue from 'vue'
import App from './App.vue'
// 引入重置样式，因为浏览器兼容问题
import './style/reset.less'

Vue.config.productionTip = false
// 6.引入封装的路由对象
import router from './router/index'

// 全局注册vant组件
import {Button} from 'vant';
Vue.use(Button)
new Vue({
  // 7.路由对象注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
