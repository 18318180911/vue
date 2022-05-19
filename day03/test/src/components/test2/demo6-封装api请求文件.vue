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
// import axios from 'axios'
// import request from '@/utils/request'
import {getBooks, addBook} from '@/api/book'

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
      const params = {
        bookname: this.bookName
      }
      getBooks(params).then(res => {
        console.log(res.data);
      })
    },
    addBook() {
      const data = {
          // post 请求一般用这个方式带参数, 实际的作用是将数据放入到请求载荷(请求体)中
          appkey:"7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.bookData
        }
      addBook(data).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>