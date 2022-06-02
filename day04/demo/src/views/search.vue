<template>
  <div>
    <van-nav-bar left-arrow>
      <template #title>
        <van-search
          shape="round"
          placeholder="请输入搜索关键词"
          v-model="postSearch"
        />
      </template>
      <template #right>
        <span @click="searchFn">搜索</span>
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <div class="content">
      <h1>历史记录</h1>
      <ul class="content-list">
        <li>001</li>
        <li>002</li>
        <li>003</li>
      </ul>
    </div>
    <div class="content">
      <h1>搜索结果</h1>
      <ul class="content-list search-box">
        <li v-for="item in data" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { searchList } from "@/api/news";
export default {
  data() {
    return {
      postSearch: "",
      data: [],
    };
  },
  methods: {
    searchFn() {
      console.log(this.postSearch);
      searchList({ keyword: this.postSearch }).then((res) => {
        console.log(44, res);
        this.data = res.data.data;
      });
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
  .van-search {
    padding: 0px 12px;
  }
}
.content {
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  .content-list {
    li {
      font-size: 16px;
    }
  }
  .search-box {
    li {
      text-decoration: underline;
      margin: 10px 0;
    }
  }
}
</style>