<template>
  <div>
      <button @click="toggleShow">切换</button>
      <div v-if="isShow" class="box" ref="myBox"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow
            this.$nextTick(() => {
                console.log(this.$refs.myBox);
            })
        }
    }
}
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  background: pink;
}
</style>