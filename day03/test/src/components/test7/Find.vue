<template>
  <div>hi
      <br>
      <button @click="handleClick">点它</button>
  </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
        console.log('点击了');
        this.$router.push({
            name: 'MyPage'
        })
    }
    }
}
</script>

<style>

</style>