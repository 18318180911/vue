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
      axios({
        url: 'http://123.57.109.30:3006/api/getbooks',
        method: 'get'
      }).then(res => {
        console.log(res.data);
      })
    }
  }
}
</script>

<style>

</style>