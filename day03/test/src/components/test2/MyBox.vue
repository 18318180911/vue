<template>
  <div>
      我的盒子{{msg}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '666'
        }
    },
    methods: {
        dajiao() {
            alert('是组件')
        }
    }
}
</script>

<style>

</style>