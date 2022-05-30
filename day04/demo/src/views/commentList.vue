<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="精彩评论" left-arrow @click-left="$router.back()" />
    <!-- 评论列表 -->
    <div class="item" v-for="item in comment" :key="item.id">
      <div class="head">
        <img :src="item.user.head_img | joinPath" alt />
        <div>
          <p>{{ item.user.nickname }}</p>
          <span v-formatDate="item.create_date"></span>
        </div>
        <span @click="replyFn(item.id)">回复</span>
      </div>
      <commentItem
        v-if="item.parent"
        :item="item.parent"
        @replyEvent="replyFn"
      ></commentItem>
      <div class="text">{{ item.content }}</div>
    </div>
    <!-- 底部评论块 -->
    <commentFooter ref="footer" @updateEvent="updateFn"></commentFooter>
  </div>
</template>


<script>
import { post_comment } from "@/api/news";
import commentItem from "@/components/commentItem.vue";
export default {
  data() {
    return {
      comment: [],
    };
  },
  components: { commentItem },
  created() {
    this.updateFn();
  },
  methods: {
    updateFn() {
      post_comment(this.$route.query.id).then((res) => {
        this.comment = res.data.data;
      });
    },
    replyFn(id) {
      // 直接调用子组件的handlerFocus方法实现
      // 控制底部文本域的显示
      this.$refs.footer.handlerFocus();
      // 把id传递给子组件
      this.$refs.footer.parent_id = id;
    },
  },
};
</script>


<style lang="less" scoped>
/deep/.van-nav-bar {
  border-bottom: 1px solid #ddd;
  .van-icon {
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