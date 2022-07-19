<template>
  <div class="login">
    <div class="left-box">
      <h1>欢迎光临</h1>
    </div>
    <div class="right-box">
      <div class="login-form">
        <h2>欢迎回来</h2>
        <img src="../../../public/WechatIMG2.jpeg" alt="" />

        <!-- 登陆验证表单 -->
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model="ruleForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="ruleForm.password"
              :show-password="true"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmitForm('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../../api/login.js";
export default {
  name: "VueIndex",

  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    handleSubmitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await this.$store.dispatch("user/login", this.ruleForm);
          if (res.status === 200) {
            this.$router.push("/");
            this.$notify({
              title: "提示",
              message: "登录成功！",
              type: "success",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left-box {
    width: 67%;
    height: 100vh;
    background-color: rgba(100, 102, 237);
    h1 {
      color: white;
      font-size: 3rem;
      text-align: center;
      line-height: 100vh;
    }
  }
  .right-box {
    width: 33%;
    height: 100vh;
    background-color: white;
    position: relative;
    .login-form {
      width: 54%;
      font-size: 1.2rem;
      text-align: center;
      position: absolute;
      /* 向右、向下移动父盒子的一半 （偏移量） */
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 80%;
        height: 1.65rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }
      :deep(.el-input__inner) {
        font-size: 0.375rem;
        height: 1.875rem;
      }
      :deep(.el-form-item) {
        margin-bottom: 0.875rem;
      }
      .el-button {
        padding: 8px 15px;
        width: 16rem;
        border-radius: 14px;
        background-color: rgba(100, 102, 237);
        border: none;
      }
    }
  }
}
</style>