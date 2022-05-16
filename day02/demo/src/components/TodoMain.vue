<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <!-- v-for循环展示数据 -->
    <!-- :class根据选中状态，设置完成划线样式 -->
    <li :class="{completed: item.isDone}" v-for="item in list" :key='item.id'>
      <div class="view">
        <!-- v-mode绑定复选框选中状态 -->
        <input class="toggle" type="checkbox" v-model="item.isDone"/>
        <label>{{ item.name }}</label>
        <button class="destroy"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
  props: ['list']
};
</script>