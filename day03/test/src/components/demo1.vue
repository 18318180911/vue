<template>
  <div>
    <h1>{{mgs}}</h1>
    <button @click="online">逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mgs:'Hello, World'
    }
  },
  methods: {
    online() {
      const array = this.mgs.split("");
      array.reverse();
      this.mgs = array.join("");;
    }
  }
}
</script>

<style>

</style>