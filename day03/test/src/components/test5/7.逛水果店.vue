<template>
  <div>
    <div id="box">
      <p>欢迎光临_vue开发的收银系统_水果店</p>
      <div class="box1">
        <div class="box2">苹果{{ num1 }}￥/斤，折扣《{{ num2 }}折》</div>
        <div class="box3">
          请输入你要购买的斤数：<input type="text" v-model="num" />
          <br />
          <button @click="cout">结账买单~</button>
        </div>
        改动就计算：
        <div class="box4">
          结账单 总价：{{ num1 * num }}￥元 折后价：{{
            (num1 * num * num2) / 10
          }}元 省了{{ num1 * num - (num1 * num * num2) / 10 }}元
        </div>
        点击后计算
        <div class="box4">
          结账单 总价：{{ num1 * num3 }}￥元 折后价：{{
            (num1 * num3 * num2) / 10
          }}元 省了{{ num1 * num3 - (num1 * num3 * num2) / 10 }}元
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 10,
      num2: 8,
      num3: 0,
      num: 0,
    };
  },
  methods: {
    cout() {
      console.log("结账");
      //首先要明确，num的值我们修改input中的值 时，num就直接改变了，但num3是没有变化的，
      // 我们点击的，将num的值赋值给num3，view（页面/html）中依赖num3的都会改变，就这样~
      this.num3 = this.num;
    },
  },
};
</script>

<style>
#box {
  margin: 10px auto;
  text-align: center;
}
.box1 {
  width: 600px;
  border: 1px solid #ccc;
}
.box2 {
  font-weight: 700;
  border: 1px solid #ccc;
}
.box3 {
  border: 1px solid #ccc;
}
.box4 {
  border: 1px solid #ccc;
}
</style>