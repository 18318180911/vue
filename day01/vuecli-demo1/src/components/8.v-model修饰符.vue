<template>
  <div>
    <!-- .number:转成数字类型 -->
    <p>年龄: <input type="number" v-model.number="age" /></p>
    <!-- 去除首尾空白字符 -->
    <p>用户名: <input type="text" v-model.trim="username" /></p>
    <!-- 在change时触发而非input时 -->
    <p>搜索: <input type="text" v-model.lazy="search" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 18,
      username: "",
      search: "",
    };
  },
};
</script>

<style>
</style>