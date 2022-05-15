<template>
  <div>
    <!-- @事件名="方法"，方法的第一个参数就是事件对象 -->
    <!-- 无传参，直接在形参接收 -->
    <a href="https://www.baidu.com" @click="fn">点击1</a>
    <p>
      <!-- 有参数，手动传入$event对象 -->
      <a href="https://www.baidu.com" @click="fn1(10, $event)">点击2</a>
    </p>
    <!-- 修饰符 -->
    <!-- .stop阻止事件冒泡 -->
    <div @click="parent">
      parent
      <div @click.stop="child">child</div>
    </div>
    <!-- .prevent阻止默认行为 -->
    <p>
      <a href="https://www.baidu.com" @click.prevent="fn2">点击2</a>
    </p>
    <!-- .once只触发一次 -->
    <button @click.once="fn3">一次</button>
    <!-- 键盘绑定事件 -->
    <div>
      <!-- @keyup.enter回车按钮 -->
      <div>用户名: <input type="text" /></div>
      <!-- @keyup.esc返回按键 -->
      <div>密码: <input type="text" @keyup.esc="login" /></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn(e) {
      e.preventDefault();
    },
    fn1(num, e) {
      e.preventDefault();
    },
    parent() {},
    child() {
      console.log("阻止冒泡");
    },
    fn2() {
      console.log("阻止默认行为");
    },
    fn3() {
      console.log("触发");
    },
    login() {
      console.log("登录");
    },
  },
};
</script>

<style>
</style>