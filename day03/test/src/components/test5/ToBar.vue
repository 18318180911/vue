<template>
  <div>
    <div class="topBar">
      <div class="left">
          <slot :row="monthList" name="left">
              {{monthList.first}}
          </slot>
      </div>
      <div class="right">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            monthList: {
                one: '一月',
                two: '二月'
            }
        }
    }
};
</script>

<style lang="less" scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  border: 2px solid pink;
}
</style>