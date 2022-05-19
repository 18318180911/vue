<template>
  <div>
    <MyBox id="zjBox" ref="zjBoxRef"/>
  </div>
</template>

<script>
import MyBox from '@/components/test2/MyBox.vue'
export default {
  components: {MyBox},
  mounted() {
    // 用id获取组件
    console.log(document.getElementById('zjBox'));
    // 用ref获取组件
    console.log(this.$refs.zjBoxRef);
    setTimeout(() => {
      this.$refs.zjBoxRef.msg = '888'
      this.$refs.zjBoxRef.dajiao()
    }, 1000);
  }
}
</script>

<style>

</style>