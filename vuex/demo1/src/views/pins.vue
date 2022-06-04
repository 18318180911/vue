<template>
  <div>
      <h1>沸点</h1>
      <div>
          <h1>elementUI的表单验证</h1>
          <el-form :model="ruleForm" :rules="rules" ref="form">
              <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                  <el-input v-model="ruleForm.age"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                  <el-input v-model="ruleForm.gender"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button @click="submit">提交</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                age: 0,
                gender: '男'
            },
            rules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'}
                ],
                age: [
                    {required: true, message: '请输入年龄', trigger: 'blur'}
                ],
                gender: [
                    {required: true, message: '请输入性别', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate((bool) => {
                // bool值为true表示校验通过，否则校验不通过
                if(bool) {
                    this.$message({
                        type: 'success',
                        message: '恭喜你，校验成功了'
                    })
                    console.log('校验通过')
                } else{
                    this.$message.error('校验不通过')
                    console.log('校验不通过')
                }
            })
        }
    }
}
</script>

<style>

</style>