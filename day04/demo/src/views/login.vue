<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <van-field required placeholder="请输入用户名"></van-field>
        <van-field required placeholder="请输入密码"></van-field>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class="">去注册</a>
      </p>
      <van-button type="danger" icon="star-o" round block>登陆按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 样式出头：表示使用了样式穿透，我们就可以直接设置组件内部的标签样式
/deep/.van-field{
    border-bottom: 1px solid green;
    margin-bottom: 20px;
    input{
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