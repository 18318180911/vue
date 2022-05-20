<template>
  <div>
      <!-- 插槽的作用是占位 -->
       <TopBar>
          <template v-slot:left="scope">
              {{scope.row.second}} 工资报表
          </template>
          <template v-slot:right>
              <button>报表</button>
          </template>
      </TopBar>
      <TopBar>
          <input type="text" placeholder="请输入内容">
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