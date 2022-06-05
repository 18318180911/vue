<template>
  <div>
    <h1>优化数据为: {{filterList1}}</h1>
    <h1>辅助数据为: {{filterList}}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    filterList1() {
      return this.$store.getters.filterList
    },
    ...mapGetters(['filterList'])
  }
};
</script>

<style>
</style>