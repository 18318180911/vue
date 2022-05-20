<template>
  <div>
       <input v-hello type="text" name="" id="">
      <input v-shows type="text" name="" id="">
  </div>
</template>

<script>
export default {
    directives: {
        "hello": {
            inserted(el) {
                console.log(el, 'hello')
            }
        },
        "shows": {
            inserted(el) {
                el.focus();
            }
        }
    }
}
</script>

<style>

</style>