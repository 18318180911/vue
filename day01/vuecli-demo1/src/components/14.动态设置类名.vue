<template>
  <div>
      <!-- 动态设置class：可控制多个类 -->
      <!-- :class="{ 类名: 布尔值 }" -->
      <!-- 布尔值为true, 标签增加类名， 为flase的时候删除类名 -->
    <button :class="{ on: isOn, off: !isOn}" @click="fn">点开</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn: false,
    };
  },
  methods: {
    fn() {
      this.isOn = !this.isOn;
    },
  },
};
</script>

<style>
.off {
  background-color: #ccc;
}
</style>