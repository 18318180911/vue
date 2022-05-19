<template>
  <div>
    <input type="text" v-model="bookName">
    <button @click="addBooks">点击</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
     return {
       bookName: '',
     }
  },
  methods: {
    addBooks() {
      if (!this.bookName) {
        alter('输入关键字');
        return
      }
      // axios 发请求只需要带上一个配置对象
      axios({
        url: 'http://123.57.109.30:3006/api/getbooks',
        // 请求方式
        method: 'get',
        params: {
          bookname: this.bookName
        }
      }).then(res => {
        console.log(res.data);
      })
    }
  }
}
</script>

<style>

</style>