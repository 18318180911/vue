<template>
  <div>
    <!-- v-show：通过控制display:none属性控制标签显示和隐藏 -->
    <!-- 语法：v-show="表达式" -->
    <h1 v-show="age > 18">成年</h1>
    <h1 v-show="age < 18">未成年</h1>
    <!-- v-show：通过控制是否插入标签显示和隐藏 -->
    <!-- 语法：v-if"表达式" -->
    <h1 v-if="age > 18">也就是成年</h1>
    <h1 v-if="age < 18">也就是未成年</h1>
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