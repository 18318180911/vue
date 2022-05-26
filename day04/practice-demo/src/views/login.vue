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
            :rules="[{ required: true, message: '用户名不能为空' }]"
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
        <a href="#/register" class="">去注册</a>
      </p>
      <van-button type="danger" round block icon="star-o" @click="loginFn"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user.js";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginFn() {
      this.$refs.form
        .validate()
        .then(() => {
          console.log("验证成功");
          login(this.user).then((res) => {
            console.log(res);
            if (res.data.message === "登录成功") {
              localStorage.setItem("75-token", res.data.data.token);
              localStorage.setItem("75-userId", res.data.data.user.id);
              this.$router.push({
                path: "/index",
              });
            } else {
              this.$toast.fail(res.data.message);
            }
          });
        })
        .catch(() => {
          console.log("验证失败");
        });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.van-field {
  border-bottom: 1px solid green;
  margin-bottom: 20px;
  input {
    color: green;
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