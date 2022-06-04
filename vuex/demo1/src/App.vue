<template>
  <div>
    <h1>渲染vuex中的count的数量为: {{$store.state.count}}</h1>
    <h1>渲染vuex中的count的数量为: {{count}}</h1>
    <h1>渲染vuex中的count的数量为: {{count}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  // state变量的优化使用
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapState(['count'])
  }
}
</script>

<style>

</style>