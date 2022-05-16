<template>
  <!-- 将需要封装的东西放入到 组件内 -->
  <div @click="handleClick">
    <!-- 父传子第三部, 数据直接可以使用 -->
    <!-- 被声明过 props 接收的数据， 就能当做 data 一样使用 -->
    <div class="item">
      {{title}}
      <div>每份只收 {{price}}</div>
      <div>{{info}}</div>
    </div>
</div>
</template>

<script>
export default {
// 父传子第二步, 子元素声明一个接受的配置 props
  // 父组件可以传数据, 但是没有权限控制我怎么渲染
  // 如果我愿意接收什么数据, 就以字符串数组的形式声明 props
  // 比如这里我愿意接收 title price, info 三个属性
  // props 可以声明接收任意数据, 但是父组件有没有传, 就不是你控制的了
  props: ['title', 'price', 'info'],
  methods: {
    handleClick() {
      console.log('大降价');
      console.log(this.price);
      this.price = 0.1
    }
  }
}
</script>

<style>

</style>