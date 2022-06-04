<template>
  <div>
    <h1>渲染vuex中的count的数量为: {{count}}</h1>
  </div>
</template>

<script>
export default {
  // state变量的优化使用
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>