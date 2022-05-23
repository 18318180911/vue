<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <button @click="get">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['帅哥', '美女', '程序员']
    }
  },
  methods: {
    get() {
      // 头部数据加入到末尾
      this.arr.push(this.arr[0]);
      // 再把头部的数据删除掉
      this.arr.shift();
    }
  }
}
</script>