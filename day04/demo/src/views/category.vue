<template>
    <div>
    <!-- 头部 -->
    <van-nav-bar title="频道管理" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <div class="content">
        <h1>点击删除频道</h1>
        <van-grid :gutter="10">
            <van-grid-item v-for="value in categoryList" :key="value.id" :text="value.name" @click="delFn(value.id)" />
        </van-grid>
    </div>
    <div class="content">
        <h1>点击添加频道</h1>
        <van-grid :gutter="10">
            <van-grid-item v-for="value in delCategoryList" :key="value.id" :text="value.name" />
        </van-grid>
    </div>
    </div>
</template>


<script>
import {category} from '@/api/news'
export default {
    data() {
        return {
            categoryList: [],
            delCategoryList: []
        }
    },
    created(){
        category().then(res => {
            this.categoryList = res.data.data
            this.categoryList.splice(1, 2)
        })
    },
    methods:{
        delFn(id) {
            // 把被删除的添加delCategoryList数组中
            let res = this.categoryList.filter(item => {
                return item.id === id
            })
            this.delCategoryList.push(...res)
            // 把不需要删除的过滤出来
            this.categoryList = this.categoryList.filter(item => {
                return item.id != id
            })
        }
    }
}
</script>


<style lang="less" scoped>
/deep/.van-nav-bar {
  border-bottom: 1px solid #ddd;
  .van-icon{
      color: #000;
  }
}
.content{
    padding: 20px 10px;
    h1{
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0px 20px 0px;
    }
    /deep/.van-grid{
        padding: 0 10px;
        .van-grid-item__content{
            border: 1px solid #ddd;
            .van-grid-item__text{
            font-size: 16px;
            }
        }
    }
}
</style>