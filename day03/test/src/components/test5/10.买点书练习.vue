<template>
  <div>
    <p>请选择要购买的书籍</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.name }}
        <button @click="buy(index)">买书</button>
      </li>
    </ul>
    <div>
      <table>
        <tr>
          <td>序号</td>
          <td>书名</td>
          <td>单价</td>
          <td>数量</td>
          <td>合计</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.price * item.num }}</td>
        </tr>
      </table>
      <p>总价格为：{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "红楼梦",
          price: 107,
          num: 0,
        },
        {
          id: 2,
          name: "西游记",
          price: 192,
          num: 0,
        },
        {
          id: 3,
          name: "三国演义",
          price: 219,
          num: 0,
        },
        {
          id: 4,
          name: "红楼梦",
          price: 178,
          num: 0,
        },
      ],
    };
  },
  methods: {
    buy(index) {
      // console.log('买它')
      this.list[index].num++;
    },
  },
  computed: {
    // 累加和
    count() {
      let result = 0;
      this.list.forEach((item) => {
        let res = item.price * item.num;
        result += res;
      });
      return result;
    },
  },
};
</script>

<style>
button {
  border: 1px solid #ccc;
}
table {
  width: 600px;
}
table td,
table th {
  text-align: center;
  padding: 5px;
  border: 1px solid black;
}
</style>