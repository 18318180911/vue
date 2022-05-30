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
        <textarea v-model="content" ref='commtext' rows="5"></textarea>
        <div>
            <span @click="sendFn">发 送</span>
            <span>取 消</span>
        </div>
    </div>
</div>
</template>

<script>
import { articleDetail, post_star, sendComment } from "@/api/news"
export default {
    data(){
        return {
            isFocus: false,
            article: {},
            content: '',
            parent_id: null
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
        handlerFocus(){
            // 控制文本域的显示
            this.isFocus = true
            // 文本域自动聚焦 focus
            // 因为DOM更新是异步的，无法聚焦，可以使用this.$nextTick解决
            this.$nextTick(() => {
                this.$refs.commtext.focus()
            })
        },
        // 发表评论
        sendFn() {
            if(!this.content) {
                return this.$toast.fail('评论内容不能为空')
            }
            // 动态添加parent_id参数
            let query = {
                content: this.content
            }
            if(this.parent_id) {
                // 向query对象添加parent_id属性
                query.parent_id = this.parent_id
            }
            sendComment(this.article.id, {
                content: this.content
            }).then(res => {
                console.log(73, res);
                if(res.data.message == "评论发布成功") {
                    // 更新浏览器中的评论列表
                    this.$emit('updateEvent')
                    // 清空评论内容
                    this.content = ''
                    // 隐藏文本域
                    this.isFocus = false
                } else {
                    this.$toast.fail(res.data.message)
                }
            })
        },
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