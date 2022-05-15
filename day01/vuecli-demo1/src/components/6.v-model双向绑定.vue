<template>
  <div>
    <h1>{{ username }}</h1>
    <p>用户名：<input type="text" v-model="username" /></p>
    <p>密码：<input type="password" v-model="password" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
    },
  },
};
</script>

<style>
</style>