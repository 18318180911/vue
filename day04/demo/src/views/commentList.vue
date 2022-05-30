<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="精彩评论" left-arrow @click-left="$router.back()" />
    <!-- 评论列表 -->
    <div class="item">
        <div class="head">
            <img src="../assets/01.jpg" alt />
            <div>
                <p>发表人</p>
                <span>时间</span>
            </div>
            <span>回复</span>
        </div>
        <div class="text">评论内容</div>
    </div>
    <!-- 底部评论块 -->
    <commentFooter></commentFooter>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
/deep/.van-nav-bar{
    border-bottom: 1px solid #ddd;
    .van-icon{
        color: #000;
    }
} 
.item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > img {
            width: (50/360) * 100vw;
            height: (50/360) * 100vw;
            display: block;
            border-radius: 50%;
        }
        > div {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            > span {
                font-size: 12px;
                color: #999;
                line-height: 25px;
            }
        }
        > span {
            color: #999;
            font-size: 13px;
        }
    }
    .text {
        font-size: 14px;
        color: #333;
        padding: 20px 0 10px 0;
    }
}
</style>

A王者峡谷-百星野王(Cat)

我是好人