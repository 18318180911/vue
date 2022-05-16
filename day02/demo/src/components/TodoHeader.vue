<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <!--  输入框 – 键盘事件 – 回车按键 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="task"
      @keydown.enter="addTask"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addTask() {
      // 4.输入框为空, 提示用户必须输入内容
      if (!this.task) {
        alter('请输入内容')
        return
      }
      // 子传父, 把待办任务 – App.vue中 – 加入数组list里
      // 每当回车通知父页面
      this.$emit('addTask', this.task)
      this.task = ''
    }
  }
}
</script>