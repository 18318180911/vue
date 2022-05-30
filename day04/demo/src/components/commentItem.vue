<template>
  <!-- 嵌套内容 -->
  <div class="commentItem">
    <div class="top">
      <div class="left">
        <span>{{ item.user.nickname }}</span> &nbsp;&nbsp;&nbsp;
        <span>2分钟前</span>
      </div>
      <span>回复</span>
    </div>
    <!-- 第二层嵌套start -->
    <commentItem v-if="item.parent" :item="item.parent"></commentItem>
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
            require: true
        }
    },
    // name属性相当于通过components注册了该组件，name的值就是注册的组件名
    name: 'commentItem'
};
</script>

<style>
</style>