<template>
  <div @click="handleClick">
    <div class="item">
      {{ title }}
      <div>只要{{ price }}</div>
      <div>{{ info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "info"],
  methods: {
    handleClick() {
      console.log("买它");
    },
  },
};
</script>

<style>
.item {
  border: 1px solid salmon;
  line-height: 50px;
}
</style>