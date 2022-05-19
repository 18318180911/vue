<template>
  <div>
    <div>页面</div>
    <div id="myBox" ref="myBoxRef">盒子</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(document.getElementById('myBox'));
    console.log(this.$refs.myBoxRef);
  }
}
</script>

<style>