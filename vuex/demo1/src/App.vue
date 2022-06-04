<template>
  <div>
    <h1>渲染vuex中的count的数量为: {{$store.state.count }}</h1>
    <!-- <h1>渲染vuex中的count的数量为: {{ count }}</h1>
    <h1>渲染vuex中的count的数量为: {{ count }}</h1>
    <button @click="$store.commit('add', 5)">增加: {{ count }}</button>
    <button @click="addChange(6)">增加</button>
    <button @click="add(7)">增加</button> -->
    <button @click="$store.dispatch('addAsync', 10)">增加</button>
  </div>
</template>

<script>
// import {mapState, mapMutations } from "vuex";
export default {
  // state变量的优化使用

  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //     ...mapState(["count"]),
  // },
  // methods: {
  //   addChange(num) {
  //     this.$store.commit("add", num);
  //   },
  //   ...mapMutations(['add'])
  // },
};
</script>

<style>
</style>