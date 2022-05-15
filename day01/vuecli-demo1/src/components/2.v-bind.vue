<template>
  <div>
    <!-- 指令-v-bind属性动态赋值 -->
    <!-- - 语法：`v-bind:属性名="vue变量"` -->
    <!-- - 简写：`:属性名="vue变量"` -->
    <p>
      <a v-bind:href="baiduUrl">百度</a>
    </p>
    <p>
      <img :src="imgUrl" alt="" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    // 格式固定, 定义vue数据之处
    return {
      // key相当于变量名
      baiduUrl: "https://www.baidu.com",
      imgUrl:
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
    };
  },
};
</script>