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
import {userInfo, upload, user_update} from '@/api/user' 
export default {
    data() {
        return {
            user: {},
            // 声明id
            id: null
        }
    },
    created() {
        // 在created中把id保存起来
        this.id = localStorage.getItem('75-userId');
        userInfo(this.id).then(res =>{
            this.user = res.data.data;
        })
    },
    methods: {
        afterRead(file) {
            // 可以把自行将文件上传到服务器
            console.log(file);
            // 上传文件必须使用formData数据格式
            let formdata = new FormData()
            // 把获取到的图片对象添加到formDta对象中
            formdata.append('file', file.file)
            upload(formdata).then(res => {
                let url = res.data.data.url
                // 在获取图片在线地址后，调用修改头像接口，实现功能
                // 调用修改头像接口
                user_update(this.id, {
                    head_img: url
                }).then(res => {
                    // 判断修改成功胡，自动更新浏览器上的头像
                    if(res.data.message == '修改成功'){
                        this.user.head_img = url
                    }else{
                        this.$toast.fail(res.data.message)
                    }
                })
            })
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