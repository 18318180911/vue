<template>
  <div>
    <MyTable :data="list">
        <template v-slot="scope">
              <td>{{scope.index + 1}}</td>
            <td>{{scope.row.name}}</td>
            <td>{{scope.row.age}}</td>
            <td><img :src="scope.row.headImgUrl" alt=""></td>
        </template>
    </MyTable>
    
  </div>
</template>

<script>
import MyTable from "@/components/test4/MyTable.vue";
export default {
  components: { MyTable },
  data() {
    return {
      list: [
        {
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>