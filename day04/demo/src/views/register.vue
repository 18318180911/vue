<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <van-form ref="form">
          <!-- error: 字体红色样式
                label: 设置输入框左边的标题
                required：表示必填项
                ref:作用一，获取标签
                    作用二，获取组件 -->
          <van-field
            v-model="user.username"
            required
            placeholder="请输入手机号码"
            :rules="[{ required: true, message: '手机号码不能为空' }]"
          ></van-field>
          <van-field v-model="user.nickname" placeholder="请输入昵称" :rules="[{ required: true, message: '昵称不能为空' }]"
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
import {register} from '@/api/user'
export default {
  data() {
    return {
      user: {
        username: "12345634689",
        passowrd: "",
        nickname: ""
      },
    };
  },
  methods: {
      registerFn() {
          register(this.user).then(res=> {
              console.log(res);
              if(res.data.message === '注册成功') {
                  this.$router.push({
                      path: '/login'
                  })
              } else {
                  this.$toast.fail(res.data.message)
              }
          })
      }
  }
};
</script>

<style lang="less" scoped>
// 样式出头：表示使用了样式穿透，我们就可以直接设置组件内部的标签样式
/deep/.van-field {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  input {
    color: black;
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