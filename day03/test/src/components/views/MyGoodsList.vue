<template>
  <!-- <div>列表</div> -->
  <div>
    <MyTable :data="list">
    <template #header>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #content="{row, index}">
        <td>{{index + 1}}</td>
        <td>{{row.goods_name}}</td>
        <td>{{row.goods_price}}</td>
        <td>女装</td>
        <td>删除</td>
      </template>
      </MyTable>
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