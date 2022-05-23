<template>
  <div>
    <TopBar>
      <template #left="data">
        {{data.row.two}} 工资报表
          <button>新增员工</button>
          <button>导入员工</button>
      </template>
      <template v-slot:right>
          <button>新增员工</button>
          <button>导入员工</button>
      </template>
    </TopBar>
    <TopBar>
      <template #right>
         <button>报表</button>
      </template>
     
    </TopBar>
  </div>
</template>

<script>
import TopBar from "@/components/test5/ToBar.vue";
export default {
  components: {
    TopBar,
  },
};
</script>

<style>
</style>