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
        <van-icon name="manager-o" size="20" />
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <van-tabs>
      <van-tab v-for="item in categoryList" :title="item.name" :key="item.id">
        <!-- 下拉 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="我是有底线的~"
            @load="onLoad"
            :immediate-check="false"
          >
            <!-- 新闻列表 -->
            <newsItem
              v-for="item in newsList"
              :key="item.id"
              :post="item"
            ></newsItem>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import newsItem from "../components/newsItem.vue";
import { category, post_news } from "@/api/news.js";
export default {
  components: {
    newsItem,
  },
  data() {
    return {
      // 栏目列表
      categoryList: [],
      // 表示栏目下标值，1表示默认获取“头条”的下标
      curIndex: 1,
      // 新闻列表
      newsList: [],
      isLoading: false,
      pageIndex: 1,
      pageSize: 8,
      loading: false,
      finished: false,
    };
  },

  created() {
    category().then((res) => {
      this.categoryList = res.data.data;
      this.getNews();
    });
  },
  methods: {
    // 获取文章列表数据，封装在getNews函数中调用接口，是为了能够复用这个里面的代码。
    getNews() {
      post_news({
        category: this.categoryList[this.curIndex].id,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      }).then((res) => {
        this.newsList = res.data.data;
        this.newsList = [...this.newsList, ...res.data.data];
        // 表示下拉刷新完成
        this.isLoading = false;
        this.loading = false;
        if (res.data.data.length < this.pageSize) {
          this.finished = true;
        }
      });
    },
    // 下拉更新
    onRefresh() {
      this.getNews();
    },
    // 上拉加载时触发的函数
    onLoad() {
      console.log(85, "上拉加载");
      // 更新请求页码数
      this.pageIndex++,
      // 调用接口获取下一页的数据
      this.getNews();
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  background: red;
  .iconnew {
    font-size: 50px;
    color: #fff;
  }
  .van-nav-bar__title {
    width: 60%;
    .search-box {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.3);
      span {
        color: #fff;
      }
    }
  }

  .van-icon {
    color: #fff;
  }
}
</style>