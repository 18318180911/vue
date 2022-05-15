<template>
  <div>
    <!-- 1.静态，标题按钮，内容显示 -->
    <h1>案例:折叠面板</h1>
    <h4>
      静夜思
      <!-- 2.给按钮绑定点击事件 -->
      <!-- 5.设置按钮文案 -->
      <button @click="toggle">{{ show ? "收起" : "展开" }}</button>
    </h4>
    <!-- 3.控制内容显示，使用v-show或者v-if -->
    <div v-show="show">
      <p>床前明月光</p>
      <p>疑是地上霜</p>
      <p>举头望明月</p>
      <p>低头思故乡</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    // 第四步 在事件内部控制内容显示
    // 使用了取反运算
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>