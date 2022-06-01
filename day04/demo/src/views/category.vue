<template>
    <div>
    <!-- 头部 -->
    <van-nav-bar title="频道管理" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <div class="content">
        <h1>点击删除频道</h1>
        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" text="文字" />
        </van-grid>
    </div>
    <div class="content">
        <h1>点击添加频道</h1>
        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" text="文字" />
        </van-grid>
    </div>
    </div>
</template>


<script>
export default {


}
</script>


<style lang="less" scoped>
/deep/.van-nav-bar {
  border-bottom: 1px solid #ddd;
  .van-icon{
      color: #000;
  }
}
.content{
    padding: 20px 10px;
    h1{
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0px 20px 0px;
    }
    /deep/.van-grid{
        padding: 0 10px;
        .van-grid-item__content{
            border: 1px solid #ddd;
            .van-grid-item__text{
            font-size: 16px;
            }
        }
    }
}
</style>