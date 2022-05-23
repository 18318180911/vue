<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="item">
        {{ item }}
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="generate">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
    };
  },
  methods: {
    del(index) {
     // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    generate() {
      // 生成随机数
      let num = Math.floor(Math.random() * 20);
      // 添加随机数
      this.list.push(num);
    },
  },
};
</script>

<style>
</style>