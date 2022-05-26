<template>
  <div class="personal">
    <router-link to="/edit_profile">
      <div class="profile">
        <img
          :src="user.head_img | joinPath"
          alt
        />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont" :class="{ iconxingbienv: user.gender == 0, iconxingbienan: user.gender == 1}">{{user.nickname}}</span>
          </div>
          <div class="time" v-formatDate="user.create_date"></div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <div class="content">
        <van-cell title="我的关注" is-link value="关注的用户" />
        <van-cell title="我的跟帖" is-link value="跟帖/回复" />
        <van-cell title="我的收藏" is-link value="文章/视频" />
        <van-cell title="设置" is-link />
    </div>
    <van-button color="#eb6112" block round @click="logoutFn">退出</van-button>
  </div>
</template>

<script>
import {userInfo} from '@/api/user'
export default {
  data() {
    return {
      // 用于保存数据
      user: {}
    }
  },
  created() {
    let id = localStorage.getItem("75-userId");
    userInfo(id).then(res => {
      console.log(32,res);
      this.user = res.data.data
    })
  },
  methods: {
    logoutFn() {
      // 清除缓存数据
      localStorage.removeItem("75-token");
      localStorage.removeItem("75-userId");
      // 当跳转页面时，无需传参数就使用该语法
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
.van-cell{
    background-color: #eee;
    border-bottom: 1px solid #ddd;
    margin-top: 10px;
}
.van-button{
    width: 90%;
    margin: 20px auto;
}
.personal {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: (70 / 360) * 100vw;
    height: (70 / 360) * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>