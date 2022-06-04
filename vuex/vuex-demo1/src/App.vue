<template>
  <div>state的数据：{{ count }}</div>
</template>

<script>
export default {
computed: {
  count() {
    return this.$store.state.count
  }
}
}
</script>

<style>

</style>
