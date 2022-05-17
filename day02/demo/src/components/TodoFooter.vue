<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{list.length}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected:type==='all'}" href="javascript:;" @click="type = 'all'">全部</a>
      </li>
      <li>
        <a :class="{selected:type==='no'}" href="javascript:;" @click="type = 'no'">未完成</a>
      </li>
      <li>
        <a :class="{selected:type==='yes'}" href="javascript:;" @click="type = 'yes'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearList">清除已完成</button>
  </footer>
</template>
<script>
export default {
  props: ['list'],
  watch: {
    type(newVal) {
      this.$emit('changeType', newVal)
    }
  },
  data() {
    return {
      type: 'all'
    }
  },
  methods: {
    clearList() {
      this.$emit('clearList')
    }
  }
}
</script>
