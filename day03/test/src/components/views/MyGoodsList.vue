<template>
  <!-- <div>列表</div> -->
  <div>
    <MyTable />
  </div>
</template>

<script>
import MyTable from '@/components/test6/MyTable.vue'
import axios from 'axios'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net/'
export default {
  components: {
    MyTable
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    axios({
      url: '/api/goods'
    }).then(res => {
      console.log(res.data.data);
      this.list = res.data.data
    })
  }
}
</script>

<style>

</style>