<template>
  <div class="articaldetail">
    <div class="header">
      <div class="left">
        <van-icon name="arrow-left back" @click="$router.back()" />
        <span class="iconfont iconnew new"></span>
      </div>
      <span @click="followFn" :class="{active: article.has_follow}">{{
        article.has_follow ? "已关注" : "关注"
      }}</span>
    </div>
    <div class="detail" v-if="article.id">
      <div class="title">{{ article.title }}</div>
      <div class="desc">
        <span>{{ article.user.nickname }}</span> &nbsp;&nbsp;
        <span v-formatDate="article.create_date"></span>
      </div>
      <div
        v-if="article.type == 1"
        class="content"
        v-html="article.content"
      ></div>
      <div v-else class="content videoContent">
        <video
          :poster="article.cover[0].url"
          controls
          :src="article.content"
        ></video>
      </div>
      <div class="opt">
        <span class="like"> <van-icon name="good-job-o" />点赞 </span>
        <span class="chat"> <van-icon name="chat" class="w" />微信 </span>
      </div>
    </div>
    <!-- 精彩跟帖 -->
    <div class="keeps">
      <h2>精彩跟帖</h2>
      <div class="item">
        <div class="head">
          <img src="../assets/01.jpg" alt />
          <div>
            <p>火星网友</p>
            <span>2小时前</span>
          </div>
          <span>回复</span>
        </div>
        <div class="text">文章说得很有道理</div>
      </div>
      <div class="more">更多跟帖</div>
    </div>
    <commentFooter></commentFooter>
  </div>
</template>

<script>
import { articleDetail } from "@/api/news";
import { user_follows, user_unfollow } from "@/api/user";
export default {
  data() {
    return {
      article: {},
    };
  },
  created() {
    console.log("文章ID", this.$route.query.id);
    let id = this.$route.query.id;
    if (id) {
      articleDetail(id).then((res) => {
        this.article = res.data.data;
      });
    }
  },
  methods: {
    // 关注/取消关注
    followFn(){
      // 判断当前的关注状态，未关注则调用“关注”接口
      // 否则调用“取消关注”接口
      // 文章详情接口，返回了一个has_follow的字段给我们判断
      // 当前用户的关注状态，true表示已关注，false表示未关注
      if(this.article.has_follow){
        // 取消关注
        user_unfollow(this.article.user.id).then(res=>{
          console.log(96,res);
          if(res.data.message == "取消关注成功"){
            this.$toast.success(res.data.message)
            // 更新has_follow的值
            this.article.has_follow = !this.article.has_follow
          }else{
            this.$toast.fail(res.data.message)
          }
        })
      }else{
        // 进行关注
        user_follows(this.article.user.id).then(res=>{
          if(res.data.message == "关注成功"){
            this.$toast.success(res.data.message)
            // 更新has_follow的值
            this.article.has_follow = !this.article.has_follow
          }else{
            this.$toast.fail(res.data.message)
          }
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.artcaldetail {
  padding-bottom: 52px;
}
.header {
  padding: 0px 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  > .left {
    height: 100%;
    vertical-align: middle;
    position: relative;
    .van-icon {
      position: absolute;
      top: 15px;
      left: 0;
    }
    > span {
      margin-left: 22px;
      font-size: 50px;
    }
  }
  > span {
    padding: 5px 15px;
    background-color: #f00;
    color: #fff;
    text-align: center;
    border-radius: 15px;
    font-size: 13px;
  }
  >.active {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }
}
.detail {
  padding: 15px;
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
  }
  .desc {
    line-height: 30px;
    color: #999;
    font-size: 13px;
  }
  /deep/ .content {
    text-indent: 2em;
    line-height: 24px;
    font-size: 15px;
    padding-bottom: 30px;
    width: 100%;
    a {
      display: block;
      text-indent: 0;
      img {
        width: 100%;
      }
    }
  }
  .videoContent {
    text-indent: 0;
    video {
      width: 100%;
    }
  }
}
.opt {
  display: flex;
  justify-content: space-around;
  .like,
  .chat {
    height: 25px;
    padding: 0 15px;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  .w {
    color: rgb(84, 163, 5);
  }
}
.keeps {
  border-top: 5px solid #ddd;
  padding: 0 15px;
  > h2 {
    line-height: 50px;
    text-align: center;
  }
  .item {
    padding: 10px 0;
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
  .more {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    margin: 20px auto;
    font-size: 13px;
  }
}
</style>