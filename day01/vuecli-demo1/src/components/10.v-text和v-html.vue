<template>
  <div>
    <!-- v-text:设置标签内容 -->
    <!-- 语法：v-text="变量" -->
    <!-- v-text把内容转为文本直接显示，不会解析内容 -->
    <h1 v-text="hello"></h1>
    <h1 v-text="helloHTML"></h1>
    <!-- v-html:设置标签内容为HTML -->
    <!-- 语法：v-html="变量" -->
    <h1 v-html="hello"></h1>
    <h1 v-html="helloHTML"></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: "hi",
      helloHTML: "<button>点击</button>",
    };
  },
};
</script>

<style>
</style>