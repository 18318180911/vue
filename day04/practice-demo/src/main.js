import Vue from 'vue'
import App from './App.vue'
import './style/reset.less'
import router from './router'
import { Button, Field, Form, Toast, Cell, CellGroup } from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.config.productionTip = false
import axios from './urils/request'
Vue.filter('joinPath', (val) => {
  if(!val) {return val}
  return axios.defaults.baseURL + val
})

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
  // 6.将路由对象注入到new vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
