<template>
<div>
  <input type="text" v-model="msg">
  <br>
  用户名：<input type="text" v-model="user.name">
  <br>
  年龄：<input type="text" v-model="user.age">
  <br>
  <input type="text" v-model="num1">
  总数：{{num2}}
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      user: {
        name: '张三',
        age: 18,
      },
      num1: 2,
      num2: 0
    }
  },
  watch: {
    // 以键值对的形式指定，被监听字段：触发后回调函数
    msg(newVal, oldVale) {
      console.log(newVal, oldVale);
    },
    // user(newVal, oldVale) {
    //   console.log(newVal, oldVale);
    // },
    // 复杂类型无法直接监听, 需要多加额外配置
    user: {
      // deep 可以监听到复杂数据内部的改变
      deep: true,
      handler(newVal, oldVale) {
        console.log(newVal, oldVale);
      },
    },
    num1: {
      // immediate 可以再页面进来时马上触发一次当前监听回调
      immediate: true,
      handler (newVal) {
        this.num2 += newVal
      }
    }
  }
}
</script>

<style>

</style>