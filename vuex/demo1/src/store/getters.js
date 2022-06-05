export default {
    // 声明变量，值是一个函数，这个函数必须要有返回值
    // 需求：页面中需要用到state中的list数组中大于5的数据
    filterList: (state)=>{
      // state: 内置参数，指的就是和getter同级的state属性
      return state.list.filter(item=>item>5)
    },
    pr:(state)=>{
      return state.obj.student.address.pr
    },
    token: state=>state.user.token,
    name: state=>state.setting.name
  }