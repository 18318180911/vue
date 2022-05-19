<template>
  <div>
    <h4>水果案例</h4>
    <input type="text" @keyup.enter="login" v-model="fruits">
    <p>当前被点击是：{{currentFruit}}</p>
    <ul>
      <MyFruit v-for="(item, index) in list" :key="index" :data="item" @clickFruit="changCurrent"/>
    </ul>
  </div>
</template>

<script>
import MyFruit from '@/components/MyFruit.vue'
export default {
  components: {
    MyFruit
  },
  data() {
    return {
      fruits: '',
      list: [],
      fruit: '',
      currentFruit:'',
    }
  },
  methods: {
    login() {
      this.list.push(this.fruits);
      this.fruits = '';
    },
    changCurrent(data) {
      this.currentFruit = data
    }
  }
}
</script>

<style scoped>
</style>