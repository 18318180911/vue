<template>
  <div>
    <!-- v-for：渲染列表 -->
    <!-- 遍历数组 -->
    <h3>变量数组</h3>
    <ul>
      <!-- 1.v-for="值变量 in 数据" -->
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <ul>
      <!-- v-for="变量名 in 数据" -->
      <li v-for="(item, index) in list">{{ index + 1 }}:{{ item }}</li>
    </ul>
    <!-- 遍历对象 -->
    <h3>遍历对象</h3>
    <ul>
      <li v-for="item in obj">{{ item }}</li>
    </ul>
    <!-- 字符串的遍历 -->
    <h3>字符串遍历</h3>
    <ul>
      <li v-for="item in message">{{ item }}</li>
    </ul>
    <!-- 遍历数字 -->
    <h3>数字的遍历</h3>
    <ul>
      <li v-for="item in 10">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["肥小猪", "小肥猪", "大聪明", "大熊猫"],
      obj: {
        name: "张三",
        age: 18,
      },
      message: "干饭",
    };
  },
  methods: {},
};
</script>

<style>
</style>