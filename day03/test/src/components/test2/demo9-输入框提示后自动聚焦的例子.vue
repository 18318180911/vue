<template>
  <div>
    <div>页面</div>
    <div>
      <!-- 点击自身隐藏，显示一个输入框，输入框自动聚焦 -->
      <input v-if="isShowSearch" type="text" ref="search">
      <button v-else @click="showSearch">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSearch: false
    }
  },
  methods: {
    showSearch() {
      // 想要聚焦输入框，只要获取输入框dom执行focus函数即可
      this.isShowSearch = !this.isshowSearch
      // 需要等待渲染完毕后（渲染使用v-if），有了input再执行， 使用this.$nextTick
      this.$nextTick(() => {
        this.$refs.search.focus()
      })
    }
  }
}
</script>

<style>

</style>