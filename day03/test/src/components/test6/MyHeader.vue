<template>
  <div class="header" :style="{background: bg, color: color}">
      {{title}}
  </div>
</template>
<script>
export default {
  // props: ['bg', 'color', 'title']
  // props 的数组写法, 其实可以换成对象
  // 有更加详细的设定
  // 可以设定要求的数据格式
  props: {
    bg: String,
    // 继续用对象的形式, 可以设置默认值
    color: {
      type: String,
      default: '#fff'
    },
    // 如果有些数据没法设置默认值, 必须要传
    // 进行必填的校验
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  line-height: 60px;
  text-align: center;
  font-size: 18px;
}
</style>