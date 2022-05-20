<template>
  <div>
      <h4>水果案例</h4>
      <input type="text" v-model="furits" @keyup.enter="clickFruit">
      <p>当前选中的是：{{furitName}}</p>
      <ul>
          <MyFruit v-for="(item, index) in list" :key="index" :data="item" @clickFruit="changCurrent"/>
      </ul>
  </div>
</template>

<script>
import MyFruit from '@/components/test1/myFurits.vue'
export default {
    components: {
        MyFruit
    },
    data() {
        return {
            furits: '',
            list:[],
            furitName: '',
        }
    },
    methods: {
        clickFruit() {
            this.list.push(this.furits);
            this.furits = '';
        },
        changCurrent(data) {
            this.furitName = data
        }
    }
}
</script>

<style>

</style>