<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt-3">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">编号</th>
              <th scope="col">资产名称</th>
              <th scope="col">价格</th>
              <th scope="col">创建时间</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- 1.使用v-for遍历数组，渲染数据 -->
            <tr v-for="item in list" :key="item.id">
              <th scope="row">{{item.id}}</th>
              <td>{{item.name}}</td>
              <!-- 2.价格大于100显示红色 -->
              <td :class="{color: item.price > 100}">{{item.price}}</td>
              <td>{{item.time}}</td>
              <td>
                <button type="button" class="btn btn-link">删除</button>
              </td>
            </tr>
            <tr class="bg-light">
              <th scope="row">统计</th>
              <td colspan="2">总价：0</td>
              <td colspan="2">均价：0</td>
            </tr>
          </tbody>
          <tfoot style="display: none">
            <tr>
              <td class="text-center" colspan="5">暂无数据</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <form class="row align-items-center">
      <div class="col-3">
        <input type="text" class="form-control" placeholder="资产名称" />
      </div>

      <div class="col-3">
        <input type="text" class="form-control" placeholder="价格" />
      </div>

      <div class="col-3">
        <button type="submit" class="btn btn-primary">添加资产</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        {
          id: 100,
          name: "外套",
          price: 199,
          time: new Date("2010-08-12"),
        },
        {
          id: 101,
          name: "裤子",
          price: 34,
          time: new Date("2013-09-01"),
        },
        {
          id: 102,
          name: "鞋",
          price: 25.4,
          time: new Date("2018-11-22"),
        },
        {
          id: 103,
          name: "头发",
          price: 19900,
          time: new Date("2020-12-12"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.color{
  color: red;
}
</style>