export default {
    // true表示为user模块加了一道锁，此刻模块中的mutations，actions，getters声明的函数或者是变量
    // 不再是全局的，而是局部的，只属于user模块的
    namespaced: true, 
    state: {
      token: "12345"
    },
    // 默认情况下mutations，actions，getters声明的变量或者函数
    // 都是直接挂载到全局的命名空间中的。
    mutations: {
      updateToken(state){
        state.token = 666
      }
    },
    actions: {
      aysncChangeToken(store){
        setTimeout(() => {
          store.commit("updateToken")
        }, 1000);
      }
    },
    getters: {},
    modules: {}
  }