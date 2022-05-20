<template>
  <div>
    <!-- 头部 -->
    <div class="header">购物车案例</div>
    <!-- 列表 -->
    <ProdItem/>
    <!-- 底部 -->
    <div class="footer">
      <input type="checkbox" name="" id="" />
      <div class="total">合计¥1151.8</div>
      <button>结算</button>
    </div>
  </div>
</template>

<script>
import ProdItem from '@/components/test3/ProdItem.vue'
export default {
    components: {
        ProdItem
    }
};
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