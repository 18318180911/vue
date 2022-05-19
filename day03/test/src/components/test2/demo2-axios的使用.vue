<template>
  <div>
    <button @click="addBooks">点击</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    addBooks() {
    // axios 发请求只需要带上一个配置对象
      axios({
          // url 地址
        url: 'http://123.57.109.30:3006/api/getbooks',
        // method 请求方法
        method: 'get',
        params: {
            bookname: this.bookName
        }
      }).then(res => {
        // 这个库有个特点, 会将你发请求的配置放在返回中一起交给你, 最终的数据, 其实是放在 res.data
        console.log(res.data);
      })
    }
  }
}
</script>

<style>

</style>