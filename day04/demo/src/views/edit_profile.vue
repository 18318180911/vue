<template>
  <div>
    <van-nav-bar title="个人信息编辑" left-arrow>
      <template #right>
        <van-icon name="wap-home-o" size="20" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar{
    border-bottom: 1px solid #ddd;
    .van-icon {
        color: #000;
    }
}
</style>