<template>
  <div>
      <input type="text" name="" id="" placeholder="姓名">
      <input type="text" placeholder="年龄">
  </div>
</template>

<script>
export default {
  created() {
    console.log('我被创建了');
  },
  mounted() {
    console.log('被挂载了');
  },
  destroyed() {
    console.log('被销毁了');
  },
  activated() {
    console.log("激活时触发");
  },
  deactivated() {
    console.log("失去激活状态触发")
  }
}
</script>

<style>

</style>