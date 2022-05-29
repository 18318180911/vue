import Vue from 'vue'
import App from './App.vue'
import './style/reset.less'
import router from './router'
import { Button, Field, Form, Toast,Cell,CellGroup,NavBar,Icon,Uploader,Dialog,ActionSheet,Tab,Tabs } from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Tab);
Vue.use(Tabs);
// 封装过滤器，用于拼接图片路径
import axios from './urils/request'
Vue.filter('joinPath', (val) => {
  if(!val){return val}
  return axios.defaults.baseURL + val
})

// 封装格式化时间
Vue.directive("formatDate", {
  inserted(el, binding) {
    console.log('inserted', el, binding)
    let time = null
    if(!binding.value) {
      time = new Date().toLocaleDateString()
    }
    time = new Date(binding.value).toLocaleDateString();
    el.innerText = time
  },
  update(el, binding) {
    console.log('update', el, binding)
    let time = null
    if(!binding.value) {
      time = new Date().toLocaleDateString()
    }
    time = new Date(binding.value).toLocaleDateString();
    el.innerText = time
  }
})
Vue.config.productionTip = false
new Vue({
  // 6.将路由对象注入到new vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
