<template>
  <div>
    <h4>水果案例</h4>
    <input type="text" @keyup.enter="login" v-model="fruits">
    <p>当前被点击是：{{fruit}}</p>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="fruit = item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: '',
      list: [],
      fruit: '',
    }
  },
  methods: {
    login() {
      this.list.push(this.fruits);
      // 清空输入框
      this.fruits = '';
    }
  }
}
</script>

<style scoped>
</style>