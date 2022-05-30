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
    <div class="bottom">{{ item.content }}</div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        }
    }
};
</script>

<style>
</style>