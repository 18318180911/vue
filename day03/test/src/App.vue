<template>
  <div>
    <MyHeader bg="#99ccff" title="tabbat案例" />
    <MyTabBar :tabList="tabList" />
  </div>
</template>

<script>
import MyHeader from "@/components/test6/MyHeader.vue";
import MyTabBar from "@/components/test6/MyTabBar.vue";
export default {
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
  },
};
</script>

<style>
</style>