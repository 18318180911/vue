<template>
  <div>
      <div>
          <router-link to="/">首页</router-link>
          <span>|</span>
          <router-link to="/pins">沸点</router-link>
      </div>
       <!-- 设置二级挂载点 -->
          <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>