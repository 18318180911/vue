<template>
  <div>
    <!-- :style="{{ 样式的值}}, 样式如果带横线，改为小驼峰，也可以使用双引号" -->
    <!-- :class="{{类名：布尔值}}"，类名如果包含横线，采用双引号 -->
    <button
      @click="fontColor = 'bule'"
      :style="{ color: fontColor, fontSize: '60px' }"
      :class="{ 'text-center': true, textTop: true }"
    >
      点开
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontColor: "pink",
    };
  },
};
</script>

<style>
.off {
  background-color: #ccc;
}
</style>