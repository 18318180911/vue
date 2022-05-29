import Vue from 'vue'
import App from './App.vue'
// 引入重置样式，因为浏览器兼容问题
import './style/reset.less'

Vue.config.productionTip = false
// 6.引入封装的路由对象
import router from './router/index'

// 全局注册vant组件
import {Toast, Field,Button,Form,CellGroup,Cell, NavBar, Icon, Uploader,Dialog,ActionSheet,Tab,Tabs,PullRefresh } from 'vant';
Vue.use(Toast)
Vue.use(Field)
Vue.use(Button)
Vue.use(Form)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
// 封装全局过滤器，用于拼接图片路径
// 过滤器只能用在v-bind和插值表达式中
import axios from './utils/request'
Vue.filter('joinPath', (val) => {
  // 判断val不存在的时候，不处理val
  if(!val){return val}
  // 当val存在且传入的val有基地址的情况，则路径上一定会存在http,拿http来判断val是否存在基地址
  if(val&& val.indexOf('http') != -1) {
    return val
  }
  return axios.defaults.baseURL + val
})

// 封装格式化日期
Vue.directive("formatDate", {
  // el: 指的是使用该指令的标签
  // binding.value: 指的是使用指令时传入的值
  // inserted：当标签插入到页面中的时候触发的函数，以后都不会触发
  inserted(el, binding) {
    console.log('inserted', el, binding)
    let time = null
    if(!binding.value) {
      // 当传入的日期不存在则 返回当前日期
      time = new Date().toLocaleDateString()
    }
    time = new Date(binding.value).toLocaleDateString();
    el.innerText = time
  },
  // update: 当传入的数据变化的时候触发（也就是binding.value的值变化的时候触发）
  update(el, binding) {
    console.log('update', el, binding)
    let time = null
    if(!binding.value) {
      // 当传入的日期不存在则 返回当前日期
      time = new Date().toLocaleDateString()
    }
    time = new Date(binding.value).toLocaleDateString();
    el.innerText = time
  }
})
new Vue({
  // 7.路由对象注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
