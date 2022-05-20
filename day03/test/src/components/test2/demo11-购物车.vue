<template>
  <div>
    <!-- 头部 -->
    <div class="header">购物车案例</div>
    <!-- 列表 -->
    <div class="list">
      <div class="item">
        <input class="checkbox" type="checkbox" name="" id="" />
        <img
          src="https://pic2.zhimg.com/50/v2-73d09ee61be3a5fed23d8e85ec5b49b3_hd.jpg?source=1940ef5c"
          alt=""
        />
        <div class="info">
          <div class="top">小米手机10</div>
          <div class="bottom">
            <div class="price">¥129</div>
            <div class="number">
              <button>-</button>
              <input type="text" />
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <input type="checkbox" name="" id="" />
      <div class="total">合计¥1151.8</div>
      <button>结算</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style lang="less" scoped>
.header {
  line-height: 60px;
  text-align: center;
  background: #1d7bff;
  color: #fff;
  font-size: 18px;
}
.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .checkbox {
    margin: 0 20px;
  }
  img {
    width: 140px;
    height: 140px;
  }
  .info {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 140px;
    padding: 20px;
    justify-content: space-between;
    .bottom {
      display: flex;
      justify-content: space-between;
    }
    .number {
      display: flex;
      input {
        width: 30px;
      }
      button {
        width: 20px;
      }
    }
  }
}
.list {
    padding-bottom: 100px;
}
.footer {
  background-color: #fff;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  border-top: 2px solid #eee;
  button {
    border: none;
    background: #1d7bff;
    color: #fff;
    line-height: 30px;
    padding: 0 20px;
    border-radius: 15px;
  }
}
</style>