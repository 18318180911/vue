<template>
  <div>
    <!-- 列表 -->
    <div class="item">
      <input
        v-model="data.goods_state"
        class="checkbox"
        type="checkbox"
        name=""
        id=""
      />
      <img :src="data.goods_img" alt="" />
      <div class="info">
        <div class="top">{{ data.goods_name }}</div>
        <div class="bottom">
          <div class="price">¥{{ data.goods_price }}</div>
          <div class="number">
            <button>-</button>
            <input type="text" v-model="data.goods_count" />
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="less" scoped>
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
    .top {
      // 限制显示三行名字
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
    }
    .number {
      display: flex;

      input {
        width: 30px;
        text-align: center;
      }
      button {
        width: 20px;
      }
    }
  }
}
</style>