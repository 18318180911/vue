<template>
  <div>
    <p>
      来自于:
      <select v-model="city">
        <option value="湛江">湛江</option>
        <option value="广州">广州</option>
        <option value="深圳">深圳</option>
      </select>
    </p>
    <p>
      爱好：<input type="checkbox" value="王者荣耀" v-model="hoby" />王者荣耀
      <input type="checkbox" value="看综艺" v-model="hoby" />看综艺
      <input type="checkbox" value="敲代码" v-model="hoby" />敲代码
    </p>
    <p>
      性别：<input type="radio" value="男" v-model="gender" />男
      <input type="radio" value="女" v-model="gender" />女
    </p>
    <p>自我介绍: <textarea v-model="intro"></textarea></p>
    <button @click="word">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "湛江",
      hoby: [],
      agree: false,
      gender: "",
      intro: "",
    };
  },
  methods: {
    word() {
      console.log(this.city, this.hoby, this.gender, this.intro);
    },
  },
};
</script>

<style>
</style>