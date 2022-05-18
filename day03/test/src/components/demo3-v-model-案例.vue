<template>
  <div>
    <p>
      来自于：<select v-model="ctiy">
        <option value="湛江">湛江</option>
        <option value="广州">广州</option>
        <option value="深圳">深圳</option>
      </select>
    </p>
    <!-- checkbox多选的时候，要把v-model绑定的变量声明为数组 -->
    <!-- 单选的时候v-model变量为非数组，绑定的是checked属性 -->
    <p>
      爱好：<input type="checkbox" value="打王者" v-model="hobby">打王者
      <input type="checkbox" value="睡觉" v-model="hobby">睡觉
      <input type="checkbox" value="辣条" v-model="hobby">辣条
    </p>
    <p>
      <!-- 单选的时候v-model变量为非数组，绑定的是checked属性 -->
      <input type="checkbox" v-model="agree"> 用户是否同意
    </p>
    <p>
      性别：<input type="radio" value="男" v-model="gender">男
      <input type="radio" value="女" v-model="gender">女
    </p>
    <p>
      自我介绍：<textarea v-model="info"></textarea>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctiy: '',
      hobby: [],
      agree: false,
      gender: '',
      info: '',
    }
  }
}
</script>

<style>