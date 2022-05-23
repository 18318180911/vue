<template>
  <div>
    hi
    <br />
    <!-- <button @click="handleClick">点它</button>
    <button @click="$router.back()">后退</button> -->
    <router-link class="myLink" to="/find/ranking">排行榜</router-link>
    <router-link class="myLink" to="/find/songlist">歌单</router-link>
    <router-link class="myLink" to="/find/recommend">推荐</router-link>
     <!-- 显示二级路由组件需要一个挂载点 -->
    <router-view></router-view>
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

<style scoped>
.myLink {
  margin: 0 10px;
}
</style>