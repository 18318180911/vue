<template>
  <div class="topBar">
      <div class="left"></div>
      <div class="right">
          <slot/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  border: 2px solid salmon;
}
</style>