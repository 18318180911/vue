<template>
  <div>
      <!-- 插槽的作用是占位 -->
      <TopBar>
          <button>新增员工</button>
            <button>导入员工</button>
      </TopBar>
      <TopBar>
          <button>报表</button>
      </TopBar>
  </div>
</template>

<script>
import TopBar from '@/components/test4/TopBar.vue'
export default {
    components: {
        TopBar
    }
}
</script>

<style>

</style>