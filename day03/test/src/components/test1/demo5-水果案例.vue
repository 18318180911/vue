<template>
  <div>
      <h4>水果案例</h4>
      <input type="text" v-model="furits" @keyup.enter="clickFrits">
      <p>当前被点击的是：{{fruitsName}}</p>
      <ul>
          <li v-for="(item, index) in list" :key="index" @click="fruitsName = item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            furits: '',
            list: [],
            fruitsName:'',
        }
    },
    methods: {
        clickFrits() {
            // 添加
            this.list.push(this.furits);
            // 清空
            this.furits = ''
        }
    }
}
</script>

<style>

</style>