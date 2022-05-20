<template>
  <div>
      <!-- 插槽的作用是占位 -->
      <TopBar>
          <template #left>
              666
          </template>
           <template v-slot: right>
               <button>新增员工</button>
               <button>导入员工</button>
           </template>
      </TopBar>
      <TopBar>
          <template #left>
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

</style>