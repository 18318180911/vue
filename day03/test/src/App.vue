<template>
  <div>
      <!-- 动态组件 -->
    <button @click="componentsName = 'UserInfo'">个人信息</button>
    <button @click="componentsName = 'UserName'">账号登陆</button>
    <!-- 组件缓存 -->
    <keep-alive>
        <component :is="componentsName"></component>
    </keep-alive>
    
  </div>
</template>

<script>
import UserInfo from "@/components/test4/UserInfo.vue";
import UserName from "@/components/test4/UserName.vue";
export default {
  data() {
    return {
      componentsName: "UserInfo",
    };
  },
  components: {
    UserInfo,
    UserName,
  },
};
</script>

<style>
</style>