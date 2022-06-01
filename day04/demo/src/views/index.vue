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
        <van-icon
          name="manager-o"
          size="20"
          @click="$router.push('/personal')"
        />
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <!-- v-model="curIndex设置栏目选中效果" -->
    <van-tabs v-model="curIndex" @change="tabChangeFn">
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
              @click.native="toDetail(item.id)"
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
    let categorys = JSON.parse(localStorage.getItem("categoryList")) || [];
    let defaultCategory =
      JSON.parse(localStorage.getItem("defaultCategory")) || [];
    if (defaultCategory.length > 0) {
      this.categoryList = [...defaultCategory, ...categorys];
      this.getNews();
    } else {
      category().then((res) => {
        this.categoryList = res.data.data;
        this.getNews();
      });
    }
  },
  methods: {
    // 获取文章列表数据，封装在getNews函数中调用接口，是为了能够复用这个里面的代码。
    getNews() {
      post_news({
        category: this.categoryList[this.curIndex].id,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      }).then((res) => {
        // this.newsList = res.data.data;
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
      // 重置相关的变量
      // 因为上拉加载的会改变pageIndex的值，所以为了重新获取第一页的数据，需要重置
      this.pageIndex = 1;
      // 因为数组是累加在一起，因此导致报错，但其实我们刷新数据是不需要累加数据的，因此要重置
      this.newsList = [];
      // 因为上拉加载有可能会导致finished设置会true，因为为了能够实现刷新页面后还能够继续实现上拉加载功能，因此需要重置
      this.finished = false;
      this.getNews();
    },
    // 上拉加载时触发的函数
    onLoad() {
      console.log(85, "上拉加载");
      // 当第一页的数据还没有请求回来的时候，阻止继续请求下一页的数据
      if (this.newsList.length === 0) {
        return;
      }
      // 更新请求页码数
      this.pageIndex++;
      // 调用接口获取下一页的数据
      this.getNews();
    },
    // 点击栏目时触发的函数
    tabChangeFn(name, title) {
      // name：指的是栏目对应的下标值
      // title：指的是栏目对应的标题
      // 实现更新数据
      this.onRefresh();
    },
    toDetail(id) {
      this.$router.push({
        path: "/articleDetail",
        query: { id },
      });
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