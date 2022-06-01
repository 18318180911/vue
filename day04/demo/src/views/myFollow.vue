<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="我的关注" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <!-- 列表 -->
    <div class="list" v-for="item in follows" :key="item.id">
      <div class="box">
        <img :src="item.head_img | joinPath" alt="" />
        <div class="center">
          <p>{{item.nickname}}</p>
          <span c-formaDate="item.create_date"></span>
        </div>
        <span>取消关注</span>
      </div>
    </div>
  </div>
</template>

<script>
import { followsList } from '@/api/user'
export default {
    data() {
        return {
            // 保存
            follows: []
        }
    },
    created() {
        followsList().then(res=> {
            console.log(30, res);
            this.follows = res.data.data
        })
    }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  border-bottom: 1px solid #ddd;
}
.list {
  .box {
    display: flex;
    padding: 25px 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    > img {
      display: block;
      width: (50/360) * 100vw;
      height: (50/360) * 100vw;
      border-radius: 50%;
      padding: 0 10px;
    }
    > .center {
      flex: 1;
      > p {
        line-height: 30px;
        font-size: 14px;
      }
      > span {
        font-size: 12px;
        color: #999;
      }
    }
    > span {
      height: 30px;
      background-color: #eee;
      font-size: 13px;
      border-radius: 30px;
      line-height: 30px;
      padding: 0px 15px;
    }
  }
}
</style>