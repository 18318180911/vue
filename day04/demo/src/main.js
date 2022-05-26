import Vue from 'vue'
import App from './App.vue'
// 引入重置样式，因为浏览器兼容问题
import './style/reset.less'

Vue.config.productionTip = false
// 6.引入封装的路由对象
import router from './router/index'

// 全局注册vant组件
import {Toast, Field,Button,Form,CellGroup,Cell } from 'vant';
Vue.use(Toast)
Vue.use(Field)
Vue.use(Button)
Vue.use(Form)
Vue.use(CellGroup)
Vue.use(Cell)

// 封装全局过滤器，用于拼接图片路径
// 过滤器只能用在v-bind和插值表达式中
import axios from './utils/request'
Vue.filter('joinPath', (val) => {
  // 判断val不存在的时候，不处理val
  if(!val){return val}
  return axios.defaults.baseURL + val
})
new Vue({
  // 7.路由对象注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
