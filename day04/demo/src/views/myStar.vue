<template>
    <div>
    <!-- 头部 -->
    <van-nav-bar title="我的收藏" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <!-- 列表 -->
    <van-swipe-cell v-for="item in star" :key="item.id">
        <newsItem :post="item" @click.native="toDetail(item.id)"></newsItem>
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="delFn(item.id)" />
        </template>
    </van-swipe-cell>
    </div>
</template>

<script>
import { starList} from '@/api/user'
import newsItem from '@/components/newsItem.vue'
import {post_star}  from '@/api/news'
export default {
    data() {
        return {
            star: []
        }
    },
    created() {
        this.getStarList()
    },
    components: {newsItem},
    methods: {
        getStarList() {
            starList().then(res => {
            console.log(15,res)
            this.star = res.data.data
        })
        },
        delFn(id) {
            post_star(id).then(res => {
                if(res.data.message == '取消成功'){
                    this.getStarList()
                    this.$toast.success(res.data.message)
                } else {
                    this.$toast.fail(res.data.message)
                }
            })
        },
        // 跳转到文章详情
        toDetail(id){
            this.$router.push({
                path: '/articleDetail',
                query: {
                    id
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  border-bottom: 1px solid #ddd;
}
.van-button {
    height: 100%;
}
</style>