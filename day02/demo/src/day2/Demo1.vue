<template>
  <div class="item" @click="handleClick">apple</div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            console.log('苹果被拿走了');
        }
    }
}
</script>

<style scoped>
.item {
    background-color: pink;
    color: aqua;
}
</style>