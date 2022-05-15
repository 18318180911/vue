<template>
  <div>
    <!-- 过滤器:转换数据格式 -->
    商品价格: {{ price | priceFilter }}
    <h2>{{ "hello" | toUpperCase }}</h2>
    <!-- 过滤器能使用在插值表达式和v-bind属性里 -->
    <p :title="'hello vue' | toUpperCase">hello vue</p>
    <!-- 第2种写法 -->
    <p>{{ hi | reserseFn }}</p>
    <p>{{ 1 | moneyFilter("￥") }}</p>
    <p>{{ 1 | moneyFilter("元") }}</p>
    <p>{{ 1 | moneyFilter("$", "#") }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      hi: "hellow",
    };
  },
  // 声明在data同级下的filters对象里
  filters: {
    // 过滤器要声明为方法
    // 表达式的值是过滤器的第一个参数
    priceFilter(num) {
      return `${num < 10 ? "0" + num : num}￥`;
    },
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style>
</style>