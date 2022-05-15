<template>
  <div>
    <h1>计数: {{ count }}</h1>
    <p>
      <!-- v-on:事件名="要执行的少量代码" -->
      <button v-on:click="count = count + 1">加1</button>
    </p>
    <p>
      <!-- v-on:事件名="methods中的函数名" -->
      <button v-on:click="add">加5</button>
    </p>
    <p>
      <!-- v-on:事件名="methods中的函数名(实参)" -->
      <button v-on:click="addFn(40)">加40</button>
    </p>
    <p>
      <!-- 简写：@事件名="methods中的函数名(实参)" -->
      <button @click="addFno">加50</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    // 格式固定, 定义vue数据之处
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count += 5;
    },
    addFn(num) {
      this.count += num;
    },
    addFno() {
      this.count += 50;
    },
  },
};
</script>

<style>
</style>