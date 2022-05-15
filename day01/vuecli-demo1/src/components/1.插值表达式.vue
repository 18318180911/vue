<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age > 18 ? "成年" : "未成年" }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    // 格式固定, 定义vue数据之处
    return {
      // key相当于变量名
      msg: "hello, vue",
      obj: {
        name: "小爱同学",
        age: 5,
      },
    };
  },
};
</script>

<style>
</style>