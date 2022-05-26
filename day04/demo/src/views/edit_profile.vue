<template>
  <div>
      <!-- 头部 -->
      <!-- left-arrow：左箭头 -->
    <van-nav-bar title="个人信息编辑" left-arrow>
      <template #right>
        <van-icon name="wap-home-o" size="20" />
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <div class="content">
        <div class="head_img">
            <img :src="user.head_img | joinPath" alt="">
            <van-uploader :after-read="afterRead" />
        </div>
        <van-cell title="昵称" is-link :value="user.nickname" />
        <van-cell title="密码" is-link value="******" />
        <van-cell title="性别" is-link :value="1 ? '男' : '女'" />
    </div>
  </div>
</template>

<script>
import {userInfo} from '@/api/user' 
export default {
    data() {
        return {
            user: {}
        }
    },
    created() {
        let id = localStorage.getItem('75-userId');
        userInfo(id).then(res =>{
            this.user = res.data.data;
        })
    },
    methods: {
        afterRead(file) {
            console.log(file)
        }
    }
};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar{
    border-bottom: 1px solid #ddd;
    .van-icon {
        color: #000;
    }
}
.content {
    .head_img{
        width: 80px;
        width: 80px;
        margin: 20px auto;
        position: relative;
        img {
            width:100%;
        }
        .van-uploader {
            position: absolute;
            top: 0;
            left: 0;
            // 透明度
            opacity: 0;
        }
    }
    .van-cell {
        border-bottom: 1px solid #ddd;
        margin-top: 10px;
    }
}
</style>