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

new Vue({
  // 6.将路由对象注入到new vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
