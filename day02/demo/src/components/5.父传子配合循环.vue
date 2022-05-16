<template>
  <div>
    <div class="list">
      <div class="item">apple1</div>
      <Prodltem
        v-for="obj in list"
        :key="obj.id"
        :title="obj.proname"
        :price="obj.proprice"
        :info="obj.info"
      />
    </div>
  </div>
</template>

<script>
// 局部注册的演示
import Prodltem from "@/components/Prodltem.vue";

export default {
  data() {
    return {
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
    Prodltem,
  },
};
</script>

<style scoped>
.item {
  color: red;
}
</style>