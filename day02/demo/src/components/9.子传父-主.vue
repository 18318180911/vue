<template>
  <div>
    <div class="list">
      {{msg}}
      <div class="item" @click="msg = 'hello word'">修改</div>
      <Prodltem
        v-for="(obj, index) in list"
        :index="index"
        :key="obj.id"
        :title="obj.proname"
        :price="obj.proprice"
        :info="obj.info"
        @kanjia="handleKanjia"
      />
    </div>
  </div>
</template>

<script>
// 局部注册的演示
import Prodltem from "@/components/10.子传父的写法.vue";

export default {
  data() {
    return {
      msg: '你好',
      list: [
      {
        id: 1,
        proname: "超级好吃的棒棒糖",
        proprice: 18.8,
        info: "开业大酬宾, 全场8折",
      },
      {
        id: 2,
        proname: "超级好吃的大鸡腿",
        proprice: 34.2,
        info: "好吃不腻, 快来买啊",
      },
      {
        id: 3,
        proname: "超级无敌的冰激凌",
        proprice: 14.2,
        info: "炎热的夏天, 来个冰激凌了",
      },
    ],
    }
  },
  components: {
    Prodltem
  },
  methods: {
    handleKanjia(index, price) {
      // 如果原价大于要减的价格, 将价格减掉
      if (this.list[index].proprice > price) {
        this.list[index].proprice = (this.list[index].proprice - price).toFixed(2)
      }
    }
  }
};
</script>

<style scoped>
.item {
  color: red;
}
</style>