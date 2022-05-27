<template>
  <div>
    <!-- 头部 -->
    <!-- left-arrow：左箭头
    $router.back()：返回一个路由地址
     -->
    <van-nav-bar title="个人信息编辑" left-arrow @click-left="$router.back()">
      <template #right>
        <van-icon name="wap-home-o" size="20" @click="$router.push('/index')" />
      </template>
    </van-nav-bar>
    <!-- 内容 -->
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
        v-model="showNickname"
        title="编辑昵称"
        show-cancel-button
        :before-close="nicknameBeforeCloseFn"
        @confirm="changeNicknameFn"
      >
        <van-field
          v-model.trim="nickname"
          required
          label="昵称"
          placeholder="请输入昵称"
        />
      </van-dialog>
      <van-cell
        title="密码"
        is-link
        value="******"
        @click="showPasswordDialogFn"
      />
      <van-dialog
        v-model="showPassword"
        title="修改密码"
        show-cancel-button
        :before-close="passwordBeforeCloseFn"
        @confirm="passwordChangeFn"
      >
        <van-field
          v-model="oldPassword"
          required
          label="原密码"
          placeholder="请输入原密码"
        />
        <van-field
          v-model="newPassword"
          required
          label="新密码"
          placeholder="请输入新密码"
        />
      </van-dialog>
      <van-cell
        title="性别"
        is-link
        :value="user.gender === 1 ? '男' : '女'"
        @click="showGenderFn"
      />
      <van-action-sheet
        v-model="genderShow"
        :actions="actions"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
import { userInfo, upload, user_update } from "@/api/user";
export default {
  data() {
    return {
      user: {},
      // 声明id
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
    // 在created中把id保存起来
    this.id = localStorage.getItem("75-userId");
    userInfo(this.id).then((res) => {
      this.user = res.data.data;
    });
  },
  methods: {
    // 修改头像
    afterRead(file) {
      // 可以把自行将文件上传到服务器
      console.log(file);
      // 上传文件必须使用formData数据格式
      let formdata = new FormData();
      // 把获取到的图片对象添加到formDta对象中
      formdata.append("file", file.file);
      upload(formdata).then((res) => {
        // 图片上传失败时，添加提示
        if (res.data.message !== "文件上传成功") {
          return this.$toast.fail(
            res.data.message + "图片格式不正确，只支持png和jpg格式!"
          );
        }
        let url = res.data.data.url;
        // 在获取图片在线地址后，调用修改头像接口，实现功能
        // 调用修改头像接口
        user_update(this.id, {
          head_img: url,
        }).then((res) => {
          // 判断修改成功胡，自动更新浏览器上的头像
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
      // 控制弹窗的显示
      this.showNickname = true;
      // 显示原来的昵称
      this.nickname = this.user.nickname;
    },
    // 修改昵称
    changeNicknameFn() {
      if (!this.nickname) {
        return this.$toast.fail("昵称不能为空");
      }
      user_update(this.id, {
        nickname: this.nickname,
      }).then((res) => {
        if (res.data.message == "修改成功") {
          // 在浏览器中显示的昵称
          this.user.nickname = this.nickname;
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    // 昵称弹窗 关闭前触发的函数
    // 组件只要加上了before-close属性，那么弹窗就必须调用done函数之后才会关闭
    nicknameBeforeCloseFn(action, done) {
      // 当输入的昵称为空，且 用户点击确认按钮
      if (!this.nickname && action === "confirm") {
        done(false);
      } else {
        done();
      }
    },
    // 控制密码弹窗的显示
    showPasswordDialogFn() {
      this.showPassword = true;
    },
    // 修改密码
    passwordChangeFn() {
      // 判断原密码是否正确
      if (this.oldPassword != this.user.password) {
        return this.$toast.fail("旧密码不能为空");
      }
      // 判断新旧密码是否相同
      if (this.oldPassword === this.newPassword) {
        return this.$toast.fail("新密码不能与旧密码一样");
      }
      // 新密码不能为空
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
    showGenderFn() {
      this.genderShow = true;
    },
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
    width: 80px;
    margin: 20px auto;
    position: relative;
    img {
      width: 100%;
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