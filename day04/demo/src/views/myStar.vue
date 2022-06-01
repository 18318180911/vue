<template>
    <div>
    <!-- 头部 -->
    <van-nav-bar title="我的收藏" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <!-- 列表 -->
    <van-swipe-cell v-for="item in star" :key="item.id">
        <newsItem :post="item"></newsItem>
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
        </template>
    </van-swipe-cell>
    </div>
</template>

<script>
import { starList} from '@/api/user'
import newsItem from '@/components/newsItem.vue'
export default {
    data() {
        return {
            star: []
        }
    },
    created() {
        starList().then(res => {
            console.log(15,res)
            this.star = res.data.data
        })
    },
    components: {newsItem},
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