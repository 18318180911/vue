<template>
<div class="comment">
    <div class="addcomment" v-show='!isFocus'>
        <input type="text" placeholder="写跟帖" @focus="handlerFocus" />
        <span class="comment" @click="$router.push({path: '/commentList',query:{ id: $route.query.id } })" >
            <i class="iconfont iconpinglun-"></i>
            <!-- 评论数量 -->
            <em>{{ article.comment_length }}</em> 
        </span>
        <!-- 收藏 -->
        <i class="iconfont iconshoucang" :style="{ color: article.has_star?'red':'black' }"
        @click="starFn"></i>
        <i class="iconfont iconfenxiang"></i>
    </div>
    <div class="inputcomment" v-show='isFocus'>
        <textarea  ref='commtext' rows="5" @blur='isFocus = false'></textarea>
        <div>
            <span>发 送</span>
            <span>取 消</span>
        </div>
    </div>
</div>
</template>

<script>
import { articleDetail, post_star } from "@/api/news"
export default {
    data(){
        return {
            isFocus: false,
            article: {}
        }
    },
    created(){
        // 获取文章详情数据
        let id = this.$route.query.id
        articleDetail(id).then(res=>{
            this.article = res.data.data;
        })
    },
    methods: {
        // 收藏
        starFn(){
            post_star(this.article.id).then(res=>{
                // console.log(44, res);
                if(res.data.message == "收藏成功"|| res.data.message == "取消成功"){
                    // 更新浏览器上显示效果
                    this.article.has_star = !this.article.has_star
                    this.$toast.success(res.data.message)
                }else{
                    this.$toast.fail(res.data.message)
                }
            })
        },
        handlerFocus(){},
    }
}
</script>

<style lang="less" scoped>
.comment{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
.inputcomment{
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    background-color: #fff;
    align-items: flex-end;
    textarea{
        flex: 3;
        background-color: #eee;
        border:none;
        border-radius: 10px;
        padding: 10px;
    }
    div{
        padding: 20px;
    }
    span {
        display: block;
        flex: 1;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        background-color: #f00;
        color:#fff;
        text-align: center;
        border-radius: 6px;
        font-size: 13px;
    }
}
.addcomment {
    background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  > input {
    flex: 4;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #eee;
    padding-left: 20px;
    font-size: 14px;
  }
  i {
    font-size: 20px;
  }
  > span {
    flex: 1;
    position: relative;
    > em {
      position: absolute;
      right: 0;
      top: -5px;
      font-size: 10px;
      background-color: #f00;
      color: #fff;
      border-radius: 5px;
      padding: 3px 5px;
    }
  }
  > i {
    flex: 1;
  }
}
</style>