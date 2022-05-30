<template>
  <!-- 嵌套内容 -->
  <div class="commentItem">
    <div class="top">
      <div class="left">
        <span>{{ item.user.nickname }}</span> &nbsp;&nbsp;&nbsp;
        <span>2分钟前</span>
      </div>
      <span @click="replyFn(item.id)">回复</span>
    </div>
    <!-- 第二层嵌套start -->
    <commentItem v-if="item.parent" :item="item.parent" @replyEvent="replyFn"></commentItem>
    <!-- 第三层嵌套end -->
    <div class="bottom">{{ item.content }}</div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            // 规定传入的item的数据类型
            type: Object,
            required: true
        }
    },
    // name属性相当于通过components注册了该组件，name的值就是注册的组件名
    name: 'commentItem',
    methods: {
        replyFn(id){
            this.$emit('replyEvent', id)
        }
    }
};
</script>

<style lang="less" scoped>
.commentItem {
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
  .top {
    font-size: 12px;
    color: #aaa;
    display: flex;
    justify-content: space-between;
  }
  .bottom {
    font-size: 13px;
    line-height: 40px;
  }
}
</style>