<template>
  <div>
    <h1>获取user模块的token: {{$store.state.user.token}}</h1>
    <h1>获取setting模块的name: {{$store.state.setting.name}}</h1>
    <h1>优化获取user模块的token: {{$store.getters.token}}</h1>
    <h1>优化获取setting模块的name: {{$store.getters.name}}</h1>
    <h1>辅助函数获取user模块的token: {{token}}</h1>
    <h1>辅助函数setting模块的name: {{name}}</h1>
    <hr>
    <!-- <button @click="$store.commit('updateToken')">修改token</button>
    <button @click="$store.dispatch('ansncChangeToken')">修改token</button> -->
    <button @click="$store.commit('user/updateToken')">修改token</button>
    <button @click="$store.dispatch('user/ansncChangeToken')">修改token</button>
    <button @click="updateToken">通过辅助函数修改token</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters(['token', 'name']),
  },
  methods: {
    ...mapMutations("user", ['updateToken'])
  }
};
</script>

<style>
</style>