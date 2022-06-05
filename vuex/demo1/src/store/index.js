import Vuex from 'vuex'
import Vue from 'vue'
import user from "./modlues/user"
import setting from "./modlues/setting"
import getters from "./getters"
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
  getters,
  modules: {
    user,
    setting
  }
})
// 4、导出
export default store