<template>
  <div>
    <!-- v-if和v-else可以搭配使用 -->
    <!-- v-if和v-else必须是相邻节点 -->
    <h1 v-if="age < 18">成年</h1>
    <h1 v-else>未成年</h1>

    <input type="text" v-mode.number="age" />
    <!-- v-if可以和多个v-else-if搭配使用，实现多个条件控制 -->
    <!-- 多个条件控制可以使用v-else结尾 -->
    <!-- v-else是可选的 -->
    <h2 v-if="age < 18">未成年人</h2>
    <h2 v-else-if="age < 60">中年人</h2>
    <h2 v-else-if="age < 100">老年人</h2>
    <h2 v-else>旺仔</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 17,
    };
  },
};
</script>

<style>
</style>