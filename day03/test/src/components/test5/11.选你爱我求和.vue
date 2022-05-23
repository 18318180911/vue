<template>
  <div>
    <p v-for="(item, index) in list" :key="index">
      <input type="checkbox" v-model="arr" :value="item"/>{{item}}
    </p>
    <br>
    <p>你选中的元素，累加的值和为： {{sum}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      arr: [],
    }
  },
  computed: {
    sum() {
      let result = 0;
      this.arr.forEach((item) => {
        result += item
        console.log(result)
      })
      return result
    }
  }
}
</script>

<style>
p {
  display: inline-block;
  margin-left: 10px;
}
</style>