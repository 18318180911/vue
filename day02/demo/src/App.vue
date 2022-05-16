<template>
  <div>
    <div class="list">
      <div class="item">apple1</div>
      <Prodltem title="小龙虾" price="10" info="好好吃" />
    </div>
  </div>
</template>

<script>
// 局部注册的演示
import Prodltem from '@/components/Prodltem.vue';

export default {
components: {
    Prodltem
  }
}
</script>

<style scoped>
.item {
    color: red;
}
</style>