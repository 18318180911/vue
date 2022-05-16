<template>
  <div>
      <div class="item">
          {{title}}
          <div>只收{{price}}</div>
          <div>{{info}}</div>
          <button @click="handleClick">砍价</button>
      </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'price', 'info', 'index'],
    methods: {
        handleClick() {
            console.log('降价');
            console.log(this.price);
            this.$emit('kanjia', this.index, 3)
        }
    }
}
</script>

<style>

</style>