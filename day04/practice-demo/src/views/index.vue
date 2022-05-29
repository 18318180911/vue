<template>
  <div>
        <!-- 头部 -->
        <van-nav-bar>
            <template #left>
                <span class="iconfont iconnew"></span>
            </template>
            <template #title>
                <div class="search-box">
                    <van-icon name="search" />
                    <span>搜索商品</span>
                </div>
            </template>
            <template #right>
                <van-icon name="manager-o" size="22" />
            </template>
        </van-nav-bar>
        <!-- 导航- 栏目列表 -->
        <van-tabs>
             <van-tab v-for="item in categoryList" 
            :title="item.name" :key="item.id">
                <!-- 新闻列表 -->
                 <newsItem v-for="item in newsList" 
                :key="item.id" :post="item"></newsItem>
            </van-tab>
        </van-tabs>
        
  </div>
</template>

<script>
import newsItem from "@/components/newsItem.vue"
import { category, post_news } from "@/api/new.js"
export default {
     components: {
        newsItem
    },
    data(){
        return {
            categoryList: [], // 栏目列表
            curIndex: 1, // 表示栏目下标值，1表示默认获取“头条”的下标
            newsList: [], // 新闻列表
        }
    },
    created(){
        category().then(res=>{
            // console.log(37, res);
            this.categoryList = res.data.data
             // id来获取，又因为只有在这里栏目id才存在
            this.getNews()
        })
    },
    methods: {
         getNews(){
            post_news({
                category: this.categoryList[this.curIndex].id
            }).then(res=>{
                // console.log(52, res);
                this.newsList = res.data.data
            })
        }
    }
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