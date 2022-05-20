<template>
  <div>
      <li @click="clickFruit">{{data}}</li>
  </div>
</template>

<script>
export default {
    props : ['data'],
    methods: {
        clickFruit() {
            this.$emit('clickFruit', this.data)
        }
    }
}
</script>

<style>

</style>