<template>
  <div>
    <input type="text" v-model="bookName">
    <button @click="addBooks">点击</button>
    <h2>新增</h2>
    <input type="text" placeholder="作者" v-model="bookData.author">
    <input type="text" placeholder="出版社" v-model="bookData.publisher">
    <input type="text" placeholder="书名" v-model="bookData.bookname">
    <button @click="addBook">添加</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
     return {
       bookName: '',
       bookData: {
         bookname: '',
         suthor: '',
         publisher: '',
       }
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
        },
        data:{
          a: 666,
        }
      }).then(res => {
        console.log(res.data);
      })
    },
    addBook() {
      axios({
        method: 'POST',
        url: 'http://123.57.109.30:3006/api/addbook?a=1&b=2',
        data: {
          // post 请求一般用这个方式带参数, 实际的作用是将数据放入到请求载荷(请求体)中
          appkey:"7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.bookData
        }
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>