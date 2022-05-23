<template>
  <div>
    <div class="box">
      <p>请选择你喜欢的专栏</p>
    <p>
      <input type="checkbox" value="科幻" v-model="hoby"  @click="dianji"/>科幻
      <input type="checkbox" value="喜剧" v-model="hoby"  @click="dianji"/>喜剧
      <input type="checkbox" value="动漫" v-model="hoby"  @click="dianji"/>动漫
      <input type="checkbox" value="军事" v-model="hoby"  @click="dianji"/>军事
      <input type="checkbox" value="娱乐" v-model="hoby"  @click="dianji"/>娱乐
      <input type="checkbox" value="奇闻" v-model="hoby"  @click="dianji"/>奇闻
    </p>
    <ul>
      <li v-for="(item, index) in hoby" :key="index">{{item}}</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoby:[],
      list:[],
    }
  },
  methods: {
    dianji() {
 
      this.list.push(this.hoby)
    }
  }
}
</script>

<style>
.box {
  margin: 10px auto;
  width: 600px;
}
</style>