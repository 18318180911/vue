<template>
  <div>
    <h1>案例：折叠面板</h1>
    <h2>
      芙蓉楼送辛渐
      <button @click="put">{{ show ? "收起" : "展开" }}</button>
    </h2>
    <div v-show="show">
      <p>寒雨连江夜入吴</p>
      <p>平明送客楚山孤</p>
      <p>洛阳亲友如相问</p>
      <p>一片冰心在玉壶</p>
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
    put() {
      // 取反
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>