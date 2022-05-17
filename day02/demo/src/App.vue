<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @addTask="addTask"></TodoHeader>
    <TodoMain @delTask="delTask" :list="showList"></TodoMain>
    <TodoFooter @clearList="clearList" @changeType="changeType" :list="showList"></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"
    
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  data() {
    return {
      // 准备数组
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 201, name: "睡觉", isDone: false },
      //   { id: 103, name: "打豆豆", isDone: true },
      // ],
      list: JSON.parse(localStorage.getItem('list')) || [],
      type: 'all',
    }
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("list", JSON.stringify(newVal))
      }
    }
  },
  computed: {
    showList() {
      let showList = []
      if (this.type === 'all') {
        showList = this.list
      } else if (this.type === 'yes'){
        showList = this.list.filter(item=>item.isDone)
      } else {
        showList = this.list.filter(item=>!item.isDone)
      }
      return showList
    }
  },
  methods: {
    addTask(task) {
      this.list.push({
        // 使用时间戳来做id
        id: Date.now(),
        name: task,
        isDone: false
      })
    },
    delTask(index) {
      // 根据传入的index删除数据
      this.list.splice(index, 1);
    },
    changeType(type) {
      this.type = type
    },
    clearList() {
      // 点击清空已完成
      this.list = this.list.filter(item => !item.isDone)
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>