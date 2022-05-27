<template>
  <div>
        <!-- 头部 -->
        <van-nav-bar title="标题" left-text="返回" left-arrow>
            <template #left>
                <span class="iconfont iconnew icon-left"></span>
            </template>
            <!-- 中 -->
            <template #title>
                <div class="search">
                   <van-icon name="search" size="18" /> 
                   <span>搜索商品</span>
                </div>
            </template>
            <!--right  -->
            <template #right>
                <van-icon name="manager-o"  size="20"  />
            </template>
        </van-nav-bar>   
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar{
    background: red;
    .iconnew{
        font-size: 50px;
        color: #fff;
    }
    .van-nav-bar__title{
        width: 60%;
        .search-box{
            width: 100%;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border-radius: 20px;
            background: rgba(255,255,255, 0.3);
            span{
                color: #fff;
            }
        }
    }


    .van-icon{
        color: #fff;
    }
}
</style>