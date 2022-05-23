<template>
  <div id="app">
    <table>
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td class="add"> <button class="add" @click="del(index)">删除</button></td>
      </tr>
      <tr>
        <td colspan="4">没有数据</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '奔驰',
          time: '2020-08-01'
        },
         {
          id: 2,
          name: '宝马',
          time: '2020-08-02'
        },
         {
          id: 3,
          name: '奥迪',
          time: '2020-08-03'
        }
      ]
    }
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      // console.log('删除成功')
      this.list.splice(index, 1);
  }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
table th {
  background-color: #0094ff;
  color: #fff;
}
table td,
table th {
  text-align: center;
  padding: 5px;
  border: 1px solid black;
}
.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}

</style>