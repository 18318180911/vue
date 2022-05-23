<template>
  <div>
      <table class="table table-bordered table-strpped">
          <!-- 表格标题区域 -->
    <thead>
      <tr>
        <slot name="header" />
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <slot :index="index" :row="item" name="content" />
      </tr>
    </tbody> 
      </table>
  </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>