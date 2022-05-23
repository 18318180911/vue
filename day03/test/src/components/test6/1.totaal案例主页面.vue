<template>
  <div>
    <MyHeader bg="#99ccff" title="tabbat案例" />
    <component :is="currentCom"/>
    <MyTabBar @changeCom="changeCom" :tabList="tabList" />
  </div>
</template>

<script>
import MyHeader from "@/components/test6/MyHeader.vue";
import MyTabBar from "@/components/test6/MyTabBar.vue";
import MyGoodsList from "@/components/views/MyGoodsList.vue";
import MyGoodsSearch from "@/components/views/MyGoodsSearch.vue";
import MyUserInfo from "@/components/views/MyUserInfo.vue";
export default {
  data() {
    return {
      currentCom :'MyGoodsList',
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
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  methods: {
    changeCom(name) {
      this.currentCom = name
    }
  },
  created() {
    console.log(this.$router)
  }
};
</script>

<style>
</style>