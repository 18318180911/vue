<template>
  <div>
    hi
    <br />
    <button @click="handleClick">点它</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("点击了");
      this.$router.push({
        // 需要 params 传参的话
        // path 跟 params 两个属性会冲突
        name: "MyPage",
        params: {
          id: 6666,
        },
      });
    },
  },
};
</script>

<style>
</style>