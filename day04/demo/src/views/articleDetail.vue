<template>
  <div class="articaldetail">
    <div class="header">
        <div class="left">
            <van-icon name="arrow-left back"
                      @click="$router.back()" />
            <span class="iconfont iconnew new"></span>
        </div>
        <span>关注</span>
    </div>
    <div class="detail" v-if="article.id">
        <div class="title">{{article.title}}</div>
        <div class="desc">
            <span>{{article.user.nickname}}</span> &nbsp;&nbsp;
            <span v-formatDate="article.create_date"></span>
        </div>
        <div class="content" v-html="article.content">
            文章的内容：
            <ul>
              <li>0001</li>
              <li>0002</li>
              <li>0003</li>
              <li>0004</li>
              <li>0005</li>
              <li>0006</li>
              <li>0007</li>
              <li>0008</li>
              <li>0009</li>
              <li>0010</li>
              <li>0011</li>
              <li>0012</li>
              <li>0013</li>
              <li>0014</li>
              <li>0015</li>
              <li>0016</li>
              <li>0017</li>
              <li>0018</li>
              <li>0019</li>
              <li>0020</li>
              <li>0021</li>
              <li>0022</li>
              <li>0023</li>
              <li>0024</li>
              <li>0025</li>
              <li>0026</li>
              <li>0027</li>
              <li>0028</li>
              <li>0029</li>
              <li>0030</li>
            </ul>
        </div>
        <div class="opt">
            <span class="like">
                <van-icon name="good-job-o" />点赞
            </span>
            <span class="chat">
                <van-icon name="chat"
                          class="w" />微信
            </span>
        </div>
    </div>
    <!-- 精彩跟帖 -->
    <div class="keeps">
        <h2>精彩跟帖</h2>
        <div class="item">
            <div class="head">
                <img src="../assets/01.jpg"
                     alt />
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
import { articleDetail } from '@/api/news'
export default {
  data(){
    return {
      article: {}
    }
  },
  created() {
    console.log('文章ID', this.$route.query.id);
    let id = this.$route.query.id
    if(id) {
      articleDetail(id).then(res => {
        this.article = res.data.data
      })
    }
  }
}
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
    a{
      display: block;
      text-indent: 0;
      img {
        width: 100%;
      }
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