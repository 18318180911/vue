<template>
  <div>
    <!-- 头部 -->
    <div class="header">购物车案例</div>
    <!-- 列表 -->
    <div class="list">
      <prodItem v-for="item in list" :key="item.id" :data="item" />
    </div>
    <!-- 底部 -->
    <div class="footer">
      <input type="checkbox" v-model="isAll" name="" id="" />
      <div class="total">合计¥{{totalPrice}}</div>
      <button>结算{{totalCount}}</button>
    </div>
  </div>
</template>

<script>
import ProdItem from "@/components/test3/ProdItem.vue";
import { getCart } from "@/api/cart";
export default {
  data() {
    return {
      list: [],
    };
  },
   computed: {
          isAll: {
              get() {
                  return this.list.every(item => item.goods_state)
              },
              set(isChecked) {
                  this.list.forEach(element => {
                      element.goods_state = isChecked
                  });
              }
          },
          totalPrice() {
              let res = 0;
              this.list.forEach(element => {
                  if(element.goods_state) {
                      res += element.goods_count * element.goods_price
                  }
              });
              return res
          },
          totalCount() {
              let res = 0;
              this.list.forEach(element => {
                  if (element.goods_state) {
                      res += element.goods_count
                  }
              });
              return res
          }
      },
  components: {
    ProdItem,
  },
  created() {
    getCart().then((res) => {
      console.log("获取成功");
      console.log(res.data);
      this.list = res.data.list;
    });
  },
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  line-height: 60px;
  text-align: center;
  background: #1d7bff;
  color: #fff;
  font-size: 18px;
}
.list {
  height: 100vh;
  overflow: auto;
}
.footer {
  background-color: #fff;
  width: 100%;
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