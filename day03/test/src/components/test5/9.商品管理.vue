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
            <!-- v-for渲染数据 -->
            <tr v-for="(item, index) in list" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <!-- 超过一百块钱显示高亮 -->
              <td :class="{ expensive: item.price > 100 }">{{ item.price }}</td>
              <td>{{ item.time | dateFilter }}</td>
              <td>
                <!-- 给删除按钮绑定点击事件 -->
                <button type="button" class="btn btn-link" @click="del(index)">
                  删除
                </button>
              </td>
            </tr>
            <tr class="bg-light">
              <th scope="row">统计</th>
              <td colspan="2">总价：{{ totalPrice }}</td>
              <td colspan="2">均价：{{ random }}</td>
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
        <!-- 给表单v-model绑定vue变量收集用户输入内容 -->
        <input
          type="text"
          class="form-control"
          placeholder="资产名称"
          v-model="productName"
        />
      </div>
      <div class="col-3">
        <input
          type="text"
          class="form-control"
          placeholder="价格"
          v-model="productPrice"
        />
      </div>

      <div class="col-3">
        <!-- 给添加资产按钮绑定点击事件 -->
        <!-- click.prevent阻止表单默认行为 -->
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="addProperty"
        >
          添加资产
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "App",
  data() {
    return {
      // list: [
      //   {
      //     id: 100,
      //     name: "外套",
      //     price: 199,
      //     time: new Date("2010-08-12"),
      //   },
      //   {
      //     id: 101,
      //     name: "裤子",
      //     price: 34,
      //     time: new Date("2013-09-01"),
      //   },
      //   {
      //     id: 102,
      //     name: "鞋",
      //     price: 25.4,
      //     time: new Date("2018-11-22"),
      //   },
      //   {
      //     id: 103,
      //     name: "头发",
      //     price: 19900,
      //     time: new Date("2020-12-12"),
      //   },
      // ],
      list: JSON.parse(localStorage.getItem("list")) || [],
      productName: "",
      productPrice: "",
    };
  },
  watch: {
    list(newVal) {
      // 改变是备份数据
      console.log(localStorage.setItem("list", JSON.stringify(newVal)));
    },
  },
  // 计算总价和评价
  computed: {
    totalPrice() {
      let total = 0;
      this.list.forEach((item) => {
        total += item.price;
      });
      return total;
    },
    random() {
      if (this.list.length == 0) {
        return 0;
      }
      return this.totalPrice / this.list.length;
    },
  },
  // 转换时间格式
  filters: {
    dateFilter(time) {
      return moment(time).format("YYYY-MM-DD");
    },
  },
  methods: {
    // 添加
    addProperty() {
      // 判断用户s输入内容是否符合规定
      if (!this.productName || !this.productPrice) {
        alert("资产名称和价格不能为空");
        return;
      }
      let id;
      if (this.list.length > 0) {
        // 根据列表最后一个id+1,若是空就对于100
        id = this.list[this.list.length - 1].id + 1;
      } else {
        id = 100;
      }
      // 添加数据到数组中
      this.list.push({
        id,
        name: this.productName,
        price: this.productPrice,
        time: new Date(),
      });
    },
    // 删除
    del(index) {
      // 通过index找到对应的数据删除
      this.list.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.expensive {
  color: red;
}
</style>