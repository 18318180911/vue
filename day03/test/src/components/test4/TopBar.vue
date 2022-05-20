<template>
  <div class="topBar">
      <div class="left">
          <slot :row="monthList" name="left"/>
              {{monthList.first}}工资报表
      </div>
      <div class="right">
          <!-- 插槽占位标签 -->
          <slot name="right">
              <!-- 如果外面没有传入，默认显示的内容 -->
              页面
          </slot>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        monthList: {
            first: '一月',
            second: '二月'
        }
    }
}
}
</script>

<style lang="less" scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  border: 2px solid salmon;
}
</style>