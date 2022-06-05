import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Vuex from 'vuex'
Vue.use(Vuex) 
// 实例化
const store = new Vuex.Store({
  // state中存放的就是全局共享的数据
  state: {
    count: 0,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    add(state,setp){
      state.count += setp
    }
  },
  actions: {
    addAsync(store, num) {
      setTimeout(() => {
        store.commit('add', num)
      }, 1000)
  }
  },
  getters: {
    filterList: (state) => {
      return state.list.filter(item => item > 5)
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
