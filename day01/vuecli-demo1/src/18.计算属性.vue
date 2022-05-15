<template>
  <div>
    <!-- 计算属性，作用：根据一些数据计算出来一个属性 -->
    <!-- 当计算属性依赖的数据变化的时候，计算属性会重新运算 -->
    <!-- 计算属性是作为变量使用的，不要使用括号的语法 -->
    <!-- 计算属性不能和data里的变量重名 -->
    <h1>{{sum}} = {{a}} + {{b}}</h1>
    a: <input type="text" v-model.number="a">
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
    };
  },
  // 计算属性声明在data同级的computed对象里
  computed: {
    // 计算属性声明为方法
    sum() {
      return this.a + this.b;
    }
  },
}
</script>

<style>

</style>