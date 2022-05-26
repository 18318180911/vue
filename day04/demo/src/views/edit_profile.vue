<template>
  <div>
      <!-- 头部 -->
      <!-- left-arrow：左箭头 -->
    <van-nav-bar title="个人信息编辑" left-arrow>
      <template #right>
        <van-icon name="wap-home-o" size="20" />
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <div class="content">
        <div class="head_img">
            <img src="http://img1.imgtn.bdimg.com/it/u=3757784226,1202878475&fm=26&gp=0.jpg" alt="">
        </div>
        <van-cell title="昵称" is-link value="大家加油" />
        <van-cell title="密码" is-link value="******" />
        <van-cell title="性别" is-link value="女" />
    </div>
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
.content {
    .head_img{
        width: 80px;
        width: 80px;
        margin: 20px auto;
        img {
            width:100%;
        }
    }
    .van-cell {
        border-bottom: 1px solid #ddd;
        margin-top: 10px;
    }
}
</style>