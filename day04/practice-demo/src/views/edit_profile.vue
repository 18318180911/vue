<template>
  <div>
    <van-nav-bar title="个人编辑" left-arrow @click-left="$router.back()">
      <template #right>
        <van-icon name="wap-home-o" size="20" @click="$router.push('/index')" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="head_img">
        <img :src="user.head_img | joinPath" alt="" />
        <van-uploader :after-read="afterRead" />
      </div>
      <van-cell
        title="昵称"
        is-link
        :value="user.nickname"
        @click="showDialogFn"
      />
      <van-dialog
        :before-close="nicknameBrforeCloseFn"
        v-model="showNickname"
        title="编辑昵称"
        show-cancel-button
        @confirm="changeNicknameFn"
      >
        <van-field
          v-model.trim="nickname"
          required
          label="用户名"
          placeholder="请输入你的昵称"
        />
      </van-dialog>
      <van-cell
        title="密码"
        is-link
        value="******"
        @click="showPasswordDialogFn"
      />
      <van-dialog
       :before-close="passwordBeforeCloseFn"
        v-model="showPassword"
        title="修改密码"
        show-cancel-button
        @confirm="passwordChangeFn"
      >
        <van-field v-model="oldPassword" required label="原密码" placeholder="请输入原密码" />
        <van-field v-model="newPassword" required label="新密码" placeholder="请输入新密码" />
      </van-dialog>
      <van-cell title="性别" is-link :value="user.gender ===1 ? '男' : '女'" @click="showGenderFn" />
      <van-action-sheet v-model="genderShow" :actions="actions" @select="onSelect"  />
    </div>
  </div>
</template>

<script>
import { userInfo, upload, user_update } from "@/api/user";
export default {
  data() {
    return {
      user: {},
      id: null,
      showNickname: false,
      nickname: "",
      showPassword: false,
      oldPassword: "",
      newPassword: "",
      genderShow: false,
      actions: [
        { name: "男", gender: 1 },
        { name: "女", gender: 0 },
      ],
    };
  },
  created() {
    this.id = localStorage.getItem("75-userId");
    userInfo(this.id).then((res) => {
      this.user = res.data.data;
    });
  },
  methods: {
    //   修改头像
    afterRead(file) {
      // 可以把自行将文件上传到服务器
      console.log(file);
      // 上传文件必须使用formData数据格式
      let formdata = new FormData();
      // 把获取到的图片对象添加到formDta对象中
      formdata.append("file", file.file);
      upload(formdata).then((res) => {
        if (res.data.message !== "文件上传成功") {
          return this.$toast.fail(res.data.message);
        }
        let url = res.data.data.url;
        user_update(this.id, {
          head_img: url,
        }).then((res) => {
          if (res.data.message == "修改成功") {
            this.user.head_img = url;
          } else {
            this.$toast.fail(res.data.message);
          }
        });
      });
    },
    // 修改昵称
    showDialogFn() {
      this.showNickname = true;
      this.nickname = this.user.nickname;
    },
    // 修改昵称可保存
    changeNicknameFn() {
      if (!this.nickname) {
        return this.$toast.fail("昵称不能为空");
      }
      user_update(this.id, {
        nickname: this.nickname,
      }).then((res) => {
        console.log(72, res);
        if (res.data.message == "修改成功") {
          this.user.nickname = this.nickname;
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    // 阻止弹窗关闭
    nicknameBrforeCloseFn(action, done) {
      if (!this.nickname && action == "confirm") {
        done(false);
      } else {
        done();
      }
    },
    // 修改密码
    showPasswordDialogFn() {
      this.showPassword = true;
    },
    // 修改密码确定按钮
    passwordChangeFn() {
      // 在调用接口前添加判断
      // 1.原密码输入是否正确
      if (this.oldPassword != this.user.password) {
        return this.$toast.fail("旧密码不能为空");
      }
      // 2.新密码和原密码不能相同
      if (this.oldPassword === this.newPassword) {
        return this.$toast.fail("新密码不能与旧密码一样");
      }
      // 3.新密码不能为空
      if (!this.newPassword) {
        return this.$toast.fail("新密码不能为空");
      }
      // 调用接口 实现修改密码
      user_update(this.id, {
        password: this.newPassword,
      }).then((res) => {
        console.log(129, res);
        if (res.data.message === "修改成功") {
          // 更新原密码
          this.user.password = this.newPassword;
          // 提示用户修改密码成功
          this.$toast.success(res.data.message);
          // 清空输入框中的新旧密码
          this.oldPassword = "";
          this.newPassword = "";
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    // 优化修改密码功能
    // 优化：弹窗关闭前会触发的一个函数，可以用这个函数来阻止弹窗关闭
    passwordBeforeCloseFn(action, done) {
      if (action === "confirm") {
        // 点击了确认按钮
        // 判断原密码是否正确
        if (
          this.oldPassword != this.user.password ||
          this.oldPassword === this.newPassword ||
          !this.newPassword
        ) {
          done(false);
        } else {
          done();
        }
      } else {
        // 点击了取消按钮
        done();
      }
    },
    // 修改性别
    showGenderFn(){
        this.genderShow = true
    },
    // 性别组件绑定点击事件
    // 修改性别
    // 1.action：接收参数
    onSelect(action, index) {
      // action：当前用户点击的选项对应的对象
      // index：当前用户点击选项的下标值
      // 2.调用接口实现修改性别
      user_update(this.id, {
        gender: action.gender,
      }).then((res) => {
        console.log(161, res);
        // 更新浏览器上显示的性别，关闭弹窗
        if (res.data.message === "修改成功") {
          this.user.gender = action.gender;
          this.genderShow = false;
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  border-bottom: 1px solid #ddd;
  .van-icon {
    color: #000;
  }
}
.content {
  .head_img {
    width: 80px;
    margin: 20px auto;
    position: relative;
    img {
      width: 100%;
    }
  }
}
.van-uploader {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>