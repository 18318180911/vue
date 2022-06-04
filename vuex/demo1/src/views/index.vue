<template>
  <div>
      <h1>首页</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// 通过$符来声明变量
// 全局
$highlight-color: #f90;
div{
  h1{
    color: $highlight-color;
    // 局部
    $h1Color: pink;
    border: 1px solid $h1Color;
    background: $h1Color;
  }
}

</style>