<template>
  <div>
    <!-- 1.实现静态效果 -->
    <h1>{{ message }}</h1>
    <!-- 2.绑定事件 -->
    <button @click="word">逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, World",
    };
  },
  methods: {
    word() {
      // 字符串拆分数组
      const array = this.message.split("");
      // console.log(array);
      // 数组倒转
      array.reverse();
      // 拼接并更新message
      this.message = array.join("");
    },
  },
};
</script>

<style>
</style>