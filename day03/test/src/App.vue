<template>
  <div>
    <h1>{{content}}</h1>
    <button @click="prot">逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 'Hello, World'
    }
  },
  methods: {
    prot() {
      const arr = this.content.split('');
      arr.reverse();
      this.content = arr.join('');
    }
  }
}
</script>

<style>

</style>