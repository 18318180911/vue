<template>
  <div>
    <button @click="conName = 'MyUser'">账号</button>
    <button @click="conName = 'MyInfo'">个人信息</button>
    <!-- 缓存 -->
    <keep-alive>
      <component :is="conName"></component>
    </keep-alive>
    
  </div>
</template>

<script>
import MyUser from '@/components/test5/MyUser.vue'
import MyInfo from '@/components/test5/MyInfo.vue'
export default {
  data() {
    return {
      conName: '',
    };
  },
  components: {
    MyUser,
    MyInfo
  }
}
</script>

<style>

</style>