<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <van-form ref="form">
          <van-field
            v-model="user.username"
            required
            placeholder="请输入手机号"
            :rules="[{ required: true, pattern: /^1[3,4,5,6,7,8,9]\d{9}$/, message: '手机号不能为空' }]"
          ></van-field>
          <van-field
            v-model="user.nickname"
            required
            placeholder="请输入昵称"
            :rules="[{ required: true, message: '昵称不能为空' }]"
          ></van-field>
          <van-field
            v-model="user.password"
            required
            placeholder="请输入密码"
            :rules="[{ required: true, message: '密码不能为空' }]"
          ></van-field>
        </van-form>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/login" class="">去登录</a>
      </p>
      <van-button type="primary" round block @click="registerFn"
        >注册</van-button
      >
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user.js";
export default {
  data() {
    return {
      user: {
        username: "12354566786",
        password: "",
        nickname: "",
      },
    };
  },
  methods: {
    registerFn() {
      this.$refs.form
        .validate()
        .then(() => {
          console.log("校验通过");
          register(this.user).then((res) => {
            console.log("注册成功");
            if (res.data.message == "注册成功") {
              this.$router.push({
                path: "/login",
              });
            } else {
              this.$toast.fail(res.data.message);
            }
          });
        })
        .catch(() => {
          console.log("校验失败");
        });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.van-field {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  input {
    color: #000;
  }
}
.container {
  padding: 20px;
}
.close {
  span {
    font-size: (27 / 360) * 100vw;
  }
}
.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: (126 / 360) * 100vw;
    color: #d81e06;
  }
}
.inputs {
  input {
    margin-bottom: 20px;
  }
}
.tips {
  text-align: right;
  margin-bottom: 20px;
  a {
    color: #3385ff;
  }
}
</style>